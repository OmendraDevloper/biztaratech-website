#!/usr/bin/env node
// Usage: NODE_TLS_REJECT_UNAUTHORIZED=0 node create-admin-simple.js <mongodb-uri> <username> <email> <password> <name> <mobile>
// The NODE_TLS_REJECT_UNAUTHORIZED=0 environment variable is used to bypass SSL certificate validation
// This is not recommended for production use but can help bypass SSL issues during admin user creation

console.log('Starting simple admin user creation...');

const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');

// Get command line arguments
const args = process.argv.slice(2);
const uri = args[0];
const username = args[1] || 'admin';
const email = args[2] || 'admin@example.com';
const password = args[3] || 'AdminPassword123!';
const name = args[4] || 'Admin User';
const mobile = args[5] || '1234567890';
const dbName = 'Biztara';

// Check if MongoDB URI is provided
if (!uri) {
  console.error('MongoDB URI not provided. Please provide as first argument.');
  console.error('Usage: node create-admin-simple.js <mongodb-uri> <username> <email> <password> <name> <mobile>');
  process.exit(1);
}

// Display connection info (masking credentials)
console.log(`Creating admin user in database: ${dbName}`);
console.log(`Username: ${username}`);
console.log(`Email: ${email}`);
console.log(`Full name: ${name}`);
console.log(`Mobile: ${mobile}`);

async function main() {
  try {
    // Hash the password
    console.log('Hashing password...');
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    const client = await MongoClient.connect(uri);
    console.log('Successfully connected to MongoDB');
    
    const db = client.db(dbName);
    const users = db.collection('users');
    
    // Check if user exists
    console.log('Checking if user already exists...');
    const existing = await users.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      console.log('User with this email or username already exists.');
      await client.close();
      return;
    }
    
    // Create admin user
    console.log('Creating admin user...');
    await users.insertOne({
      name,
      email,
      username,
      password: hashedPassword,
      role: 'admin',
      mobile,
      createdAt: new Date()
    });
    
    console.log('SUCCESS: Admin user created!');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    
    await client.close();
  } catch (error) {
    console.error('ERROR creating admin user:');
    console.error(error.message);
    console.error('\nTROUBLESHOOTING:');
    console.error('1. Make sure your MongoDB URI is correct');
    console.error('2. Check that your IP address is whitelisted in MongoDB Atlas');
    console.error('3. Try setting NODE_TLS_REJECT_UNAUTHORIZED=0 before running the script');
    process.exit(1);
  }
}

main();
