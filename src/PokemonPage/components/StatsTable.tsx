import { selectSinglePokemon } from "../../store/selectors";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import { fetchSinglePokemon } from "../../store/slices/thunks";
import { StatsItem } from "../../components/StatsItem/StatsItem";

export const StatsTable = ({ name }: { name?: string }) => {
  const singlePokemon = useAppSelector(selectSinglePokemon);
  const dispatch = useAppDispatch();
  const pokemonHeight = singlePokemon.height;
  const pokemonWeight = singlePokemon.weight;
  const pokemonTypes = singlePokemon.types;
  const pokemonStats = singlePokemon.stats;
  const hp = pokemonStats[0]?.base_stat;
  const attack = pokemonStats[1]?.base_stat;
  const defense = pokemonStats[2]?.base_stat;

  useEffect(() => {
    dispatch(fetchSinglePokemon(`${name}`));
  }, [name, dispatch]);
  return (
    <div className="pokemon-stats flex flex-col gap-1">
      <StatsItem
        statName="Types"
        stat={pokemonTypes.map((type) => type.type.name).join(", ")}
      />
      <StatsItem statName="Height" stat={pokemonHeight} />
      <StatsItem statName="Weight" stat={pokemonWeight} />
      <StatsItem statName="HP" stat={hp} />
      <StatsItem statName="Attack" stat={attack} />
      <StatsItem statName="Defense" stat={defense} />
    </div>
  );
};
