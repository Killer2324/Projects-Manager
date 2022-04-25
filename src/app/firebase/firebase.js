import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
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
