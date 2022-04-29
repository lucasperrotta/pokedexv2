import Image from 'next/image';
import { Box, Typography } from "@mui/material"
import TypeTag from './TypeTag';
import Text from './Text';
const LittlePokeImg = ({ src = "/assets/pikachu.png", alt, ...props }) => (
  <Box sx={{
    height: "200%",
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'start',
    position: 'relative',
    top: '-100%',
  }}>
    <Image
      src={src}
      quality={100}
      width={200}
      height={200}
    />
  </Box>
)
const Pokebox = ({ pokemon, sx }) => {
  const { id, name, types } = pokemon
  return (
    < Box sx={sx} >
      <Box component='span' sx={{
        height: 1,
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
      }}>
        <Text sx={{ fontFamily: 'Varela Round' }} >#{id}</Text>
        <Typography variant="h5" sx={{ fontSize: '1.5rem', fontFamily: 'Varela Round', fontWeight: "bold", color: 'white.main', textShadow: "2px 2px 3px black" }}>{name} <br /></Typography>
        {types.map(type =>
          <TypeTag type={type}>
            <Typography variant="subtitle2" sx={{ fontSize: '0.9rem', display: 'flex', justifyContent: "center", alignItems: "center" }}>{type}</Typography>
          </TypeTag>
        )}

      </Box>
      <LittlePokeImg />
    </Box >
  )
}

export default Pokebox