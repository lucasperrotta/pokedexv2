import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import { Box } from '@mui/material';
const Prev = () => (
  <Box component='button' sx={{
    bgcolor: 'white.button',
    width: '50px',
    height: '50px',
    borderRadius: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <ArrowLeftRoundedIcon sx={{ fontSize: "5.0em" }} />
  </Box>
)

export default Prev