// generate-hash.js - A simple script to generate bcrypt password hashes
// Usage: node generate-hash.js [password]

const bcrypt = require('bcryptjs');

const password = process.argv[2] || 'AdminPassword123!';

console.log(`Generating bcrypt hash for password: ${password}`);
console.log('(This will take a moment...)\n');

bcrypt.hash(password, 10)
  .then(hash => {
    console.log('==== PASSWORD HASH ====');
    console.log(hash);
    console.log('\nYou can use this hash in MongoDB to create or update user passwords.');
  })
  .catch(err => {
    console.error('Error generating hash:', err);
  });
