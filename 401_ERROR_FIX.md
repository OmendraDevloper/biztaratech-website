# Fix for 401 Authentication Error

The 401 error is happening because the authentication system can't validate your admin user credentials. Here are the exact steps to fix it:

## Step 1: Verify your MongoDB URI in Vercel

1. Go to your [Vercel project settings](https://vercel.com/biztara-technologies/biztaratech-website/settings/environment-variables)
2. Check that the `MONGODB_URI` environment variable points to the correct MongoDB Atlas instance
3. Make sure `MONGODB_DB` is set to exactly `Biztara` (case sensitive - capital B)

## Step 2: Create the Admin User in MongoDB Atlas

1. Log in to [MongoDB Atlas](https://cloud.mongodb.com)
2. Select your project and cluster
3. Click "Browse Collections"
4. Make sure you're in the `Biztara` database (create it if needed, with capital B)
5. Open the MongoDB Shell by clicking "Mongosh" button
6. Paste these EXACT commands:

```javascript
// Switch to the Biztara database (capital B is important)
use Biztara

// First check if the user already exists
db.users.findOne({$or: [{email: "omendrad@gmail.com"}, {username: "omendra"}]})

// If no user was found, create the admin user
db.users.insertOne({
  name: "Omendra Dwivedi",
  email: "omendrad@gmail.com",
  username: "omendra",
  // Pre-hashed password for "Krishna@2010"
  password: "$2b$10$ZbF6Ypz73Vrm7zF96brYaObtMFcP1qIMKTaJbA0f7a7FtSPjZt9d6",
  role: "admin",
  mobile: "8197317345",
  createdAt: new Date()
})

// Verify the user was created successfully
db.users.findOne({email: "omendrad@gmail.com"}, {password: 0})
```

## Step 3: Try logging in again

1. Go to https://biztaratech.com/signin
2. Enter exactly:
   - Username: `omendra`  
   - Password: `Krishna@2010`
3. Make sure there are no extra spaces before or after the username/password

## Step 4: If you still see the 401 error

1. Open your browser developer tools (F12 or right-click and select "Inspect")
2. Go to the Network tab
3. Try logging in again and find the failed request
4. Check the response details for more specific error information
5. If it's still failing, try creating a user with a new password:

```javascript
// Generate a new password hash in your terminal:
// node -e 'const bcrypt = require("bcryptjs"); bcrypt.hash("NewPassword123", 10).then(hash => console.log(hash));'

// Then in MongoDB Atlas, create a new user with the generated hash
db.users.insertOne({
  name: "Admin User",
  email: "admin@biztaratech.com",
  username: "admin",
  password: "YOUR_GENERATED_HASH_HERE",
  role: "admin",
  mobile: "1234567890",
  createdAt: new Date()
})
```

## The problem could be one of these issues:

1. Case sensitivity in database name (`Biztara` vs `biztara`)
2. Password hash not compatible with the bcrypt version used in the app
3. Network issues connecting to MongoDB from Vercel
4. User attempting to log in doesn't exist in the database
