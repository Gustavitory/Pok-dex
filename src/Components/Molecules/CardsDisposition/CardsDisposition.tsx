import { pokemonCardProps } from "@/src/types/cards";
import { PokemonCard } from "../../Atoms/cards/pokemonCard";
import { Paginate } from "../../Atoms/paginate/Paginate";
import { memo } from "react";
type pokemonCard = {
  data: pokemonCardProps[];
};

export const CardsDisposition = memo(function CardsDisposition({
  data,
}: pokemonCard) {
  return (
    <>
      <ul>
        {data.map((el, ind) => (
          <PokemonCard key={ind} data={el} />
        ))}
      </ul>
      <Paginate />
      <style jsx>{`
        ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(15.5em, 1fr));
          gap: 1em;
          padding: 1em 3em;
        }
      `}</style>
    </>
  );
});
