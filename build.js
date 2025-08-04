#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting production build with ESBuild...');

try {
  // Ensure we're using ESBuild
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('🔨 Building with Vite + ESBuild...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ Build completed successfully!');
  
  // Verify the build output
  if (fs.existsSync('dist/index.html')) {
    console.log('📁 Build output verified: dist/index.html exists');
  } else {
    throw new Error('Build output not found');
  }
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 