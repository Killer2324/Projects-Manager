import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'

export default function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
  }, [])

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}
