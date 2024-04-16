/** @type {import('next').NextConfig} */
const path = require('path');
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'styles', 'abstracts'),
      path.join(__dirname, 'styles', 'components'),
    ],
    
  },
}

module.exports = nextConfig
