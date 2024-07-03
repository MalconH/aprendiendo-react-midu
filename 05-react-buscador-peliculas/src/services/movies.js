const API_KEY = "35a0a289";

function translateError(error) {
  const translations = {
    "Too many results.": "Demasiados resultados, intentá ser más específico.",
    "Movie not found!": "No se encontraron resultados para esa búsqueda.",
  };

  // Si no encuentra una traducción al error, devuelve un error genérico
  return translations[error] || "Algo salió mal, intentalo nuevamente";
}

export async function searchMovies(search) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
  const json = await res.json();

  // el `?.` evita que se rompa si la API devuelve que no hay resultados
  const movies = json?.Search;
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  const error = json?.Error;
  if (error) {
    throw new Error(translateError(error));
  }

  return { movies: mappedMovies };
}
