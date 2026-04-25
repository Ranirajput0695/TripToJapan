const admin = require("firebase-admin");
require("dotenv").config();

const fs = require('fs');
const path = require('path');

let serviceAccount;
const serviceAccountPath = path.join(__dirname, '../serviceAccount.json');

if (fs.existsSync(serviceAccountPath)) {
  serviceAccount = require(serviceAccountPath);
  console.log("📂 Loading Firebase from serviceAccount.json");
} else {
  serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
  };
  console.log("🌐 Loading Firebase from Environment Variables");
}

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log("✅ Firebase Admin initialized successfully");
  }
} catch (error) {
  console.error("❌ Firebase Admin initialization error:", error.message);
}



const db = admin.firestore();

module.exports = { admin, db };

