import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

export default function AddProjectButton({ setIsOpenModal }) {
  const ButtonStyle = {
    position: 'absolute',
    bottom: '40px',
    right: '40px',
    borderRadius: '50%',
    padding: '25px 30px',
  }

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  return (
    <Button variant="contained" sx={ButtonStyle} onClick={handleOpenModal}>
      <AddIcon />
    </Button>
  )
}
