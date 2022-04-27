
import { Box, Typography, IconButton } from "@mui/material/";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import Types from "../src/components/types";
import Features from "../src/components/features";
import Stats from "../src/components/stats";
import Abilities from "../src/components/abilities";
import TypeTag from "../src/components/type-tag";
import Title from "../src/components/title";
import pokemons from '../src/utils/pokemons';

let pikachu = pokemons[0];

const Search = () => (
  <Box
    sx={{
      display: "flex",
    }}
  >
    <Box
      placeholder="Search"
      className="search"
      component="input"
      sx={{
        height: "40px",
        flexGrow: "1",
        display: "flex",
        maxWidth: "500px",
        minWidth: "100px",
        pl: "1em",
        border: "none",
        borderRadius: "10px 0 0 10px",
        bgcolor: "red.navsearchbg",
        color: "white.main",
        justifySelf: "end",
        "::placeholder": {
          color: "white.main",
          fontSize: "1.2rem",
        },
        ":focus": {
          outline: "none",
          border: "none",
          bgcolor: "red.navsearchbg",
        },
      }}
    />
    <Box
      placeholder="Search"
      className="search"
      component="div"
      sx={{
        height: "40px",
        flexGrow: "1",
        display: "flex",
        pl: "1em",
        border: "none",
        borderRadius: "0px 10px 10px 0px",
        bgcolor: "red.navsearchbg",
        justifySelf: "end",
      }}
    >
      <IconButton aria-label="search">
        <SearchRoundedIcon color="white" />
      </IconButton>
    </Box>
  </Box>
);
const Ball = ({ color }) => (
  <Box
    sx={{
      bgcolor: color,
      minWidth: "1px",
      minHeight: "1px",
      height: "25px",
      width: "25px",
      borderRadius: "100%",
      border: "3px solid white",
      mx: 0.5,
      alignSelf: "start",
    }}
  />
);
const BlueBall = () => (
  <Box
    sx={{
      bgcolor: "blue.ball",
      minWidth: "1px",
      minHeight: "1px",
      maxWidth: "60px",
      maxHeight: "60px",
      height: "60px",
      width: "60px",
      borderRadius: "50%",
      border: "3px solid white",
    }}
  >
    <Box
      sx={{
        bgcolor: "white.main",
        minWidth: "1px",
        minHeight: "1px",
        maxWidth: "10px",
        maxHeight: "10px",
        height: "10px",
        width: "10px",
        borderRadius: "50%",
        mt: 1,
        mx: 1,
      }}
    />
  </Box>
);

const Header = ({ children }) => (
  <Box
    sx={{
      bgcolor: "red.nav",
      width: 1,
      display: "flex",
      alignItems: "center",
      px: ["3.0em", "6.0em", "9.0em"],
      py: 3,
      justifyContent: "space-between",
    }}
  >
    <Box sx={{ display: "flex", flexGrow: 3, mr: 1 }}>
      <BlueBall />
      <Ball color="red.ball" />
      <Ball color="yellow.ball" />
      <Ball color="green.ball" />
    </Box>
    <Search />
    {children}
  </Box>
);
const Pokebox = ({ pokemon }) => {
  const { id, name, types } = pokemon;
  return (
    <Box
      sx={{
        width: 1,
        backgroundColor: "white.main",
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

const Prev = () => (
  <Box
    component="button"
    sx={{
      bgcolor: "white.button",
      width: "50px",
      height: "50px",
      borderRadius: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <ArrowLeftRoundedIcon sx={{ fontSize: "5.0em" }} />
  </Box>
);
const Next = () => (
  <Box
    component="button"
    sx={{
      bgcolor: "white.button",
      width: "50px",
      height: "50px",
      borderRadius: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <ArrowRightRoundedIcon sx={{ fontSize: "5.0em" }} />
  </Box>
);
const Navigation = (prev, next, page) => (
  <Box
    sx={{
      bgcolor: "red.main",
      width: "300px",
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    }}
  >
    <Prev />
    <Box
      sx={{
        bgcolor: "white.main",
        width: "100px",
        height: "50px",
        borderRadius: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="subtitle"
        sx={{
          fontSize: "1.5rem",
          fontFamily: "Varela Round",
          fontWeight: "bold",
          color: "black",
        }}
      >
        {page}1/500
      </Typography>
    </Box>
    <Next />
  </Box>
);
const Footer = ({ children }) => (
  <Box
    sx={{
      bgcolor: "red.footer",
      width: 1,
      minHeight: "110px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </Box>
);

const Screen = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      height: "100vh",
      flexFlow: "column nowrap",
    }}
  >
    {children}
  </Box>
);

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
