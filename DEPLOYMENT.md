
# Deployment Guide for Personal Portfolio

This guide will walk you through deploying your personal portfolio website to GitHub Pages. Follow these steps carefully, and you'll have your website live in no time!

## Table of Contents
1. [Local Testing](#local-testing)
2. [GitHub Pages Deployment](#github-pages-deployment)
3. [Troubleshooting](#troubleshooting)

## Local Testing

Before deploying your website, it's a good idea to test it locally to make sure everything works as expected.

### Step 1: Install Dependencies
Open your terminal or command prompt and run:

```sh
npm install
```

### Step 2: Start Local Development Server
Run the following command:

```sh
npm run dev
```

This will start a local development server, usually at http://localhost:8080. Open this URL in your web browser to see your website.

### Step 3: Check Your Website
- Make sure all pages load correctly
- Test all links to ensure they work
- Check that images and other media display properly
- Verify that visitor counter works properly

## GitHub Pages Deployment

Once you've tested your website locally and everything looks good, you're ready to deploy to GitHub Pages!

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., "personal-portfolio")
5. Choose "Public" for visibility
6. Click "Create repository"

### Step 2: Push Your Code to GitHub
Follow the instructions on GitHub to push your code to the new repository:

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/personal-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Deploy Using the Script
Run the deployment script:

```sh
sh deploy.sh
```

The script will ask for your GitHub username and repository name. Enter them when prompted.

### Step 4: Configure GitHub Pages
1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to "GitHub Pages" section
4. Under "Source," select "gh-pages branch"
5. Click "Save"

### Step 5: View Your Deployed Website
After a few minutes, your website will be live at:
```
https://YOUR_USERNAME.github.io/personal-portfolio/
```

Replace `YOUR_USERNAME` with your GitHub username.

## Troubleshooting

### Problem: Page not found after refreshing
Solution: The 404.html file in your project handles this. Make sure it's properly deployed.

### Problem: Images or styles not loading
Solution: Check that all paths are using the correct base URL. If you see broken links, you might need to update paths to include the repository name.

### Problem: Visitor counter not working
Solution: The visitor counter uses localStorage, which should work on GitHub Pages. If you encounter any issues, check the browser console for errors.

### Problem: Other deployment issues
Solution: Make sure you've followed all steps in this guide carefully. If issues persist, check the GitHub Pages documentation or open an issue in your repository.

## Congratulations!
Your personal portfolio is now live on GitHub Pages! Share your URL with friends, potential employers, or add it to your resume.
