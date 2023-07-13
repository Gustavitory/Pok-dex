import Head from "next/head";
import { useGetPokemonList } from "@/src/Hooks/useGetPokemonList";
import { CardsDisposition } from "../src/Components/Molecules/CardsDisposition/CardsDisposition";
import { useSelector } from "react-redux";
import { RootState } from "@/src/Redux/store";
import { AppLayout } from "@/src/Components/Layout/AppLayout";

export default function Home() {
  useGetPokemonList();
  const { pokemons } = useSelector(
    (state: RootState) => state.pokemonSlice.pokemons
  );
  return (
    <>
      <Head>
        <title>Pokemon app</title>
        <meta name="description" content="Created by Gustavo Riera" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <CardsDisposition data={pokemons} />
      </AppLayout>
    </>
  );
}
