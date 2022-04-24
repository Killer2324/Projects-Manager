import { Typography, Card, CardContent, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import { red } from '@mui/material/colors'

export default function Project({ title, description, link }) {
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
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Box component="div" sx={styles.IconsContainer}>
          <a rel="noreferrer" href={link} target="_blank">
            <InsertLinkIcon sx={{ cursor: 'pointer' }} />
          </a>
          <DeleteIcon sx={{ color: red[400], cursor: 'pointer' }} />
        </Box>
      </CardContent>
    </Card>
  )
}
