import Header from '../components/Header'
import Pokebox from '../components/Pokebox'
import Content from '../components/Content'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Screen from '../components/Screen'
import { Box, Typography } from '@mui/material/'
const Home = ({ pokemons }) => (
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
        {pokemons.map(pokemon => (<Pokebox pokemon={pokemon} />))}
      </Box>

    </Content>

    <Footer>
      <Navigation />
    </Footer>

  </Screen >
)

export default Home