// MongoDB Shell Commands to create an admin user
// Copy and paste these commands into the MongoDB Atlas Shell

// Switch to your database (case-sensitive - capital B is important)
use Biztara

// First check if the user already exists
db.users.findOne({$or: [{email: "omendrad@gmail.com"}, {username: "omendra"}]})

// If no user was found, create the admin user
db.users.insertOne({
  name: "Omendra Dwivedi",
  email: "omendrad@gmail.com",
  username: "omendra",
  // This is a pre-hashed password for "Krishna@2010"
  password: "$2b$10$ZbF6Ypz73Vrm7zF96brYaObtMFcP1qIMKTaJbA0f7a7FtSPjZt9d6",
  role: "admin",
  mobile: "8197317345",
  createdAt: new Date()
})

// Verify the user was created successfully
db.users.findOne({email: "omendrad@gmail.com"}, {password: 0})

// If the above didn't work, try listing all databases to confirm the database name
show dbs

// Then look at all collections in the database
show collections

// And finally count all users to make sure they exist
db.users.countDocuments()
