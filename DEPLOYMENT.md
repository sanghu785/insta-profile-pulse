
# Deployment Guide for Personal Portfolio

This guide will help you put your cool website on the internet for everyone to see! Follow these simple steps and your website will be live in no time!

## Step 1: Get Ready on Your Computer

First, let's make sure everything works on your computer before sharing it with the world.

### 1.1: Open the Terminal

- On Windows: Search for "Command Prompt" or "PowerShell"
- On Mac: Search for "Terminal" 
- On Linux: Press Ctrl+Alt+T

### 1.2: Go to Your Project Folder

Type `cd` followed by the path to your project. For example:

```sh
cd Documents/personal-portfolio
```

### 1.3: Install Everything You Need

Type this and press Enter:

```sh
npm install
```

Wait until it finishes. You might see some text scrolling by - that's normal!

### 1.4: See Your Website on Your Computer

Type this and press Enter:

```sh
npm run dev
```

Now open your web browser and go to: http://localhost:8080

You should see your website! Click around to make sure everything works.

## Step 2: Put Your Website on GitHub

### 2.1: Create a GitHub Account

If you don't have one already, go to [GitHub](https://github.com) and sign up.

### 2.2: Create a New Repository

1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name it "personal-portfolio"
4. Choose "Public" 
5. Click "Create repository"

### 2.3: Push Your Code to GitHub

Follow the instructions shown on GitHub after creating your repository. It will be something like:

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/personal-portfolio.git
git push -u origin main
```

Replace "YOUR_USERNAME" with your actual GitHub username.

## Step 3: Deploy Your Website with One Click!

### 3.1: Run the Magic Deployment Script

Type this and press Enter:

```sh
sh deploy.sh
```

### 3.2: Answer the Questions

The script will ask:
1. Your GitHub username - type it in and press Enter
2. The repository name - just press Enter to use "personal-portfolio"

### 3.3: Wait for Deployment

The script is now putting your website on the internet! Wait until you see:
```
✅ Deployment complete!
```

## Step 4: See Your Website Online

Your website is now available at:
```
https://YOUR_USERNAME.github.io/personal-portfolio/
```

Replace "YOUR_USERNAME" with your GitHub username.

It might take a few minutes before your website appears online. If you don't see it right away, wait a little bit and try again!

## Troubleshooting: Common Problems

### Problem: "Command not found" errors
Solution: Make sure you installed everything with `npm install` first.

### Problem: Website doesn't show up online
Solution: Wait about 5 minutes and try again. GitHub Pages sometimes takes a little time to update.

### Problem: Website looks broken online
Solution: Make sure your vite.config.ts has the correct base URL for GitHub Pages.

### Problem: Can't refresh pages without getting errors
Solution: Our code already includes a fix for this with the 404.html file. If you're still having issues, double-check that this file was properly deployed.

## Congratulations!
You've just published your very own website on the internet! That's something many adults haven't even done! Now you can share the link with friends and family.
