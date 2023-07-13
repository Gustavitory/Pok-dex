import { pokemonCardProps } from "@/src/types/cards";
import { createSlice } from "@reduxjs/toolkit";

export interface PokemonState {
  pokemons: {
    next?: string;
    prev?: string;
    pokemons: pokemonCardProps[];
  };
  fetching: boolean;
}

const initialState: PokemonState = {
  pokemons: {
    pokemons: [],
  },
  fetching: false,
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      return {
        ...state,
        pokemons: action.payload,
      };
    },
    setFetching: (state, action) => {
      return {
        ...state,
        fetching: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPokemons, setFetching } = pokemonSlice.actions;

export default pokemonSlice.reducer;
