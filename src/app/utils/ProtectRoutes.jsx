import { Navigate } from 'react-router-dom'
import Spinner from '../common/Spinner'
import { useAuthContext } from '../context/AuthContext'

export default function ProtectRoutes({ children }) {
  const { user, loading } = useAuthContext()

  if (loading) return <Spinner />

  if (!user) return <Navigate to="/login" />

  return <>{children}</>
}
