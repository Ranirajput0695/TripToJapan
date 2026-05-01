import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt7i0ksmZmqUglVCdm9DwdqfA2MFJeHM0",
  authDomain: "triptojapan-9467c.firebaseapp.com",
  projectId: "triptojapan-9467c",
  storageBucket: "triptojapan-9467c.firebasestorage.app",
  messagingSenderId: "634677678865",
  appId: "1:634677678865:web:0b3ac5a7d5389ab3d9b2b0",
  measurementId: "G-CV6RD9WD57"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Helper to check if config is still default
export const isFirebaseConfigured = () => {
  return firebaseConfig.apiKey !== "YOUR_API_KEY";
};
