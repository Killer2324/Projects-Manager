import { useState } from 'react'
import { Box, Button, Typography, Input } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { db } from '../../../firebase/firebase'
import firebase from 'firebase/compat'
export default function AddProjectForm({ setIsOpenModal }) {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    link: '',
  })
  const handleChangeTitle = (e) => {
    setNewProject({ ...newProject, title: e.target.value })
  }

  const handleChangeDescription = (e) => {
    setNewProject({ ...newProject, description: e.target.value })
  }

  const handleChangeLink = (e) => {
    setNewProject({ ...newProject, link: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // db.collection('projects').add({
    //   ...newProject,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // })
    setIsOpenModal(false)
  }

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
      <Box component="form" style={styles.BoxForm} onSubmit={handleSubmit}>
        <Box sx={styles.BoxHeader}>
          <Typography variant="h4">Add Project</Typography>
          <CloseIcon sx={styles.CloseIcon} onClick={handleClose} />
        </Box>
        <Box sx={styles.BoxBody}>
          <Input placeholder="Title Project" onChange={handleChangeTitle} />
          <Input
            placeholder="Description Project"
            onChange={handleChangeDescription}
          />
          <Input
            placeholder="link of your project"
            onChange={handleChangeLink}
          />
          <Button variant="contained" type="submit">
            create project
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
