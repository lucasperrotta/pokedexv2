import Header from '../../components/Header'
import Pokebox from '../../components/Pokebox'
import Content from '../../components/Content'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Screen from '../../components/Screen'
import { Box, Typography } from '@mui/material/'

const HorizoltalBar = ({ sx }) => (
  <Box sx={sx} />
)
const Home = ({ pokemons }) => (
  <Screen>
    <Header />

    <Content>

      <Typography variant='h3' component='div' sx={{
        fontFamily: 'Varela Round',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        width: 'auto',
        color: 'red.title'
      }}>
        Pokedex
      </Typography>
      <HorizoltalBar sx={{ width: "260px", bgcolor: 'red.title', borderRadius: "5px", height: '5px' }} />
      <Typography variant='subtitle1' component='div' sx={{
        fontFamily: 'Varela Round',
        fontSize: '1.0rem',
        width: '250px',
      }}>
        Procure pelo pokemon
        desejado por nome ou id.
      </Typography>


      {pokemons.map(pokemon => (<Pokebox pokemon={pokemon} sx={{
        width: 1,
        maxHeight: '120px',
        bgcolor: pokemon.types[0] + ".bg",
        flexGrow: 1,
        display: 'flex',
        p: 1,
        alignSelf: 'start',
        justifyContent: 'space-between',
        borderRadius: "20px",
        flexFlow: 'row wrap',
        backgroundImage: "url('https://i.postimg.cc/GpRWYpTY/pokeball-watermark.png')",
        backgroundSize: "auto 200%",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        my: "40px"
      }} />))}


    </Content>

    <Footer>
      <Navigation />
    </Footer>
  </Screen >
)

export default Home