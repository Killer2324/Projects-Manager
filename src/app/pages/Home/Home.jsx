import Menu from '../../common/Menu'
import Box from '@mui/material/Box'
import Project from './components/Project'
import { useEffect, useState } from 'react'
import AddProjectButton from './components/AddProjectButton'
import AddProjectModal from './components/AddProjectModal'
import AddProjectForm from './components/AddProjectForm'
import Spinner from '../../common/Spinner'
import { db } from '../../firebase/firebase'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    db.collection('projects')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setProjects(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
        setIsLoading(false)
      })
  }, [])

  const styles = {
    BoxProjectContainer: {
      widht: '100%',
      height: 'calc(100vh - 64px)',
      padding: '15px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 243px)',
      gridAutoRows: '150px',
      gridGap: '15px',
      overflowY: 'scroll',
    },
  }

  return (
    <>
      {isLoading && <Menu />}
      {!isLoading ? (
        <main>
          <Menu />
          <Box sx={styles.BoxProjectContainer}>
            {projects.map(({ id, data: { title, description, link } }) => (
              <Project
                key={id}
                id={id}
                title={title}
                description={description}
                link={link}
                projects={projects}
                setProjects={setProjects}
              />
            ))}
          </Box>
          {isOpenModal && (
            <AddProjectModal>
              <AddProjectForm
                setIsOpenModal={setIsOpenModal}
                projects={projects}
                setProjects={setProjects}
              />
            </AddProjectModal>
          )}
          <AddProjectButton setIsOpenModal={setIsOpenModal} />
        </main>
      ) : (
        <Spinner />
      )}
    </>
  )
}
