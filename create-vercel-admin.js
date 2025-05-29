#!/usr/bin/env node
// create-vercel-admin.js - A simpler script for creating an admin user
console.log('Starting admin user creation script...');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
const readline = require('readline');

// Helper for interactive prompts
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => {
  rl.question(query, resolve);
});

// Main function
async function createAdmin() {
  console.log('=== Create Admin User for Vercel MongoDB ===');
  
  try {
    // Get MongoDB connection URI interactively
    console.log('Please enter the MongoDB connection string from Vercel:');
    const uri = await question('> ');
    
    if (!uri || !uri.startsWith('mongodb')) {
      throw new Error('Invalid MongoDB URI provided');
    }
    
    // Get user details
    console.log('\nEnter username:');
    const username = await question('> ');
    
    console.log('\nEnter email:');
    const email = await question('> ');
    
    console.log('\nEnter password:');
    const password = await question('> ');
    
    console.log('\nEnter full name:');
    const name = await question('> ');
    
    console.log('\nEnter mobile number:');
    const mobile = await question('> ');
    
    // Validate inputs
    if (!username || !email || !password || !name || !mobile) {
      throw new Error('All fields are required');
    }
    
    // Hash password
    console.log('\nHashing password...');
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Set database name
    const dbName = 'Biztara';
    
    // Configure MongoDB client with options for modern Node.js
    const clientOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
      maxIdleTimeMS: 30000
    };
    
    // Connect to MongoDB
    console.log(`\nConnecting to MongoDB database: ${dbName}...`);
    const client = new MongoClient(uri, clientOptions);
    await client.connect();
    console.log('Successfully connected to MongoDB');
    
    // Access the database and collection
    const db = client.db(dbName);
    const users = db.collection('users');
    
    // Check if user already exists
    console.log('Checking if user already exists...');
    const existing = await users.findOne({ 
      $or: [{ email }, { username }] 
    });
    
    if (existing) {
      console.log('User with this email or username already exists.');
      await client.close();
      return;
    }
    
    // Create the admin user
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
    
    console.log('\n===== SUCCESS =====');
    console.log('Admin user created successfully!');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log('You can now log in with these credentials at your website.');
    
    // Close the connection
    await client.close();
    
  } catch (error) {
    console.error('\n===== ERROR =====');
    console.error('Error creating admin user:');
    console.error(error.message);
    console.error('\nTROUBLESHOOTING:');
    console.error('1. Verify your MongoDB URI is correct');
    console.error('2. Check that your IP address is whitelisted in MongoDB Atlas');
    console.error('3. Make sure your MongoDB user has the correct permissions');
  } finally {
    // Close readline interface
    rl.close();
  }
}

// Run the script
createAdmin();
