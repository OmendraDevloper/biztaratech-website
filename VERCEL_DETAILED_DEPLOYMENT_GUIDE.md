# Step-by-Step Vercel Deployment Guide for Biztara Tech

This guide provides detailed instructions for deploying the Biztara Technologies website to Vercel.

## Prerequisites

1. GitHub account with access to the repository: https://github.com/OmendraDevloper/biztaratech-website
2. Vercel account (free tier is sufficient): https://vercel.com
3. MongoDB database (Atlas or other MongoDB provider)
4. Required environment variables (see below)

## Step 1: Deploy via Vercel Web Interface

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on **Add New...** > **Project**
3. Under **Import Git Repository**, find and select your **biztaratech-website** repository
4. If you don't see your repository:
   - Click on **Add GitHub Account** or configure GitHub permissions
   - Select the appropriate GitHub account
   - Install Vercel for GitHub and grant access to the repository

## Step 2: Configure Project Settings

1. Once you've selected your repository, you'll be taken to the project configuration screen
2. Configure the following settings:
   - **Project Name**: `biztaratech-website`
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

3. Under **Environment Variables**, add all the required variables from the `VERCEL_ENVIRONMENT_VARIABLES.md` file:
   - MONGODB_URI
   - MONGODB_DB
   - NEXTAUTH_URL
   - NEXTAUTH_SECRET
   - SKIP_MONGODB_CHECK (set to "true")
   - And any other variables you need

4. Click **Deploy**

## Step 3: Monitor the Deployment

1. Watch the deployment logs to identify any issues
2. If the build fails, check the error messages for clues about what needs to be fixed

## Step 4: Configure Custom Domain (Optional)

1. In your Vercel project dashboard, go to **Settings** > **Domains**
2. Enter your domain name (e.g., `biztaratech.com`)
3. Follow Vercel's instructions to configure DNS settings

## Step 5: Test the Deployed Application

1. Once deployment completes, visit your Vercel URL or custom domain
2. Test the authentication system:
   - Try signing in with existing credentials
   - Verify that the "Forgot Password" button has been removed
   - Confirm that error messages work correctly for wrong passwords

## Troubleshooting Common Issues

### MongoDB Connection Errors
- Verify that your MongoDB URI is correct
- Ensure your IP is whitelisted in MongoDB Atlas Network Access settings
- Check that the database and collections exist

### NextAuth Configuration Issues
- Verify NEXTAUTH_URL is set to your deployment URL
- Make sure NEXTAUTH_SECRET is properly set
- Ensure Google OAuth credentials are correct (if using)

### Build Failures
- Check if `SKIP_MONGODB_CHECK=true` is set to prevent MongoDB connection attempts during build
- Review the NextAuth configuration for any errors
- Ensure all required dependencies are installed

## Post-Deployment Tasks

1. Set up a custom domain if not already done
2. Configure SSL certificates through Vercel (automatic with custom domain)
3. Test all authentication and application features thoroughly
4. Consider setting up monitoring tools for your application

## Maintenance

For future updates:
1. Push changes to your GitHub repository
2. Vercel will automatically redeploy your application

For manual deployments:
```bash
vercel --prod
```
