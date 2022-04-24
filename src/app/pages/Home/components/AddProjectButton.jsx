import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

export default function AddProjectButton() {
  const ButtonStyle = {
    position: 'absolute',
    bottom: '40px',
    right: '40px',
    borderRadius: '50%',
    padding: '20px 30px',
  }
  return (
    <Button variant="contained" sx={ButtonStyle}>
      <AddIcon />
    </Button>
  )
}
