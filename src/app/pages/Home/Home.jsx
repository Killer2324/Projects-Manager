import Menu from '../../common/Menu'
import Box from '@mui/material/Box'
import Project from './components/Project'
import { useEffect, useState, useRef } from 'react'
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
import Search from './components/Search'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const { user } = useAuthContext()

  const searchedProject = useRef([])

  if (searchValue.length >= 1) {
    const filterProjects = [...projects]
    searchedProject.current = filterProjects.filter((project) => {
      const lowerTitle = project.data.title.toLowerCase()
      const lowerSearchValue = searchValue.toLowerCase()

      return lowerTitle.includes(lowerSearchValue)
    })
  } else {
    searchedProject.current = [...projects]
  }

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
      height: 'calc(100vh - 138px)',
      padding: '15px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridAutoRows: '150px',
      gridGap: '15px',
      overflowY: 'scroll',
      '@media (max-width: 1200px)': {
        gridTemplateColumns: 'repeat(1, 1fr)',
        justifyContent: 'center',
      },
    },
  }

  return (
    <>
      {isLoading && <Menu />}
      {!isLoading ? (
        <main>
          <Menu />
          <Search setSearchValue={setSearchValue} />
          <Box sx={styles.BoxProjectContainer}>
            {searchedProject.current.map(
              ({ id, data: { title, description, link } }) => (
                <Project
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  link={link}
                  projects={projects}
                  setProjects={setProjects}
                />
              )
            )}
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
