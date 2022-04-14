import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
    red: {
      nav: "#CC4638",
      navcolorsearch: "#F1B4AA",
      navsearchbg: "#B83E31",
      navborder: "#7F2923",
      ball: "#611E1C",
      title: "#8D2E2B",
      footer: "#CC4638",
      footerborder: "#8C2E2B",
      buttoniconcolor: "#6C4341",
      buttoncolor: "#6A4344",
      navigationcolor: "#79474C"
    },
    white: {
      main: "#FFFFFF",
      borderball: "#FBFCF2",
      searchicon: "#F8ECEC",
      button: "#F5F7F6",
      navigation: "#F5F7F6",
    },
    blue: {
      ball: "#6794CB",
      waterbg: "#6393EB",
      watertag: "#6D8FC4",
      watercolor: "#6C8FC9",
      waterstatslabel: "#7F97BB"
    },
    yellow: {
      ball: "#E3A315",
    },
    green: {
      ball: "#939252"
    }
  }
});

export default theme;