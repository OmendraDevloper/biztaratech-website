# Vercel Deployment Guide for Biztara Tech Website

This guide will walk you through deploying your Next.js website to Vercel and connecting it to your custom domain (biztaratech.com).

## What We've Already Done

1. ✅ Fixed code issues in the Next.js application
2. ✅ Added proper Suspense boundaries in React components
3. ✅ Successfully built the project for production
4. ✅ Set up the Git repository structure
5. ✅ Added proper `.gitignore` configuration to exclude large files
6. ✅ Successfully pushed the code to GitHub at https://github.com/OmendraDevloper/biztaratech-website

## What's Left To Do

## Prerequisites

- GitHub repository (https://github.com/OmendraDevloper/biztaratech-website)
- Vercel account (create one at https://vercel.com if you don't have it)
- Your domain name (biztaratech.com) and access to its DNS settings

## Step 1: Import your GitHub Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on "Add New..." > "Project"
3. Under "Import Git Repository", find and select your "biztaratech-website" repository
4. If you don't see your repository, you may need to:
   - Click on "Add GitHub Account" or configure GitHub permissions
   - Select the "OmendraDevloper" account
   - Install Vercel for GitHub and grant access to the repository

## Step 2: Configure Project Settings

1. Once you've selected your repository, you'll be taken to the project configuration screen:

2. Configure the following settings:
   - **Project Name**: `biztaratech`
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

3. Under "Environment Variables", add all the variables from your `.env.production` file:
   - MONGODB_URI: [Your MongoDB connection string]
   - MONGODB_DB: Biztara
   - GOOGLE_CLIENT_ID: [Your Google Client ID]
   - GOOGLE_CLIENT_SECRET: [Your Google Client Secret]
   - SMTP_HOST: smtp.gmail.com
   - SMTP_PORT: 587
   - SMTP_USER: [Your email address]
   - SMTP_PASS: [Your email password or app password]
   - SMTP_FROM: "Biztara Tech <your-email@example.com>"
   - NEXTAUTH_URL: https://biztaratech.com
   - NEXTAUTH_SECRET: [Generate a random string for this]

4. Click "Deploy"

## Step 3: Connect Your Custom Domain

Once your project is deployed:

1. Go to your project dashboard
2. Click on "Settings" > "Domains"
3. Enter your domain name: `biztaratech.com`
4. Add domain

### DNS Configuration Options

Vercel will provide you with two options to connect your domain:

#### Option 1: Using Vercel DNS (Recommended)
Follow the instructions to update the nameservers for your domain to use Vercel's nameservers.

#### Option 2: Using External DNS
If you prefer to keep your current DNS provider:
1. Add a CNAME record pointing to `cname.vercel-dns.com`
2. Add a TXT record for verification

## Step 4: Set Up Automatic HTTPS

Vercel automatically provisions SSL certificates for your custom domain, so no additional configuration is needed for HTTPS.

## Step 5: Verify Deployment

1. Once DNS propagation is complete (might take a few hours), visit your domain: `https://biztaratech.com`
2. Test your website functionality:
   - Test authentication features
   - Test form submissions
   - Test API endpoints
   - Verify that images and assets are loading correctly

## Troubleshooting

If you encounter deployment issues:

1. Check build logs in the Vercel dashboard
2. Verify environment variables are set correctly
3. Check for console errors in the browser
4. Verify DNS configuration is correct

## Maintenance

For future updates, simply push changes to your GitHub repository's main branch, and Vercel will automatically deploy the changes.

For database or environment changes, update the corresponding environment variables in the Vercel dashboard.
