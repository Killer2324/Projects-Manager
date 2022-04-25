import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Search from './Search'
import Common from './Common.module.css'
import { useNavigate } from 'react-router-dom'

export default function Menu() {
  const navigate = useNavigate()

  const handleGoLogin = () => {
    navigate('/login')
  }

  const handleGoHome = () => {
    navigate('/home')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={handleGoHome}
          >
            Projects Manager
          </Typography>
          <div className={Common.menu__right_container}>
            <Search />
            <Button color="inherit" onClick={handleGoLogin}>
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
