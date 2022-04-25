import {
  Typography,
  Toolbar,
  Box,
  AppBar,
  Button,
  Card,
  CardContent,
} from '@mui/material'
import { useState, useRef } from 'react'
import Search from './Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useNavigate } from 'react-router-dom'

export default function Menu() {
  const [showOptionsPopup, setShowOptionsPopup] = useState(false)
  const navigate = useNavigate()

  const handleOpenOptionsPopup = () => {
    setShowOptionsPopup(!showOptionsPopup)
  }

  const handleGoLogin = () => {
    navigate('/login')
  }

  const handleGoHome = () => {
    navigate('/home')
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
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={styles.Toolbar}>
          <Box>
            <Typography variant="h4" onClick={handleGoHome}>
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
          <Typography sx={styles.OptionsLink}>profile</Typography>
          <Typography sx={styles.OptionsLink}>logout</Typography>
        </Card>
      )}
    </Box>
  )
}
