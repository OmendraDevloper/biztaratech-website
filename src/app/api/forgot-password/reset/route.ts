import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { hash } from 'bcryptjs';

const uri = process.env.MONGODB_URI || '';
const dbName = process.env.MONGODB_DB || 'Biztara';

export async function POST(req: NextRequest) {
  try {
    const { email, token, newPassword } = await req.json();
    if (!email || !token || !newPassword) {
      return NextResponse.json({ success: false, error: 'Email, token, and new password are required.' }, { status: 400 });
    }
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);
    const users = db.collection('users');
    const user = await users.findOne({ email, resetToken: token });
    if (!user || !user.resetTokenExpires || new Date(user.resetTokenExpires) < new Date()) {
      await client.close();
      return NextResponse.json({ success: false, error: 'Invalid or expired reset token.' }, { status: 400 });
    }
    const hashedPassword = await hash(newPassword, 10);
    await users.updateOne(
      { email },
      { $set: { password: hashedPassword }, $unset: { resetToken: "", resetTokenExpires: "" } }
    );
    await client.close();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
