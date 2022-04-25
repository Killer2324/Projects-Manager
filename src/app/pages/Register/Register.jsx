import Menu from '../../common/Menu'
import { Box, Button, Typography, Input } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
export default function Register() {
  const { register } = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await register(email, password)
      navigate('/home')
    } catch (e) {
      console.log(e.message)
    }
  }

  const styles = {
    BoxContainer: {
      width: '100%',
      height: 'calc(100vh - 64px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    FormContainer: {
      width: '400px',
      height: '280px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    Title: {
      textAlign: 'center',
    },
  }

  return (
    <main>
      <Menu />
      <Box sx={styles.BoxContainer}>
        <Box sx={styles.FormContainer} component="form" onSubmit={handleSubmit}>
          <Typography variant="h2" component="h2" gap="10" sx={styles.Title}>
            Create account
          </Typography>
          <Input
            placeholder="email@email.com"
            type="email"
            onChange={handleChangeEmail}
            value={email}
          />
          <Input
            placeholder="********"
            type="password"
            onChange={handleChangePassword}
            value={password}
          />
          <Button variant="contained" type="submit">
            register
          </Button>
        </Box>
      </Box>
    </main>
  )
}
