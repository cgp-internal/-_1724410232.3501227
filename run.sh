#!/bin/bash

# Install Node
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Initialize project
npm init -y

# Install Express
npm install express

# Start server
node server.js