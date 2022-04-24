import { Box, Button, Typography, Input } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
export default function AddProjectForm({ setIsOpenModal }) {
  const handleClose = () => {
    setIsOpenModal(false)
  }

  const styles = {
    BoxContainer: {
      position: 'fixed',
      backgroundColor: ' rgba(32, 35, 41, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: '-10px',
      left: '-10px',
      right: '-10px',
      bottom: '-10px',
      padding: '0px',
    },
    BoxForm: {
      width: '400px',
      height: '280px',
      backgroundColor: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      justifyContent: 'center',
    },
    BoxHeader: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    CloseIcon: { cursor: 'pointer', fontSize: '2rem' },
    BoxBody: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
  }

  return (
    <Box sx={styles.BoxContainer}>
      <Box component="form" style={styles.BoxForm}>
        <Box sx={styles.BoxHeader}>
          <Typography variant="h4">Add Project</Typography>
          <CloseIcon sx={styles.CloseIcon} onClick={handleClose} />
        </Box>
        <Box sx={styles.BoxBody}>
          <Input placeholder="Title Project" />
          <Input placeholder="Description Project" />
          <Input placeholder="link of your project" />
          <Button variant="contained">create project</Button>
        </Box>
      </Box>
    </Box>
  )
}
