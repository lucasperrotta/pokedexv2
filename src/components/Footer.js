import { Box } from '@mui/material'
const Footer = ({ children }) => (
  <Box sx={{
    bgcolor: 'red.footer',
    width: 1,
    minHeight: '110px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    {children}
  </Box>
)
export default Footer