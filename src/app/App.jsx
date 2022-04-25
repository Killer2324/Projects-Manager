import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { AuthProvider } from './context/AuthContext'
export default function App() {
  // const navigate = useNavigate()

  // useEffect(() => {
  //   navigate('/home')
  // }, [])

  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </AuthProvider>
  )
}
