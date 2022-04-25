import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDhIyetfkckH9WnHh4zs_TcCRcOHBr6pE4',
  authDomain: 'projects-manager-f5f1d.firebaseapp.com',
  projectId: 'projects-manager-f5f1d',
  storageBucket: 'projects-manager-f5f1d.appspot.com',
  messagingSenderId: '898530604698',
  appId: '1:898530604698:web:c866a68071b4def37bd123',
}

const app = firebase.initializeApp(firebaseConfig)
export const db = app.firestore()
export const auth = app.auth()
