import { pokemonRequest } from "../types";
import { getConfig, url } from "./constants";

export async function infoPokemon(name: string) {
  try {
    const response = await fetch(url + "pokemon/" + name, getConfig());
    const pokemon = await response.json();
    return pokemon;
  } catch {
    (err: any) => console.log("error infoPokemon:", err);
  }
}
export async function pokemonsBasicInfo(link: string) {
  try {
    const response = await fetch(link, getConfig());
    const pokemon = await response.json();
    return pokemon;
  } catch {
    (err: any) => console.log("error pokemonBasicInfo:", err);
  }
}
export async function pokemons(page: string = url + "pokemon") {
  try {
    const response = await fetch(page, getConfig());
    const pokemon = await response.json();
    console.log(pokemon);
    const pokemonWithInfo = pokemon.results.map((el: pokemonRequest) =>
      pokemonsBasicInfo(el.url).then((resp) => {
        const { types, sprites, id, name } = resp;
        return {
          id,
          name,
          types: types.map((el: typeof types) => el.type.name),
          img: sprites.versions["generation-v"]["black-white"].animated
            .front_default,
        };
      })
    );
    const fullData = await Promise.all(pokemonWithInfo);
    return { next: pokemon.next, prev: pokemon.previous, pokemons: fullData };
  } catch {
    (err: any) => console.log("error pokemons:", err);
  }
}
