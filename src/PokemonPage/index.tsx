import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchSinglePokemon } from "../store/slices/thunks";
import { useEffect } from "react";
import { selectSinglePokemon } from "../store/selectors";
import PokemonPageCSS from "./PokemonPage.module.scss";

export const PokemonPage = () => {
  const singlePokemon = useAppSelector(selectSinglePokemon);
  const dispatch = useAppDispatch();
  const name = useParams();

  const pokemonPicture = (url: string) => {
    if (!url) return 1;
    const urlParts = url.split("/");
    const pictuteNumber: number = Number(
      urlParts[urlParts.length - 1].split(".")[0]
    );
    return pictuteNumber;
  };

  const url = singlePokemon.sprites.front_default;
  const number = pokemonPicture(url);
  const imagePath = Number.isNaN(number) ? "1.png" : `${number}.png`;
  const PokemonName = name.name;
  const pokemonHeight = singlePokemon.height;
  const pokemonWeight = singlePokemon.weight;
  const pokemonTypes = singlePokemon.types;
  const pokemonStats = singlePokemon.stats;
  const hp = pokemonStats[0]?.base_stat;
  const attack = pokemonStats[1]?.base_stat;
  const defense = pokemonStats[2]?.base_stat;

  useEffect(() => {
    dispatch(fetchSinglePokemon(`${PokemonName}`));
  }, [name, dispatch, PokemonName]);
  return (
    <div
      className="flex flex-col h-full w-full p-6 gap-6 overflow-auto"
      key={PokemonName}
    >
      <div className="flex gap-2">
        <Link to="/">
          <h2
            className={`${PokemonPageCSS.nav_text} text-base font-bold text-left`}
          >
            Home
          </h2>
        </Link>
        <h2
          className={`${PokemonPageCSS.nav_text} text-base font-bold text-left`}
        >
          /
        </h2>
        <h2
          className={`${PokemonPageCSS.nav_text} text-base font-bold text-left capitalize`}
        >
          {PokemonName}
        </h2>
      </div>
      <div className="flex">
        <img
          className={PokemonPageCSS.pokemon_icon}
          alt={"pokemon-img"}
          src={require(`./../assets/${imagePath}`)}
        />
        <div className="flex flex-col p-4 gap-4">
          <p
            className={`${PokemonPageCSS.pokemon_label} text-xs font-bold text-left capitalize`}
          >
            {PokemonName}
          </p>
          <div className="pokemon-stats flex flex-col gap-1">
            <div
              className={`${PokemonPageCSS.stat} flex justify-between font-medium text-left`}
            >
              <p>Types</p>
              <p>{pokemonTypes.map((type) => type.type.name).join(", ")}</p>
            </div>
            <div
              className={`${PokemonPageCSS.stat} flex justify-between font-medium text-left`}
            >
              <p>Height</p>
              <p>{pokemonHeight}</p>
            </div>
            <div
              className={`${PokemonPageCSS.stat} flex justify-between font-medium text-left`}
            >
              <p>Weight</p>
              <p>{pokemonWeight}</p>
            </div>
            <div
              className={`${PokemonPageCSS.stat} flex justify-between font-medium text-left`}
            >
              <p>HP</p>
              <p>{hp}</p>
            </div>
            <div
              className={`${PokemonPageCSS.stat} flex justify-between font-medium text-left`}
            >
              <p>Attack</p>
              <p>{attack}</p>
            </div>
            <div
              className={`${PokemonPageCSS.stat} flex justify-between font-medium text-left`}
            >
              <p>Defense</p>
              <p>{defense}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
