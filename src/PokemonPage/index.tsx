import { useParams } from "react-router-dom";
import PokemonPageCSS from "./PokemonPage.module.scss";
import { PokemonIcon } from "../components/PokemonIcon/PokemonIcon";
import { Navigation } from "./components/Navigation";
import { StatsTable } from "./components/StatsTable";

export const PokemonPage = () => {
  const name = useParams();
  const PokemonName = name.name;
  return (
    <div
      className="flex flex-col h-full w-full p-6 gap-6 overflow-auto"
      key={PokemonName}
    >
      <Navigation name={PokemonName} />
      <div className="flex">
        <PokemonIcon size="big" />
        <div className="flex flex-col p-4 gap-4">
          <p
            className={`${PokemonPageCSS.pokemon_label} text-xs font-bold text-left capitalize`}
          >
            {PokemonName}
          </p>
          <StatsTable name={PokemonName} />
        </div>
      </div>
    </div>
  );
};
