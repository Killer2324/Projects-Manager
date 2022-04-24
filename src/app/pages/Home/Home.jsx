import Menu from '../../common/Menu'
import Box from '@mui/material/Box'
import Project from './components/Project/Project'
export default function Home() {
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
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </Box>
    </main>
  )
}
