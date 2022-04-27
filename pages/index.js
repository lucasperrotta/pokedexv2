import Home from "../src/templates/Home";
import pokemons from "../src/utils/pokemons";

const Index = () => (
  <Home pokemons={pokemons} />
);


export default Index