import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import { useParams } from 'react-router-dom'
import { onSnapshot, collection } from 'firebase/firestore'
import {Box, Typography} from '@mui/material'

export default function ProjectPage() {
  const { id } = useParams()
  const [project, setProject] = useState({})
  
  useEffect(() => {
    onSnapshot(collection(db, 'projects'), (snapshot) => {
      setProject(
        snapshot.docs
          .filter((doc) => doc.id === id)
          .map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
      )
    })

  }, [])

  const styles = {
    BoxMain: {
      padding: '20px 50px',
    }
  }

  return (
    <Box sx={styles.BoxMain}>
      <Typography component='h1' variant='h1' >{project[0]?.data.title}</Typography>
    </Box>
  )
}
