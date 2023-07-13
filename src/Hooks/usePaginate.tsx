import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { pokemons } from "../API/get";
import { setPokemons } from "../Redux/Reducers/pokemons";

export const usePaginate = () => {
  const { next, prev } = useSelector(
    (state: RootState) => state.pokemonSlice.pokemons
  );
  const dispatch = useDispatch();
  const nextPage = async () => {
    try {
      if (next) {
        const data = await pokemons(next);
        if (data) dispatch(setPokemons(data));
      }
    } catch {
      (err: any) => console.log("error en usePaginate:", err);
    }
  };
  const prevPage = async () => {
    try {
      if (prev) {
        const data = await pokemons(prev);
        if (data) dispatch(setPokemons(data));
      }
    } catch {
      (err: any) => console.log("error en usePaginate:", err);
    }
  };
  return { prevPage, nextPage };
};
