import { selectSinglePokemon } from "../../store/selectors";
import { useAppSelector } from "../../store/store";
import PokemonPageCSS from "./PokemonIcon.module.scss";

export const PokemonIcon = ({ size = "medium" }: { size?: string }) => {
  const singlePokemon = useAppSelector(selectSinglePokemon);
  const url = singlePokemon.sprites.front_default;

  const pokemonPicture = (url: string) => {
    if (!url) return 1;
    const urlParts = url.split("/");
    const pictuteNumber: number = Number(
      urlParts[urlParts.length - 1].split(".")[0]
    );
    return pictuteNumber;
  };

  const number = pokemonPicture(url);
  const imagePath = Number.isNaN(number) ? "1.png" : `${number}.png`;
  return (
    <img
      className={`${PokemonPageCSS.pokemon_icon} ${
        PokemonPageCSS[size] ? PokemonPageCSS[size] : ""
      }`}
      alt={"pokemon-img"}
      src={require(`./../../assets/${imagePath}`)}
    />
  );
};
