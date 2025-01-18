import { MovieCard } from "./MovieCard";

export const MovieList = ({ peliculas }) => {
  return (
    <div className="movie-list">
      {peliculas.map((pelicula) => (
        <MovieCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </div>
  );
};
