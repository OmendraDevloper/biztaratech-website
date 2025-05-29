// test-mongodb-connection.js
// This script tests your MongoDB connection and helps diagnose issues
// Usage: node test-mongodb-connection.js <mongodb_uri>

const { MongoClient } = require('mongodb');
require('dotenv').config();

// Get URI from command line or environment variable
const uri = process.argv[2] || process.env.MONGODB_URI;
if (!uri) {
  console.error('Error: MongoDB URI not provided.');
  console.error('Usage: node test-mongodb-connection.js <mongodb_uri>');
  process.exit(1);
}

// Mask credentials in output
const maskedUri = uri.replace(/\/\/([^:]+):([^@]+)@/, '//****:****@');
console.log(`Testing connection to: ${maskedUri}`);

async function testConnection() {
  console.log('Step 1: Testing basic connection...');
  let client;
  try {
    // Connect with standard options
    client = new MongoClient(uri, {
      connectTimeoutMS: 5000,
      socketTimeoutMS: 30000
    });
    await client.connect();
    console.log('✓ Connection successful!');
    
    // List all databases
    console.log('\nStep 2: Listing all databases...');
    const dbs = await client.db().admin().listDatabases();
    console.log('Available databases:');
    dbs.databases.forEach(db => {
      console.log(`- ${db.name} (${db.sizeOnDisk} bytes)`);
    });
    
    // Look for Biztara database (both case variants)
    console.log('\nStep 3: Looking for Biztara database...');
    const biztaraDb = dbs.databases.find(db => db.name.toLowerCase() === 'biztara');
    if (biztaraDb) {
      console.log(`✓ Found database: ${biztaraDb.name}`);
    } else {
      console.log('✗ Biztara database not found. Available databases are listed above.');
    }
    
    // Test both possible database names
    const dbNames = ['Biztara', 'biztara'];
    for (const dbName of dbNames) {
      console.log(`\nTesting database: ${dbName}`);
      const db = client.db(dbName);
      
      // List collections
      console.log(`Collections in ${dbName}:`);
      const collections = await db.listCollections().toArray();
      collections.forEach(coll => {
        console.log(`- ${coll.name}`);
      });
      
      // Check for users collection
      const hasUsers = collections.some(coll => coll.name === 'users');
      if (hasUsers) {
        console.log(`✓ Found users collection in ${dbName}`);
        
        // Count users
        const userCount = await db.collection('users').countDocuments();
        console.log(`Users count: ${userCount}`);
        
        // Check for admin users
        const adminCount = await db.collection('users').countDocuments({ role: 'admin' });
        console.log(`Admin users count: ${adminCount}`);
        
        if (adminCount > 0) {
          // List admin users (hiding passwords)
          const admins = await db.collection('users')
            .find({ role: 'admin' })
            .project({ password: 0 })
            .toArray();
          
          console.log('\nAdmin users found:');
          admins.forEach((admin, i) => {
            console.log(`\nAdmin #${i+1}:`);
            console.log(`- Username: ${admin.username}`);
            console.log(`- Email: ${admin.email}`);
            console.log(`- Name: ${admin.name}`);
            console.log(`- ID: ${admin._id}`);
          });
        } else {
          console.log('✗ No admin users found.');
        }
      } else {
        console.log(`✗ No users collection found in ${dbName}`);
      }
    }
    
  } catch (error) {
    console.error('\n✗ Connection error:');
    console.error(error);
    console.error('\nTroubleshooting tips:');
    console.error('1. Check if your MongoDB URI is correct');
    console.error('2. Verify that your IP address is whitelisted in MongoDB Atlas');
    console.error('3. Check if your MongoDB username and password are correct');
    console.error('4. Try disabling SSL/TLS validation for testing with NODE_TLS_REJECT_UNAUTHORIZED=0');
  } finally {
    if (client) {
      await client.close();
      console.log('\nConnection closed.');
    }
  }
}

testConnection();
