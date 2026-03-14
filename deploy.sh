#!/bin/bash
# Commit and push to trigger Vercel deployment
cd "$(dirname "$0")"

if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh \"Your commit message\""
  exit 1
fi

git add .
git status
git commit -m "$1"
git push origin main

echo ""
echo "✓ Pushed to main. Vercel will deploy automatically."
