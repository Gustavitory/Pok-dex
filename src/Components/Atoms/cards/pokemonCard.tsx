import Image from "next/image";
import Card from "react-bootstrap/Card";
import { pokemonCardProps } from "../../../types/cards";
import { CSSProperties } from "react";
import { useTypeResources } from "@/src/Hooks/useTypeResources";
import Link from "next/link";

type pokemonCard = {
  data: pokemonCardProps;
};

export const PokemonCard = ({ data }: pokemonCard) => {
  const { id, name, img, types } = data;
  const { color, icons } = useTypeResources(types[0]);
  const type = types[0];
  const cardStyle: CSSProperties = {
    background: `linear-gradient(${color}40,${color})`,
    border: "none",
    display: "flex",
    alignItems: "center",
    padding: "1em",
    boxShadow: "3px 3px 6px black",
    flexDirection: "row-reverse",
    color: "white",
    textShadow: "0px 0px 3px black",
  };
  const imgStyle: CSSProperties = {
    height: "6em",
    width: "6em",
  };
  const bodyStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const linkStyle: CSSProperties = {
    textDecoration: "none",
  };
  return (
    <Link
      href={"/details/" + name}
      className="link"
      style={{ textDecoration: "none" }}
    >
      <Card style={cardStyle}>
        <Card.Img src={img} alt={name} style={imgStyle} />
        <Card.Body style={bodyStyle}>
          <Card.Title>{name}</Card.Title>
          <ul>
            {types.map((el, ind) => (
              <li key={ind}>
                <Image width={40} height={40} src={icons[el]} alt={el} />
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
      <style jsx>{`
        ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5em;
          padding: 0;
          justify-content: center;
        }
        li {
          box-shadow: 0px 0px 5px #000000;
          border-radius: 100%;
        }
      `}</style>
    </Link>
  );
};
