import Home from "../src/templates/pages/Home";
import pokemons from "../src/utils/pokemons";

const Index = () => (
  <Home pokemons={pokemons} />
);


export default Index