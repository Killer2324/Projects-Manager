import Menu from '../../common/Menu'
import { Input, Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { red } from '@mui/material/colors'
export default function Login() {
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
    link: {
      textDecoration: 'none',
      color: '#1976D2',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    linkReactRouter: { textDecoration: 'none' },
    LoginButtonFG: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    LoginButtonGoogle: {
      backgroundColor: red[500],
      '&:hover': {
        backgroundColor: red[600],
      },
    },
  }

  return (
    <main>
      <Menu />
      <Box component="section" sx={styles.BoxContainer}>
        <Box component="form" sx={styles.FormContainer}>
          <Typography variant="h2" component="h1" sx={styles.Title} gap="10px">
            Login
          </Typography>
          <Input placeholder="email@email.com" type="email" />
          <Input placeholder="*********" type="password" />
          <Link to="/register" style={styles.linkReactRouter}>
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
          <Box sx={styles.LoginButtonFG}>
            <Button variant="contained" sx={styles.LoginButtonGoogle}>
              Google
            </Button>
            <Button variant="contained">Facebook</Button>
          </Box>
        </Box>
      </Box>
    </main>
  )
}
