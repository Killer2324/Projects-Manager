import { createContext, useState, useContext, useEffect } from 'react'
import { auth } from '../firebase/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
const context = createContext()

export function useAuthContext() {
  return useContext(context)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const register = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    console.log(user)
  }

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const user = await signInWithPopup(auth, provider)
    console.log(user)
  }

  const loginEmailPassword = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const handleSignOut = async () => {
    await signOut(auth)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        console.log(user)
      }
      setLoading(false)
    })
  }, [])

  return (
    <context.Provider
      value={{
        user,
        setUser,
        register,
        loginGoogle,
        loginEmailPassword,
        handleSignOut,
        loading,
      }}
    >
      {children}
    </context.Provider>
  )
}
