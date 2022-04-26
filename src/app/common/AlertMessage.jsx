import { Alert, Typography, Box } from '@mui/material'

export default function AlertMessage({ title, message, alertType }) {
  const styles = {
    BoxContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    BoxRoot: {
      position: 'fixed',
      top: '80px',
      right: '20px',
    },
  }

  return (
    <Box sx={styles.BoxRoot}>
      <Alert severity={alertType}>
        <Box sx={styles.BoxContent}>
          <Typography variant="body2" component="p">
            {message}
          </Typography>
        </Box>
      </Alert>
    </Box>
  )
}
