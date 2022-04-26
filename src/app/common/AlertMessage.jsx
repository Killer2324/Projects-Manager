import { Alert, Typography, Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export default function AlertMessage({ message, alertType, setIsShowAlert }) {
  const handleClose = () => {
    setIsShowAlert(false)
  }

  const styles = {
    BoxContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }

  return (
    <Alert severity={alertType}>
      <Box sx={styles.BoxContent}>
        <Typography variant="body2" component="p">
          {message}
        </Typography>
        <CloseIcon onClick={handleClose} />
      </Box>
    </Alert>
  )
}
