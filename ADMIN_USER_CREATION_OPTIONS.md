# Admin User Creation Options for Biztara Tech Website

This document outlines different approaches to create an admin user for the Biztara Tech website, with the most reliable method listed first.

## Option 1: MongoDB Atlas Shell (Recommended)

This method bypasses any SSL/TLS issues you might encounter connecting locally.

1. Log in to [MongoDB Atlas](https://cloud.mongodb.com)
2. Go to your cluster (Cluster0) and click "Browse Collections"
3. Click the "Mongosh" button to open the MongoDB shell
4. Copy and paste the commands from `create-admin-mongodb-shell.js` directly into the shell
5. Verify the user was created with the provided verification command

## Option 2: MongoDB Compass

If you prefer a GUI tool:

1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect to your MongoDB Atlas cluster using the connection string
3. Navigate to the "Biztara" database and "users" collection
4. Click "Add Data" → "Insert Document"
5. Paste the following JSON structure:

```json
{
  "name": "Omendra Dwivedi",
  "email": "omendrad@gmail.com",
  "username": "omendra",
  "password": "$2b$10$ZbF6Ypz73Vrm7zF96brYaObtMFcP1qIMKTaJbA0f7a7FtSPjZt9d6",
  "role": "admin",
  "mobile": "8197317345",
  "createdAt": {"$date": "2024-05-29T00:00:00Z"}
}
```

## Option 3: Node.js Scripts (If You Need to Generate New Password Hashes)

If you need to create users with different passwords:

1. Use the provided `generate-hash.js` script to generate bcrypt hashes:
   ```
   node generate-hash.js YourPassword
   ```
2. Replace the password hash in either Option 1 or Option 2

## Option 4: Vercel CLI Deployment Hook

As a last resort, you could create a temporary API endpoint in your application that creates the admin user, deploy it, access it once, then remove it.

## Troubleshooting

If you encounter issues logging in after user creation:

1. Verify the database name matches the one in your Vercel environment variables
2. Check that the password hash was generated with the same bcrypt version
3. Ensure case-sensitivity in usernames and emails matches what you enter on the login form
4. Make sure there are no whitespace characters in the username or email

## Security Notes

- Delete the `create-admin-mongodb-shell.js` file after use
- Always use strong, unique passwords for admin accounts
- Consider implementing two-factor authentication for admin accounts in the future
- Regularly rotate admin passwords and monitor account activity
