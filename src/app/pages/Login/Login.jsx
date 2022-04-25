import Menu from '../../common/Menu'
import { Input, Box, Typography, Button } from '@mui/material'
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
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </Box>
    </main>
  )
}
