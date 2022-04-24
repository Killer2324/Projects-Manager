import { Typography, Card, CardContent, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import { red } from '@mui/material/colors'

export default function Project() {
  const styles = {
    CardContainer: {
      width: '100%',
      height: '100%',
    },
    CardSubContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    IconsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }

  return (
    <Card sx={styles.CardContainer}>
      <CardContent sx={styles.CardSubContainer}>
        <Typography variant="h6">Title Project</Typography>
        <Typography variant="body2">project description</Typography>
        <Box component="div" sx={styles.IconsContainer}>
          <InsertLinkIcon sx={{ cursor: 'pointer' }} />
          <DeleteIcon sx={{ color: red[400], cursor: 'pointer' }} />
        </Box>
      </CardContent>
    </Card>
  )
}
