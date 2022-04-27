import Menu from '../../common/Menu'
import Box from '@mui/material/Box'
import Project from './components/Project'
import { useEffect, useState } from 'react'
import AddProjectButton from './components/AddProjectButton'
import AddProjectModal from './components/AddProjectModal'
import AddProjectForm from './components/AddProjectForm'
import Spinner from '../../common/Spinner'
import {
  onSnapshot,
  collection,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { db } from '../../firebase/firebase'
import { useAuthContext } from '../../context/AuthContext'
export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { user } = useAuthContext()

  useEffect(() => {
    const displayName = user.displayName || user.email

    onSnapshot(
      query(
        collection(db, 'projects'),
        orderBy('timestamp', 'desc'),
        where('username', '==', displayName)
      ),
      (snapshot) => {
        setProjects(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
        setIsLoading(false)
      }
    )
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
