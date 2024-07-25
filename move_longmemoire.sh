#!/bin/bash

# Variables
GITHUB_USERNAME="coldcanuk"
GITHUB_EMAIL="chuck.pitre@hotmail.com"
PITRE_WEBPAGE_DIR="/home/chuck/Code/pitre-webpage"
LONG_MEMOIRE_DIR="$PITRE_WEBPAGE_DIR/workers/chatbots/LongMemoire"
NEW_REPO_NAME="LongMemoire"
NEW_REPO_DIR="/home/chuck/Code/$NEW_REPO_NAME"

# Step 1: Create a new repository on GitHub for LongMemoire
echo "Creating new repository on GitHub..."
curl -u "$GITHUB_USERNAME" https://api.github.com/user/repos -d "{\"name\":\"$NEW_REPO_NAME\"}"

# Step 2: Clone the new repository locally
echo "Cloning the new repository locally..."
git clone https://github.com/$GITHUB_USERNAME/$NEW_REPO_NAME.git $NEW_REPO_DIR

# Step 3: Move LongMemoire files to the new repository
echo "Moving LongMemoire files to the new repository..."
mv $LONG_MEMOIRE_DIR/* $NEW_REPO_DIR/

# Step 4: Add and commit changes in the new repository
cd $NEW_REPO_DIR
git add .
git commit -m "Initial commit of LongMemoire bot"
git push -u origin main

# Step 5: Remove LongMemoire files from pitre-webpage
echo "Removing LongMemoire files from pitre-webpage..."
rm -rf $LONG_MEMOIRE_DIR
rm $PITRE_WEBPAGE_DIR/workers/chatbots/LongMemoire/Dockerfile
rm $PITRE_WEBPAGE_DIR/workers/chatbots/LongMemoire/app.py

# Step 6: Add and commit changes in the pitre-webpage repository
cd $PITRE_WEBPAGE_DIR
git add .
git commit -m "Removed LongMemoire bot from pitre-webpage"
git push -u origin main

echo "Completed successfully!"

