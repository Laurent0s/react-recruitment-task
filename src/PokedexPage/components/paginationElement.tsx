import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  nextPage,
  prevPage,
  firstPage,
  lastPage,
} from "../../store/slices/paginationSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { selectPagination } from "../../store/selectors";
import { constants } from "../../constants";
import { Button } from "../../components/Button/Button";
import PokedexCSS from "./../Pokedex.module.scss";

export const PaginationElement = () => {
  const { currentPage, isLastPage, isFirstPage } =
    useAppSelector(selectPagination);
  const dispatch = useAppDispatch();
  const totalPokemons = constants.POKEMONS_HEIGHT_LIMIT;
  const totalPages = Math.ceil(totalPokemons / 20);

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  const handlePrevPage = () => {
    dispatch(prevPage());
  };

  const handleFirstPage = () => {
    dispatch(firstPage());
  };

  const handleLastPage = () => {
    dispatch(lastPage(totalPages));
  };

  return (
    <div className="flex justify-center gap-2">
      <Button
        isFirstPage={isFirstPage}
        onClick={handlePrevPage}
        icon={faChevronLeft}
      />
      {!isFirstPage && (
        <>
          <Button
            number={1}
            onClick={handleFirstPage}
            isFirstPage={isFirstPage}
          />
          <span
            className={`${PokedexCSS.dots} text-xs font-bold text-left self-end`}
          >
            ...
          </span>
        </>
      )}
      <Button number={currentPage} isCurrentPage={true} />
      {!isLastPage && (
        <>
          <span
            className={`${PokedexCSS.dots} text-xs font-bold text-left self-end`}
          >
            ...
          </span>
          <Button
            number={totalPages}
            onClick={handleLastPage}
            isLastPage={isLastPage}
          />
        </>
      )}
      <Button
        isLastPage={isLastPage}
        onClick={handleNextPage}
        icon={faChevronRight}
      />
    </div>
  );
};
