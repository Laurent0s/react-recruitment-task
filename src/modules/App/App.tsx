import { Route, Routes } from "react-router-dom";
import { PokedexPage } from "../../PokedexPage";
import { PokemonPage } from "../../PokemonPage";

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PokedexPage />} />
        <Route path="/pokemon/:name" element={<PokemonPage />} />
      </Routes>
    </div>
  );
};
