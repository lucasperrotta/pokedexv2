import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { boxSizing, height } from '@mui/system';

const Search = () => (
  <Box component="form" sx={{
    width: "60%",
    height: 1,
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    p: 2
  }}>
    <Box className='search' component='input' sx={{
      width: [1 / 1, 1 / 2, 1 / 2],
      height: 0.3,
      border: 'none',
      borderRadius: '10px',
      bgcolor: 'secondary.main',
      display: 'flex',
    }} >

    </Box>
  </Box >
)
const Ball = ({ color, children }) => (
  <Box sx={{
    bgcolor: color,
    width: 25,
    height: 25,
    borderRadius: '50%',
    border: '3px solid white',
    alignSelf: 'start',
    m: 0.25
  }}>
    {children}
  </Box>
)
const BlueBall = () => (
  <Box sx={{
    bgcolor: "green",
    width: 70,
    height: 70,
    borderRadius: '50%',
    border: '3px solid white',
    justifySelf: 'center',
    alignSelf: 'center',
    m: 0.25
  }}>
    -

  </Box>
)
const Balls = ({ children }) => (
  <Box sx={{
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
  }}>
    {children}
  </Box>
)

const Header = ({ children }) => (
  <Box sx={{
    bgcolor: 'secondary.light',
    width: 1,
    height: '18vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 1.5
  }}>
    <Balls>
      <BlueBall />
      <Ball color="primary.main" />
      <Ball color="secondary.main" />
      <Ball color="error.main" />
    </Balls>
    <Search />
    {/*     <Balls />
    <Search /> */}
    {children}
  </Box>
)

const Display = ({ children }) => (
  <Box sx={{
    bgcolor: 'secondary.main',
    width: 1,
    height: '64vh',
  }}>
    {children}
  </Box>
)
const Footer = ({ children }) => (
  <Box sx={{
    bgcolor: 'secondary.light',
    width: 1,
    height: '18vh',
    position: 'absolute',
    bottom: 0,
  }}>
    {children}
  </Box>
)

const Screen = ({ children }) => (
  < Box sx={{
    bgcolor: 'primary.light',
    height: '100vh',
  }}>
    {children}
  </Box>
);

const Index = () => (
  <Screen>
    <Header>

    </Header>
    <Display>

    </Display>

    <Footer>

    </Footer>
    {/*       <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip />
      <Copyright /> */}
  </Screen >
);


export default Index