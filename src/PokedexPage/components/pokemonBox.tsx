import { useAppDispatch } from "../../store/store";
import { fetchSinglePokemon } from "../../store/slices/thunks";
import PokedexCSS from "./../Pokedex.module.scss";

export const PokemonBox = ({ name, url }: { name: string; url: string }) => {
  const dispatch = useAppDispatch();
  const pokemonNumber = (url: string) => {
    const urlParts = url.split("/");
    const number: number = Number(urlParts[urlParts.length - 2]);
    return number;
  };

  const number = pokemonNumber(url);
  const imagePath = Number.isNaN(number) ? "1.png" : `${number}.png`;

  const openPokemonPage = () => {
    dispatch(fetchSinglePokemon(name));
  };

  return (
    <div
      className={`${PokedexCSS.pokedex_card} flex flex-col items-center gap-3 cursor-pointer p-4`}
      key={pokemonNumber(url)}
      onClick={openPokemonPage}
    >
      <img
        className={PokedexCSS.pokemon_icon}
        alt={"pokemon-img"}
        src={require(`./../../assets/${imagePath}`)}
      />
      <p
        className={`${PokedexCSS.pokemon_text} p-1 rounded text-xs font-bold text-left capitalize`}
      >
        {name}
      </p>
    </div>
  );
};
