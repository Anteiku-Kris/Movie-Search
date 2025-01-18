export const MovieCard = ({ pelicula }) => {
    return (
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
          alt={pelicula.title}
        />
        <h2>{pelicula.title}</h2>
        <p>{pelicula.overview}</p>
      </div>
    );
  };
  