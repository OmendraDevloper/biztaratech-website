#!/bin/bash
# This script helps create an admin user in production MongoDB

echo "=== Create Admin User for Production ==="
echo "This script will create an admin user in your production MongoDB."

# Instructions for getting MongoDB URI from Vercel
echo "To get your MongoDB URI from Vercel:"
echo "1. Go to https://vercel.com/biztara-technologies/biztaratech-website/settings/environment-variables"
echo "2. Find MONGODB_URI in the list"
echo "3. Click on 'Show' to reveal the value"
echo "4. Copy the value"
echo ""

# Get production MongoDB URI from Vercel
echo "Enter your production MongoDB URI:"
read -s mongo_uri
echo "MongoDB URI received (hidden for security)"

# User details
echo "Enter admin username (default: admin):"
read username
username=${username:-admin}

echo "Enter admin email (default: admin@example.com):"
read email
email=${email:-admin@example.com}

echo "Enter admin password (default: AdminPassword123!):"
read -s password
echo "Password received (hidden for security)"
password=${password:-AdminPassword123!}

echo "Enter admin name (default: Admin User):"
read name
name=${name:-Admin User}

echo "Enter admin mobile (default: 1234567890):"
read mobile
mobile=${mobile:-1234567890}

# Run the create admin user script with the production URI
echo "Creating admin user..."
node create-admin-user.js "$mongo_uri" "$username" "$email" "$password" "$name" "$mobile"

echo "Script completed!"
