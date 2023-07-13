import { usePaginate } from "@/src/Hooks/usePaginate";
import { RootState } from "@/src/Redux/store";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Paginate = () => {
  const { nextPage, prevPage } = usePaginate();
  const { next, prev } = useSelector(
    (state: RootState) => state.pokemonSlice.pokemons
  );
  return (
    <>
      <section>
        <Button
          variant="dark"
          onClick={() => prevPage()}
          disabled={prev ? false : true}
        >
          {"<Prev"}
        </Button>
        <Button
          variant="dark"
          onClick={() => nextPage()}
          disabled={next ? false : true}
        >
          {"Next >"}
        </Button>
      </section>
      <style jsx>{`
        section {
          display: flex;
          gap: 1em;
          align-self: center;
        }
      `}</style>
    </>
  );
};
