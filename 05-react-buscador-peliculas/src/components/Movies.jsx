function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img className="movie-poster" src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoMovies() {
  return <p>No se encontraron pelis para esa búsqueda...</p>;
}

export function Movies({ movies }) {
  // evita que se rompa si `movies` es undefined, o sea, la API devolvió que no hay resultados
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />;
}
