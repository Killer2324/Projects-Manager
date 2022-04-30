import { Typography, Toolbar, Box, AppBar, Card } from '@mui/material'
import { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export default function Menu() {
  const { handleSignOut } = useAuthContext()
  const [showOptionsPopup, setShowOptionsPopup] = useState(false)
  const navigate = useNavigate()

  const handleOpenOptionsPopup = () => {
    setShowOptionsPopup(!showOptionsPopup)
  }

  const handleGoHome = () => {
    navigate('/home')
  }

  const handleLogout = async () => {
    await handleSignOut()
    window.location.reload()
  }

  const styles = {
    AccountIcon: {
      cursor: 'pointer',
      transform: 'scale(1.5)',
    },
    Toolbar: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    BoxAccount: {
      display: 'flex',
      alignItems: 'center',
    },
    CardPopup: {
      position: 'absolute',
      width: '80px',
      right: '20px',
      top: '60px',
      zIndex: '3',
    },
    OptionsLink: {
      textDecoration: 'none',
      color: '#000',
      fontSize: '1.2rem',
      cursor: 'pointer',
      padding: '5px 10px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: '#f5f5f5',
      },
    },
    Title: {
      cursor: 'pointer',
    },
  }

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar sx={styles.Toolbar}>
            <Box>
              <Typography variant="h4" onClick={handleGoHome} sx={styles.Title}>
                Projects Manager
              </Typography>
            </Box>
            <Box sx={styles.BoxAccount}>
              <AccountCircleIcon
                sx={styles.AccountIcon}
                onClick={handleOpenOptionsPopup}
              />
            </Box>
          </Toolbar>
        </AppBar>
        {showOptionsPopup && (
          <Card sx={styles.CardPopup}>
            <Typography sx={styles.OptionsLink} onClick={handleLogout}>
              logout
            </Typography>
          </Card>
        )}
      </Box>
    </>
  )
}
