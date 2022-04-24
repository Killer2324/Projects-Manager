import Menu from '../../common/Menu'
import Box from '@mui/material/Box'
import Project from './components/Project'
import { useState } from 'react'
import AddProjectButton from './components/AddProjectButton'
import AddProjectModal from './components/AddProjectModal'
import AddProjectForm from './components/AddProjectForm'
export default function Home() {
  const [project, setProject] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'Project 1 description',
      link: 'https://www.google.com',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Project 2 description',
      link: 'https://www.google.com',
    },
  ])
  const [isOpenModal, setIsOpenModal] = useState(false)

  const styles = {
    BoxProjectContainer: {
      widht: '100%',
      height: 'calc(100vh - 64px)',
      padding: '15px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridAutoRows: '150px',
      gridGap: '15px',
      overflowY: 'scroll',
    },
  }

  return (
    <main>
      <Menu />
      <Box sx={styles.BoxProjectContainer}>
        {project.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </Box>
      {isOpenModal && (
        <AddProjectModal>
          <AddProjectForm setIsOpenModal={setIsOpenModal} />
        </AddProjectModal>
      )}
      <AddProjectButton setIsOpenModal={setIsOpenModal} />
    </main>
  )
}
