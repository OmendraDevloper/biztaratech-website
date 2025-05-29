import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoClient } from "mongodb";
import { compare } from "bcryptjs";

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'Biztara';

// Check if we're in a build/prerender context
const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Skip authentication during build
        if (isBuildTime) {
          return null;
        }
        
        try {
          const client = await MongoClient.connect(uri);
          const db = client.db(dbName);
          const users = db.collection("users");
          const user = await users.findOne({
            $or: [
              { username: credentials?.username },
              { email: credentials?.username }
            ]
          });
          await client.close();
          
          // User not found
          if (!user) {
            return null;
          }
          
          // Check password
          if (user && credentials?.password) {
            const isValid = await compare(credentials.password, user.password);
            if (isValid) {
              // Ensure id is a string for NextAuth compatibility
              return {
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                role: user.role || 'student',
                _id: user._id.toString()
              };
            }
            // For incorrect password, return null but don't throw
            return null;
          }
          
          return null;
        } catch (error) {
          console.error("NextAuth authentication error:", error);
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/signin"
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Log for debugging
      console.log('signIn callback', { user, account, profile, email, credentials });
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Log for debugging
      console.log('redirect callback', { url, baseUrl });
      return baseUrl;
    },
    async session({ session, token }) {
      // Always persist all needed fields
      session.user = Object.assign({}, session.user, {
        role: token.role,
        _id: token._id,
        name: token.name,
        email: token.email,
      });
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // Skip DB connection during build
        if (isBuildTime) {
          return token;
        }
        
        try {
          // On sign-in, fetch all fields from DB
          const client = await MongoClient.connect(uri);
          const db = client.db(dbName);
          const users = db.collection('users');
          const dbUser = await users.findOne({ email: user.email });
          await client.close();
          token.role = dbUser?.role || 'student';
          token._id = dbUser?._id.toString();
          token.name = dbUser?.name;
          token.email = dbUser?.email;
        } catch (error) {
          console.error("Error fetching user data for JWT:", error);
          // Don't fail completely, just use what we have
        }
      }
      return token;
    }
  },
  debug: true
});

export { handler as GET, handler as POST };
