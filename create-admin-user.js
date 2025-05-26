// Usage: node create-admin-user.js
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

const uri = 'mongodb://localhost:27017'; // Update if needed
const dbName = 'Biztara';

async function main() {
  const username = 'admin'; // Change as needed
  const email = 'admin@example.com'; // Change as needed
  const password = 'AdminPassword123!'; // Change as needed
  const name = 'Admin User';
  const mobile = '1234567890';
  const role = 'admin';

  const hashedPassword = await bcrypt.hash(password, 10);
  const client = await MongoClient.connect(uri);
  const db = client.db(dbName);
  const users = db.collection('users');

  const existing = await users.findOne({ $or: [ { email }, { username } ] });
  if (existing) {
    console.log('User with this email or username already exists.');
    await client.close();
    return;
  }

  await users.insertOne({
    name,
    email,
    username,
    password: hashedPassword,
    role,
    mobile,
    createdAt: new Date()
  });
  await client.close();
  console.log('Admin user created successfully!');
}

main().catch(console.error);
