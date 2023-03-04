import { Route, Routes } from "react-router-dom";

import PokemonList from "./Components/PokemonList";
import PokemonInfo from "./Components/PokemonInfo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonList/>}>
          <Route path="/:pokemon" element={<PokemonInfo/>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
