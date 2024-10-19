#!/bin/bash

# Load nvm if it's already installed
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Check and use Node.js 16
echo "Using Node.js version 16..."
nvm install 16
nvm use 16

# Verify Node.js version
echo "Current Node.js version:"
node -v

# Update npm to the latest version
echo "Updating npm to the latest version..."
npm install -g npm@latest

# Navigate to project directory (update this path)
PROJECT_DIR="/Users/albertorivera/Desktop/alberto-website"
if [ ! -d "$PROJECT_DIR" ]; then
    echo "Directory not found! Please update the script with the correct path."
    exit 1
fi

cd "$PROJECT_DIR" || exit

# Remove node_modules and install dependencies
echo "Removing node_modules..."
rm -rf node_modules

echo "Installing dependencies..."
npm install

# Optionally update react-scripts
echo "Updating react-scripts..."
npm install react-scripts@latest

# Run the build command
echo "Building the project..."
npm run build

echo "Build process completed."
