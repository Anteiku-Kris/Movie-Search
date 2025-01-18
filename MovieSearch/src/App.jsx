import { SearchForm } from "./components/SearchForm";
import { MovieList } from "./components/MovieList";
import { useMovies } from "./hooks/useMovies";

export const App = () => {
  const { peliculas, handleInputChange, handleSubmit, buscador } = useMovies();

  return (
    <div className="container">
      <h1 className="title">Movies</h1>
      <SearchForm
        buscador={buscador}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <MovieList peliculas={peliculas} />
    </div>
  );
};
