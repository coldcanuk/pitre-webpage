#!/bin/bash

# Step 1: Update Node.js to the Required Version
echo "Updating Node.js to version 18..."
sudo npm install -g n
sudo n 18

# Verify Node.js and npm versions
echo "Node.js version:"
node -v
echo "npm version:"
npm -v

# Step 2: Clean Up the Current Node Modules and Install Dependencies with Correct Versions
echo "Cleaning up node_modules and package-lock.json..."
rm -rf node_modules package-lock.json

echo "Installing dependencies..."
npm install

# Step 3: Resolve the Missing Module Issue
echo "Installing ajv and ajv-keywords..."
npm install ajv ajv-keywords

# Step 4: Build the Project
echo "Building the project..."
npm run build

echo "Completed successfully!"

