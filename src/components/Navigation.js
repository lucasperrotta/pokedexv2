import { Box } from '@mui/material'
import Prev from './Prev'
import Next from './Next'
import Pages from './Pages'
const Navigation = (prev = 0, next = 2, page = 1, pages = 3) => (
  <Box sx={{
    bgcolor: 'red.main',
    width: "300px",
    height: "100px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  }}>
    <Prev />
    <Pages pages={pages} page={page} />
    <Next />
  </Box>
)

export default Navigation