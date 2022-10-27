
require("dotenv").config();
const cloudinary = require('cloudinary').v2;


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || 'dt1ejaaxy',
  api_key: process.env.API_KEY || '359752869945436',
  api_secret: process.env.API_SECRET || 'tY09wSPbkihr3iniB46m0spL3ug',
});

module.exports = cloudinary;
