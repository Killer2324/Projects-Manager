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
    await createUserWithEmailAndPassword(auth, email, password)
  }

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
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
