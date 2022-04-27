import { Box, Typography } from '@mui/material'
const Pages = ({ page, pages, ...props }) => (
  <Box sx={{
    bgcolor: 'white.main',
    width: "100px",
    height: "50px",
    borderRadius: "25px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Typography variant="subtitle" sx={{ fontSize: '1.5rem', fontFamily: 'Varela Round', fontWeight: "bold", color: 'black' }}>{page + " / " + pages}</Typography>
  </Box>
)

export default Pages