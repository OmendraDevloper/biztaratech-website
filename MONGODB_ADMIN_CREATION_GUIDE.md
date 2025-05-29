# MongoDB Atlas Admin User Creation Guide

Since you've encountered SSL/TLS issues with direct connection from your local environment to MongoDB Atlas, this guide provides the most reliable approach - creating the admin user directly in MongoDB Atlas.

## Step 1: Log in to MongoDB Atlas

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Log in with your credentials for the Biztara Tech account

## Step 2: Access the Database

1. Select your cluster (Cluster0)
2. Click "Browse Collections" to access the database explorer
3. Select the "Biztara" database (create it if it doesn't exist)
4. Select the "users" collection (create it if it doesn't exist)

## Step 3: Create Admin User Using the MongoDB Shell

1. Click on the "Connect" button
2. Select "MongoDB Shell" option 
3. In the MongoDB Shell, run these commands (copy and paste):

```javascript
// Switch to your database
use Biztara

// Create the admin user with all required fields
db.users.insertOne({
  name: "Omendra Dwivedi",
  email: "omendrad@gmail.com",
  username: "omendra",
  // This is a pre-hashed password (Krishna@2010)
  password: "$2b$10$ZbF6Ypz73Vrm7zF96brYaObtMFcP1qIMKTaJbA0f7a7FtSPjZt9d6",
  role: "admin",
  mobile: "8197317345",
  createdAt: new Date()
})
```

## Step 4: Verify User Creation

After running the commands, verify that the user was created:

```javascript
// Verify user exists
db.users.findOne({email: "omendrad@gmail.com"})
```

You should see output showing the user details (with the hashed password).

## Step 5: Log in to Your Website

1. Go to your website's login page: https://biztaratech.com/signin
2. Use the following credentials:
   - Username: `omendra`
   - Password: `Krishna@2010`

## Troubleshooting

If you encounter any issues:

1. Verify that the MongoDB URI in your Vercel environment variables is correct
2. Make sure the database name in the MongoDB URI matches 'Biztara'
3. Check that your MongoDB Atlas IP access list includes Vercel's IP addresses

## Additional Notes

The pre-hashed password in this script is specifically for `Krishna@2010`. If you want to use a different password, you can create a new hash by running:

```javascript
const bcrypt = require('bcryptjs');
bcrypt.hash('YourPassword', 10).then(hash => console.log(hash));
```

in a Node.js environment locally before running the MongoDB commands.
