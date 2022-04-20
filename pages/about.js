/* import * as React from 'react';
import Typography from '@mui/material/Typography'; */
import { BorderAllRounded } from '@mui/icons-material';
import Image from 'next/image';
import { Box, Typography, IconButton } from '@mui/material/';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
/* import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { boxSizing, height } from '@mui/system';
 */

const pikachu = {
  id: "001",
  name: 'Pikachu',
  types: ['electric'],
}
const pokemons = [pikachu, pikachu, pikachu]

const Search = ({ icon }) => (
  <Box sx={{
    display: 'flex',
  }}>
    <Box placeholder="Search" className='search' component='input' sx={{
      height: "40px",
      flexGrow: "1",
      display: "flex",
      maxWidth: "500px",
      minWidth: "100px",
      pl: "1em",
      border: 'none',
      borderRadius: '10px 0 0 10px',
      bgcolor: 'red.navsearchbg',
      color: 'white.main',
      justifySelf: 'end',
      '::placeholder': {
        color: 'white.main',
        fontSize: '1.2rem',
      },
      ':focus': {
        outline: 'none',
        border: 'none',
        bgcolor: 'red.navsearchbg',
      }
    }} />
    <Box placeholder="Search" className='search' component='div' sx={{
      height: "40px",
      flexGrow: "1",
      display: "flex",
      pl: "1em",
      border: 'none',
      borderRadius: '0px 10px 10px 0px',
      bgcolor: 'red.navsearchbg',
      justifySelf: 'end',
    }}>
      <IconButton aria-label="search">
        <SearchRoundedIcon color='white' />
      </IconButton>
    </Box>

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
    <Box sx={{
      bgcolor: "white.main",
      minWidth: "1px",
      minHeight: "1px",
      maxWidth: "10px",
      maxHeight: "10px",
      height: "10px",
      width: "10px",
      borderRadius: '50%',
      mt: 1,
      mx: 1
    }} />
  </Box>
)

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
const TypeTag = ({ type, children }) => (
  <Box sx={{
    bgcolor: type + '.type',
    boxShadow: "1px 1px 3px black",
    borderRadius: "100px",
  }}>
    {children}
  </Box >
)
const Pokebox = ({ pokemon }) => {
  const { id, name, types } = pokemon
  return (
    < Box sx={{
      width: 1,
      maxHeight: '120px',
      backgroundColor: "electric.bg",
      flexGrow: 1,
      display: 'flex',
      p: 1,
      alignSelf: 'start',
      justifyContent: 'space-between',
      borderRadius: "20px",
      flexFlow: 'row wrap',
      mt: "0.7em",
      backgroundImage: "url('https://i.postimg.cc/GpRWYpTY/pokeball-watermark.png')",
      backgroundSize: "auto 200%",
      backgroundPosition: "center right",
      backgroundRepeat: "no-repeat",
    }} >
      <Box component='span' sx={{
        height: 1,
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
      }}>
        <Typography variant="subtitle1">#{id} </Typography>
        <Typography variant="h5" sx={{ fontSize: '1.5rem', fontFamily: 'Varela Round', fontWeight: "bold", color: 'white.main', textShadow: "2px 2px 3px black" }}>{name} <br /></Typography>
        {types.map(type =>
          <TypeTag type={type}>
            <Typography variant="subtitle2" sx={{ fontSize: '0.9rem', display: 'flex', justifyContent: "center", alignItems: "center" }}>{type}</Typography>
          </TypeTag>
        )}

      </Box>
      <Box sx={{
        height: "200%",
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'start',
        position: 'relative',
        top: '-100%',
      }}>
        <Image
          src="/assets/pikachu.png"
          quality={100}
          width={200}
          height={200}
        />
      </Box>
    </Box >
  )
}
const Content = ({ children }) => (
  <Box sx={{
    bgcolor: 'white',
    width: 1,
    flexGrow: 1,
    px: ["3.0em", "6.0em", "9.0em"],
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    py: 2,
  }}>
    {children}
  </Box>
)
const Back = () => (
  <Box component='button' sx={{
    bgcolor: 'white.button',
    width: '70px',
    height: '70px',
    borderRadius: '100px'
  }}>
    <ArrowLeftRoundedIcon sx={{ fontSize: "4.0em" }} />
  </Box>
)
const Prev = () => (
  <Box component='button' sx={{
    bgcolor: 'white.button',
    width: '70px',
    height: '70px',
    borderRadius: '100px'
  }}>
    <ArrowLeftRoundedIcon sx={{ fontSize: "4.0em" }} />
  </Box>
)
const Next = () => (
  <Box component='button' sx={{
    bgcolor: 'white.button',
    width: '70px',
    height: '70px',
    borderRadius: '100px'
  }}>
    <ArrowRightRoundedIcon sx={{ fontSize: "4.0em" }} />
  </Box>
)
const Navigation = (prev, next, page) => (
  <Box sx={{
    bgcolor: 'red.main',
    width: "300px",
    height: "100px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  }}>
    <Prev />
    <Box sx={{
      bgcolor: 'white.main',
      width: "100px",
      height: "60px",
      borderRadius: "20px",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography variant="subtitle" sx={{ fontSize: '1.5rem', fontFamily: 'Varela Round', fontWeight: "bold", color: 'black' }}>{page}1/500</Typography>
    </Box>
    <Next />
  </Box>
)
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
      <Box sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        width: "250px",
        border: 'none',
        borderRadius: '10px',
        flexGrow: 1,
        maxHeight: "100px",
        justifyContent: 'space-around',
        my: 1
      }}>
        <Typography variant='h3' component='div' sx={{
          fontFamily: 'Varela Round',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          width: 'auto',
          color: 'red.title'
        }}>
          Pokedex
          <Box sx={{ width: 1, bgcolor: 'red.title', borderRadius: "5px", height: '5px' }} />
        </Typography>
        <Typography variant='subtitle1' component='div' sx={{
          fontFamily: 'Varela Round',
          fontSize: '1.0rem',
        }}>
          Procure pelo pokemon
          desejado por nome ou id.
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexGrow: 1,
      }}>
        <Pokebox pokemon={pikachu} />
        <Pokebox pokemon={pikachu} />
        <Pokebox pokemon={pikachu} />
      </Box>

    </Content>

    <Footer>
      <Back />
    </Footer>

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