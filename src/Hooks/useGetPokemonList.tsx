import { useEffect } from "react";
import { setPokemons } from "../Redux/Reducers/pokemons";
import { pokemons } from "../API/get";
import { useDispatch } from "react-redux";

export const useGetPokemonList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getPokemonsEffect = async () => {
      try {
        const data = await pokemons();
        if (data) dispatch(setPokemons(data));
      } catch {
        (err: any) => console.log("error useGetPokemonList:", err);
      }
    };
    getPokemonsEffect();
  }, [dispatch]);
};
