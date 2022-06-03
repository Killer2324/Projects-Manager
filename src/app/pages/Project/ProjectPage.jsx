import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import { useParams } from 'react-router-dom'
import { onSnapshot, collection } from 'firebase/firestore'
import {Box, Typography, Button} from '@mui/material'
import Spinner from '../../common/Spinner.jsx'
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
    },
    Title: {
      padding: '15px 0px',
    },
    SubTitle: {
      padding: '20px 10px'
    }
  }
  
  return (
    <Box sx={styles.BoxMain}>
      {
        project[0]?.data ? (
          <>
            <Typography component='h1' variant='h1' sx={styles.Title}>
              {project[0]?.data.title}
            </Typography>
            <hr/>
            <Typography component='h4' variant='h4' sx={styles.SubTitle}>
              Tasks
            </Typography>
            <div style={{padding: '5px', marginLeft: '15px', border: '1px solid #eee', borderRadius: '10px', marginBottom: '15px'}}>
              <input placeholder="add your task" style={{background: 'transparent', fontSize:"20px", padding: '10px', borderRadius: 'none', outline: 'none', border: 'none', color: '#333', width: '100%'}}/>
            </div>
            <div style={{marginLeft: '15px', display: 'flex', justifyContent: 'flex-end'}}>
              <Button variant="contained" color="primary">
                add
              </Button>
            </div>
          </>
        ) : (
          <Spinner />
        )
      }
    </Box>
  )
}
