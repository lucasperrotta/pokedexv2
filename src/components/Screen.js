import { Box } from '@mui/material'
const Screen = ({ children }) => (
  < Box sx={{
    display: 'flex',
    height: '100vh',
    flexFlow: 'column nowrap',
  }}>
    {children}
  </Box>
);
export default Screen