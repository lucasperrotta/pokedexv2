import { Box, Typography } from '@mui/material/'
import pokemons from '../src/utils/pokemons'
import Header from '../src/components/Header'
import Pokebox from '../src/components/Pokebox'
import Content from '../src/components/Content'
import Navigation from '../src/components/Navigation'

const pikachu = pokemons[0];


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
      <Navigation />
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