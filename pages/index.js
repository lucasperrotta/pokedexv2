/* import * as React from 'react';
import Typography from '@mui/material/Typography'; */
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
/* import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { boxSizing, height } from '@mui/system';
 */
const Search = () => (
  <Box className='search' component='input' sx={{
    height: "40px",
    flexGrow: "1",
    maxWidth: '300px',
    minWidth: '1px',
    border: 'none',
    borderRadius: '10px',
    bgcolor: 'secondary.main',
    justifySelf: 'end',
  }} >
  </Box>
)
const Ball = ({ color }) => (
  <Box sx={{
    bgcolor: color,
    minWidth: '1px',
    minHeight: '1px',
    height: '25px',
    width: '25px',
    borderRadius: '100%',
    border: '3px solid white',
    mx: 0.5,
    alignSelf: 'start',
  }} />
)
const BlueBall = () => (
  <Box sx={{
    bgcolor: "green",
    minWidth: "1px",
    minHeight: "1px",
    maxWidth: "60px",
    maxHeight: "60px",
    height: "60px",
    width: "60px",
    borderRadius: '50%',
    border: '3px solid white',
  }}>

  </Box>
)

const Header = ({ children }) => (
  <Box sx={{
    bgcolor: 'secondary.light',
    width: 1,
    display: 'flex',
    alignItems: 'center',
    p: "20px"
  }}>

    <Box sx={{ display: 'flex', flexGrow: 3 }}>
      <BlueBall />
      <Ball color="primary.main" />
      <Ball color="secondary.main" />
      <Ball color="error.main" />
    </Box>
    <Search />

    {children}
  </Box>
)

const Pokebox = ({ id }) => (
  <Box sx={{
    bgcolor: 'secondary.light',
    width: 1,
    display: 'flex',
    alignItems: 'center',
    p: "20px",
    mt: "10px",
    flexGrow: 1,
    alignSelf: 'start',
  }} >
    <Typography variant='h4'>
      Pokemon {id}
    </Typography>
  </Box>
)
const Content = ({ children }) => (
  <Box sx={{
    bgcolor: 'secondary.main',
    width: 1,
    flexGrow: 1,
    px: 3,
    py: 3,
    display: 'flex',
    flexFlow: 'column wrap',
  }}>
    {children}
  </Box>
)
const Footer = ({ children }) => (
  <Box sx={{
    bgcolor: 'secondary.light',
    width: 1,
    height: '100px',
  }}>

    {children}
  </Box>
)

const Screen = ({ children }) => (
  < Box sx={{
    bgcolor: 'primary.light',
    display: 'flex',
    flexFlow: 'column wrap',
    height: '100vh',
  }}>
    {children}
  </Box>
);

const Index = () => (
  <Screen>
    <Header />

    <Content>
      <Typography variant='h3' component='div' sx={{
        fontFamily: 'Varela Round',
        fontSize: '3rem',
      }}>
        Pokedex
      </Typography>

      <Typography variant='subtitle1' component='div' sx={{
        fontFamily: 'Varela Round',
        fontSize: '1.0rem',
      }}>
        Procure pelo Pokemon
        desejado por nome ou id.
      </Typography>
      <Box sx={{
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'space-around',
        flexGrow: 1,
      }}>
        <Pokebox id={1} />
        <Pokebox id={2} />
        <Pokebox id={3} />
      </Box>

    </Content>

    <Footer />

  </Screen >
);


export default Index

{/*       <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip />
      <Copyright /> */}

{/*     <Balls />
    <Search /> */}