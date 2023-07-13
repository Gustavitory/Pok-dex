import { infoPokemon } from "@/src/API/get";
import { AppLayout } from "@/src/Components/Layout/AppLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTypeResources } from "@/src/Hooks/useTypeResources";
import { ProgressBar } from "@/src/Components/Atoms/progressBar/ProgressBar";

type dataPoke = {
  stats: { base: number; name: string }[];
  types: string[];
  image: string;
  id: number;
  name: string;
  height: number;
  weight: number;
};
const defaultPoke = {
  stats: [],
  id: 132,
  name: "ditto",
  types: [],
  image: "",
  height: 3,
  weight: 50,
};

const Details = () => {
  const [poke, setPoke] = useState<dataPoke>();
  const router = useRouter();
  const { color, icons } = useTypeResources(poke ? poke.types[0] : "normal");
  useEffect(() => {
    const getData = async () => {
      if (router.query.name && typeof router.query.name === "string")
        try {
          const result = await infoPokemon(router.query.name);
          console.log(result);
          if (result) {
            const { stats, types, sprites, id, name, height, weight } = result;
            console.log(stats);
            setPoke({
              stats: stats.map((el: any) => {
                return { base: el.base_stat, name: el.stat.name };
              }),
              types: types.map((el: any) => el.type.name),
              image: sprites.other.home.front_default,
              id,
              name,
              height,
              weight,
            });
          } else {
            alert("Este pokemon no existe.");
            router.push("/");
          }
        } catch {}
    };
    getData();
  }, [router]);
  return (
    <>
      <AppLayout>
        {poke ? (
          <div>
            <section>
              <p>#{poke.id}</p>
              <h1>{poke.name}</h1>
              <ul>
                {poke.stats.map((el, ind) => (
                  <li key={ind}>
                    <label>{el.name}</label>
                    <ProgressBar max={200} value={el.base} />
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <Image
                src={poke.image}
                width={600}
                height={600}
                alt={poke.name}
              />
            </section>
          </div>
        ) : null}
      </AppLayout>
      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
          background: linear-gradient(${color}20, ${color});
          min-height: 90vh;
          position: relative;
          padding: 1em 5em;
        }
        p {
          font-size: 2em;
          font-family: courier;
          font-weight: 900;
        }
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        ul {
          list-style: none;
          font-size: 1em;
        }
        label {
          font-size: 1.3em;
        }
      `}</style>
    </>
  );
};
export default Details;
