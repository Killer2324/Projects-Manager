import Menu from '../../common/Menu'
import { Box, Button, Typography, Input } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import AlertMessage from '../../common/AlertMessage'
export default function Register() {
  const { register } = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    name: '',
    message: '',
  })
  const [isShowAlertError, setIsShowAlertError] = useState(false)
  const navigate = useNavigate()

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    isShowAlertError && setIsShowAlertError(false)
    try {
      await register(email, password)
      navigate('/home')
    } catch (e) {
      setIsShowAlertError(true)
      setError({ title: e.name, message: e.message })
    }
  }

  const styles = {
    BoxContainer: {
      width: '100%',
      height: 'calc(100vh - 64px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (max-width: 396px)': {
        height: 'calc(100vh - 120px)',
      },
    },
    FormContainer: {
      width: '400px',
      height: '280px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      '@media (max-width: 1200px)': {
        width: '318px',
        height: '400px',
      },
    },
    Title: {
      textAlign: 'center',
      '@media (max-width: 1200px)': {
        fontSize: '48px',
      },
    },
    linkReactRouter: { textDecoration: 'none' },
    link: {
      textDecoration: 'none',
      color: '#1976D2',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }

  return (
    <main>
      <Menu />
      <Box sx={styles.BoxContainer}>
        <Box sx={styles.FormContainer} component="form" onSubmit={handleSubmit}>
          {isShowAlertError && (
            <AlertMessage
              alertType="error"
              title={error.name}
              message={error.message}
            />
          )}
          <Typography variant="h2" component="h2" gap="10" sx={styles.Title}>
            Create account
          </Typography>
          <Input
            placeholder="email@email.com"
            type="text"
            onChange={handleChangeEmail}
            value={email}
          />
          <Input
            placeholder="********"
            type="password"
            onChange={handleChangePassword}
            value={password}
          />
          <Link to="/login" style={styles.linkReactRouter}>
            <Typography
              variant="h6"
              component="span"
              gap="10px"
              sx={styles.link}
            >
              Login
            </Typography>
          </Link>
          <Button variant="contained" type="submit">
            register
          </Button>
        </Box>
      </Box>
    </main>
  )
}
