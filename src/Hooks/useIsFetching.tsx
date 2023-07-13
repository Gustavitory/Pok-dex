import { useDispatch } from "react-redux";
import { setFetching } from "../Redux/Reducers/pokemons";

export const useIsFetching = () => {
  const dispatch = useDispatch();
  const fetching = () => {
    dispatch(setFetching(true));
  };
  const noFetching = () => {
    dispatch(setFetching(false));
  };
  return { fetching, noFetching };
};
