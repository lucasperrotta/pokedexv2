import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    normal: { type: "#A8A77A", bg: "#A8A77A" },
    fire: { type: "#EE8130", bg: "#EE8130" },
    water: { type: "#6390F0", bg: "#6390F0" },
    electric: { type: "#F7D02C", bg: "#F2CB54" },
    grass: { type: "#7AC74C", bg: "#7AC74C" },
    ice: { type: "#96D9D6", bg: "#96D9D6" },
    fighting: { type: "#C22E28", bg: "#C22E28" },
    poison: { type: "#A33EA1", bg: "#A33EA1" },
    ground: { type: "#E2BF65", bg: "#E2BF65" },
    flying: { type: "#A98FF3", bg: "#A98FF3" },
    psychic: { type: "#F95587", bg: "#F95587" },
    bug: { type: "#A6B91A", bg: "#A6B91A" },
    rock: { type: "#B6A136", bg: "#B6A136" },
    ghost: { type: "#735797", bg: "#735797" },
    dragon: { type: "#6F35FC", bg: "#6F35FC" },
    dark: { type: "#705746", bg: "#705746" },
    steel: { type: "#B7B7CE", bg: "#B7B7CE" },
    fairy: { type: "#D685AD", bg: "#D685AD" },
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
      navigationcolor: "#79474C",
    },
    white: {
      main: "#FFFFFF",
      borderball: "#FBFCF2",
      searchicon: "#F8ECEC",
      button: "#f5f7f6",
      navigation: "#F5F7F6",
    },
    blue: {
      ball: "#6794CB",
      waterbg: "#6393EB",
      watertag: "#6D8FC4",
      watercolor: "#6C8FC9",
      waterstatslabel: "#7F97BB",
    },
    yellow: {
      ball: "#E3A315",
    },
    green: {
      ball: "#939252",
    },
  },
});

export default theme;
