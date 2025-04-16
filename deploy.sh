
#!/usr/bin/env sh

# Abort on errors
set -e

# Build
npm run build

# Navigate into the build output directory
cd dist

# If you're deploying to a custom domain
# echo 'www.yourdomain.com' > CNAME

# Initialize Git repository if not already done
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Replace with your GitHub repository URL
git push -f git@github.com:yourusername/personal-portfolio.git main:gh-pages

cd -

echo "Deployment complete!"
