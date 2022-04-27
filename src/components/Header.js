import { Box } from '@mui/material';
import BlueBall from './BlueBall';
import Ball from './Ball';
import Search from './Search';

const Header = ({ children }) => (
  <Box sx={{
    bgcolor: 'red.nav',
    width: 1,
    display: 'flex',
    alignItems: 'center',
    px: ["3.0em", "6.0em", "9.0em"],
    py: 3,
    justifyContent: 'space-between',
  }}>
    <Box sx={{ display: 'flex', flexGrow: 3, mr: 1 }}>
      <BlueBall />
      <Ball color="red.ball" />
      <Ball color="yellow.ball" />
      <Ball color="green.ball" />
    </Box>
    <Search />
    {children}
  </Box>
)

export default Header