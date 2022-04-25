import Common from './Common.module.css'
import { Box } from '@mui/material'
export default function Spinner() {
  const boxStyles = {
    width: '100%',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <Box sx={boxStyles}>
      <div className={Common.lds_dual_ring}></div>
    </Box>
  )
}
