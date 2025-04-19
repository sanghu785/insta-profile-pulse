
#!/usr/bin/env sh

# Abort on errors
set -e

# Display welcome message
echo "🚀 Starting deployment process for your Personal Portfolio..."

# Build
echo "📦 Building your project..."
npm run build

# Navigate into the build output directory
cd dist

# Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
echo "🔧 Creating .nojekyll file..."
touch .nojekyll

# Initialize Git repository if not already done
echo "🔄 Initializing Git repository..."
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Instructions for user to update with their GitHub repository URL
echo "🔗 Enter your GitHub username: "
read username
echo "🔗 Enter your repository name (default: personal-portfolio): "
read repo_name
repo_name=${repo_name:-personal-portfolio}

# Push to GitHub Pages
echo "🚀 Pushing to GitHub Pages..."
git push -f git@github.com:$username/$repo_name.git main:gh-pages

cd -

echo "✅ Deployment complete! Your site will be available at: https://$username.github.io/$repo_name/"
