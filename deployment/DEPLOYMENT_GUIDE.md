# Deployment Guide for Next.js on Hostgator

This guide outlines the steps to deploy the Next.js application to Hostgator.

## Prerequisites

1. A Hostgator account with Node.js hosting
2. Access to MongoDB database (production)
3. SMTP credentials for email functionality
4. Google OAuth credentials (if using Google login)

## Pre-deployment Steps (Completed)

1. Fixed all TypeScript errors and build issues
2. Added proper Suspense boundary for the forgot-password/reset page
3. Updated Next.js configuration for production
4. Created a deployment package with all necessary files

## Deployment Steps

### 1. Set Up Node.js Environment on Hostgator

1. Log in to your Hostgator cPanel
2. Navigate to the Node.js section
3. Set up a new Node.js application:
   - Application name: biztech (or your preferred name)
   - Node.js version: 18.x or higher (latest LTS recommended)
   - Application mode: Production
   - Application URL: Your domain or subdomain
   - Application root: /public_html/biztech (or preferred directory)

### 2. Upload the Deployment Package

1. Use cPanel File Manager or FTP to upload the contents of the deployment folder to your specified application root directory
2. Make sure all files including .next, package.json, server.js, and .env.production are uploaded

### 3. Install Dependencies

1. Connect to your server via SSH:
   ```
   ssh username@yourhostgatordomain.com
   ```
2. Navigate to your application directory:
   ```
   cd public_html/biztech
   ```
3. Install production dependencies:
   ```
   npm install --production
   ```

### 4. Start the Application

1. Start the Node.js app using the npm scripts:
   ```
   npm start
   ```
2. Alternatively, use the cPanel Node.js interface to start the application by specifying:
   - Entry point: server.js

### 5. Configure Environment Variables

If the cPanel doesn't support .env.production files directly:

1. Copy all variables from .env.production into the Node.js environment variables section in the cPanel
2. Make sure to update the following variables for your production environment:
   - MONGODB_URI - Your production MongoDB connection string
   - NEXTAUTH_URL - Your production website URL
   - NEXTAUTH_SECRET - A secure random string for session encryption
   - Google OAuth credentials (if using)
   - SMTP settings

### 6. Configure Domain and SSL

1. Set up your domain or subdomain to point to the application
2. Enable SSL for secure HTTPS connections

### 7. Set Up MongoDB Connection

1. Make sure your MongoDB Atlas cluster (or other MongoDB provider) has:
   - Network access enabled for your Hostgator server IP
   - Proper database user with appropriate permissions

## Troubleshooting

1. Check the Node.js logs in cPanel for any errors
2. Verify environment variables are set correctly
3. Ensure MongoDB connection is accessible from the Hostgator server
4. Check file permissions on the server

## Maintenance

1. For updates, prepare a new deployment package and upload it
2. Consider setting up a CI/CD pipeline for automated deployments

## Backup Plan

If Hostgator's Node.js hosting doesn't meet your requirements, consider other options:
1. Vercel (best for Next.js apps)
2. Netlify
3. AWS Elastic Beanstalk
4. Digital Ocean App Platform
5. Heroku
