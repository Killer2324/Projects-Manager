import Menu from '../../common/Menu'
import { useState } from 'react'
import { Input, Box, Typography, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { red } from '@mui/material/colors'
import { useAuthContext } from '../../context/AuthContext'
import AlertMessage from '../../common/AlertMessage'
export default function Login() {
  const { loginGoogle, loginEmailPassword } = useAuthContext()
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

  const handleLoginGoogle = async () => {
    isShowAlertError && setIsShowAlertError(false)
    try {
      await loginGoogle()
      navigate('/home')
    } catch (e) {
      setIsShowAlertError(true)
      setError({ title: e.name, message: e.message })
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    isShowAlertError && setIsShowAlertError(false)
    try {
      await loginEmailPassword(email, password)
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
    },
    link: {
      textDecoration: 'none',
      color: '#1976D2',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    linkReactRouter: { textDecoration: 'none' },
    // LoginButtonFG: {
    //   display: 'flex',
    // },
    LoginButtonGoogle: {
      backgroundColor: red[500],
      '&:hover': {
        backgroundColor: red[600],
      },
    },
    LoginWithOtherProviders: {
      textAlign: 'center',
      color: '#1976D2',
    },
  }

  return (
    <main>
      <Menu />
      <Box component="section" sx={styles.BoxContainer}>
        <Box component="form" sx={styles.FormContainer} onSubmit={handleLogin}>
          {isShowAlertError && (
            <AlertMessage
              alertType="error"
              title={error.name}
              message={error.message}
            />
          )}
          <Typography variant="h2" component="h1" sx={styles.Title} gap="10px">
            Login
          </Typography>
          <Input
            placeholder="email@email.com"
            type="text"
            onChange={handleChangeEmail}
            value={email}
          />
          <Input
            placeholder="*********"
            type="password"
            onChange={handleChangePassword}
            value={password}
          />
          <Link to="/sign-up" style={styles.linkReactRouter}>
            <Typography
              variant="h6"
              component="span"
              gap="10px"
              sx={styles.link}
            >
              Don't have an account?
            </Typography>
          </Link>
          <Button type="submit" variant="contained">
            Login
          </Button>
          <Box>
            <Typography
              variant="h6"
              component="p"
              gap="10px"
              sx={styles.LoginWithOtherProviders}
            >
              Login with Google
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={styles.LoginButtonGoogle}
            onClick={handleLoginGoogle}
          >
            Google
          </Button>
        </Box>
      </Box>
    </main>
  )
}
