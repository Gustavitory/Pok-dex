export const url = "https://pokeapi.co/api/v2/";
export const getConfig = () => {
  return {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };
};
