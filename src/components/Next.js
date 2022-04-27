import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded'
import { Box } from '@mui/material'

const Next = () => (
  <Box component='button' sx={{
    bgcolor: 'white.button',
    width: '50px',
    height: '50px',
    borderRadius: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <ArrowRightRoundedIcon sx={{ fontSize: '5.0em' }} />
  </Box>
)

export default Next