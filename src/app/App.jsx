import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { AuthProvider } from './context/AuthContext'
import ProtectRoutes from './utils/ProtectRoutes'
import ProjectPage from './pages/Project/Project'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          index
          element={
            <ProtectRoutes>
              <Home />
            </ProtectRoutes>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectRoutes>
              <Home />
            </ProtectRoutes>
          }
        />
        <Route
          path="/project/:id"
          element={
            <ProtectRoutes>
              <ProjectPage />
            </ProtectRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </AuthProvider>
  )
}
