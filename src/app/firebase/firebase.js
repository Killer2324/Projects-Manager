import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  // apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  // authDomain: `${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}`,
  // projectId: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}`,
  // storageBucket: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}`,
  // messagingSenderId: `${import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID}`,
  // appId: `${import.meta.env.VITE_FIREBASE_APP_ID}`,
  apiKey: 'AIzaSyDhIyetfkckH9WnHh4zs_TcCRcOHBr6pE4',
  authDomain: 'projects-manager-f5f1d.firebaseapp.com',
  projectId: 'projects-manager-f5f1d',
  storageBucket: 'projects-manager-f5f1d.appspot.com',
  messagingSenderId: '898530604698',
  appId: '1:898530604698:web:c866a68071b4def37bd123',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
