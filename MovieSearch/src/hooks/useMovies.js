import { useState } from "react";
import { fetchMovies } from "../helpers/api";

export const useMovies = () => {
  const [buscador, setBuscador] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const handleInputChange = (e) => {
    setBuscador(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await fetchMovies(buscador);
    setPeliculas(results);
  };

  return {
    buscador,
    peliculas,
    handleInputChange,
    handleSubmit,
  };
};
