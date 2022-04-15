/* import * as React from 'react';
import Typography from '@mui/material/Typography'; */
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
/* import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { boxSizing, height } from '@mui/system';
 */

const pikachu = {
  id: "001",
  name: 'Pikachu',
  types: ['Electric'],
}
const pokemons = [pikachu, pikachu, pikachu]

const Search = () => (
  <Box className='search' component='input' sx={{
    height: "40px",
    flexGrow: "1",
    display: "flex",
    maxWidth: "500px",
    minWidth: "100px",
    border: 'none',
    borderRadius: '10px',
    bgcolor: 'red.navsearchbg',
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
    bgcolor: "blue.ball",
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
    bgcolor: 'red.nav',
    width: 1,
    display: 'flex',
    alignItems: 'center',
    px: "20px",
    py: "30px",
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

const Pokebox = ({ pokemon }) => {
  const { id, name, types } = pokemon
  return (
    < Box sx={{
      bgcolor: 'electric',
      width: 1,
      maxHeight: '110px',
      height: '110px',
      minHeight: '1px',
      display: 'flex',
      p: 1,
      mt: 1,
      flexGrow: 1,
      alignSelf: 'start',
      borderRadius: "10px",
      flexFlow: 'row wrap',
    }} >
      <Box component='span' sx={{
        height: 1,
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'space-between',
        flexGrow: 1,
        alignSelf: 'start',
        borderRadius: "10px",

      }}>
        <Typography variant="subtitle1">#{id} </Typography>
        <Typography variant="h5" sx={{ fontSize: '1.4rem', fontFamily: 'Varela Round', fontWeight: "bold" }}>{name} <br /></Typography>
        <Typography sx={{ fontSize: '0.9rem', }}>{types.map(type => type).join(', ')}<br /></Typography>

      </Box>
    </Box >
  )
}
const Content = ({ children }) => (
  <Box sx={{
    bgcolor: 'white',
    width: 1,

    flexGrow: 1,

    p: 3,
    display: 'flex',
    flexFlow: 'column nowrap',
  }}>
    {children}
  </Box>
)
const Footer = ({ children }) => (
  <Box sx={{
    bgcolor: 'red.footer',
    width: 1,
    minHeight: '120px',
    display: 'flex',
  }}>
    a
    {children}
  </Box>
)

const Screen = ({ children }) => (
  < Box sx={{
    display: 'flex',
    height: '100vh',
    flexFlow: 'column nowrap',
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
        fontWeight: 'bold',
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
        my: 3
      }}>
        <Pokebox pokemon={pikachu} />
        <Pokebox pokemon={pikachu} />
        <Pokebox pokemon={pikachu} />
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