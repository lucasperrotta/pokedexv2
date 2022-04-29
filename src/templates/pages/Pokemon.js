import Header from '../components/Header'
import Pokebox from '../components/Pokebox'
import Content from '../components/Content'
import Prev from '../components/Prev'
import Footer from '../components/Footer'
import Screen from '../components/Screen'
import { Box, Typography } from '@mui/material/'
const Pokemon = ({ pokemons }) => (


  <Screen>
    <Header />
    <Content pokemon={pikachu}>
      <Pokebox pokemon={pikachu} />
    </Content>
    <Footer>
      <Prev />
    </Footer>
  </Screen>

)

export default Pokemon