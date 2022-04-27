import Image from 'next/image';
import { Box, Typography } from "@mui/material"
import TypeTag from './TypeTag';

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

export default Pokebox