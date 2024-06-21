import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchPokemons } from "../store/slices/thunks";
import { PokemonPreviewState } from "../store/slices/pokedexSlice";
import { PokemonBox } from "./components/pokemonBox";
import { PaginationElement } from "./components/paginationElement";
import { Link } from "react-router-dom";
import { selectPagination } from "../store/selectors";
import PokedexCSS from "./Pokedex.module.scss";

export const PokedexPage = () => {
  const { offset, limit } = useAppSelector(selectPagination);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemons({ limit, offset }));
  }, [limit, offset, dispatch]);

  const pokemons: PokemonPreviewState | undefined = useAppSelector(
    (state) => state.pokemonspecies
  );

  return (
    <div className={`${PokedexCSS.main_section} p-6 gap-4 overflow-auto`}>
      <h2 className={`${PokedexCSS.title_text} text-base font-bold text-left`}>
        Pokedex
      </h2>
      <div
        className={`${PokedexCSS.pokemons_grid} justify-items-center grid gap-4`}
      >
        {pokemons?.results.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.name}`} key={pokemon.url}>
            <PokemonBox url={pokemon.url} name={pokemon.name} />
          </Link>
        ))}
      </div>
      <PaginationElement />
    </div>
  );
};
