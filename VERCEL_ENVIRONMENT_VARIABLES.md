# Vercel Environment Variables for Biztara Tech Website

## Database Configuration
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.YOUR_MONGODB_HOST/Biztara?retryWrites=true&w=majority
MONGODB_DB=Biztara

## Authentication Configuration
NEXTAUTH_URL=https://biztaratech-website.vercel.app
NEXTAUTH_SECRET=4bf8e3519813becc5f5818cbbc32807e9836c8fe6155388c83dfbd0314d32c5b
SKIP_MONGODB_CHECK=true

## Google OAuth (Optional - if you're using Google login)
GOOGLE_CLIENT_ID=your-google-client-id-here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

## Email Configuration (for contact form and notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASS=your-app-specific-password
SMTP_FROM=Biztara Tech <your-gmail-address@gmail.com>

## Build Configuration 
NODE_ENV=production
NEXT_PUBLIC_VERCEL_ENV=production
SKIP_BUILD_STATIC_GENERATION=true
