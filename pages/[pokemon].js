
import Header from "../src/components/Header";
import { Box, Typography } from "@mui/material/";

import Types from "../src/components/types";
import Features from "../src/components/features";
import Stats from "../src/components/stats";
import Abilities from "../src/components/abilities";
import Title from "../src/components/title";
import pokemons from '../src/utils/pokemons';

import Footer from "../src/components/Footer";
import Screen from "../src/components/Screen";
import Prev from "../src/components/Prev";
let pikachu = pokemons[0];


const Pokebox = ({ pokemon }) => {
  const { id, name, types } = pokemon;
  return (
    <Box
      sx={{
        width: 1,
        bgcolor: "white.main",
        display: "flex",
        justifyContent: "center",
        alignContent: "flex-start",
        flexFlow: "row",
        flexWrap: "wrap",
        p: 1,
        flexGrow: 1,
        borderRadius: "20px",
        position: "relative",
        pt: "80px",
      }}
    >
      <Box
        component="img"
        src="/assets/pikachu.png"
        sx={{
          height: "300px",
          position: "absolute",
          top: "-220px",
        }}
      />
      <Types />
      <Title title="Info" type={types[0]} />
      <Features />
      <Stats type={types[0]} />
      <Abilities type={types[0]} />
    </Box>
  );
};
const Content = ({ children, pokemon }) => {
  const { id, name, types } = pokemon;
  return (
    <Box
      sx={{
        bgcolor: "electric.bg",
        width: 1,
        flexGrow: 1,
        px: ["3.0em", "6.0em", "9.0em"],
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        py: 2,
        backgroundImage:
          "url('https://i.postimg.cc/GpRWYpTY/pokeball-watermark.png')",
        backgroundSize: "auto 60%",
        backgroundPosition: "top right",
        backgroundPositionY: "-20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box sx={{ width: 1, height: "200px", mb: 4 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "2.0rem",
            fontFamily: "Varela Round",
            fontWeight: "bold",
            color: "white.main",
            textShadow: "2px 2px 3px black",
          }}
        >
          #{id}{" "}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: "2.0rem",
            fontFamily: "Varela Round",
            fontWeight: "bold",
            color: "white.main",
            textShadow: "2px 2px 3px black",
          }}
        >
          {name} <br />
        </Typography>
        {/* {types.map(type =>
        )} */}
      </Box>
      {children}
    </Box>
  );
};

const Index = () => (
  <Screen>
    <Header />
    <Content pokemon={pikachu}>
      <Pokebox pokemon={pikachu} />
    </Content>
    <Footer>
      <Prev />
    </Footer>
  </Screen>
);

export default Index;

{
  /*       <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip />
      <Copyright /> */
}

{
  /*     <Balls />
    <Search /> */
}
