import "./App.css";
import "./bolt.css";
import { Movies } from "./components/Movies";
import { useCallback, useState } from "react";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";

export function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);
  const { movies, getMovies, loading, error } = useMovies({ sort });

  const debouncedGetMovies = useCallback(debounce(getMovies, 350), [getMovies]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No hagas NADA si la search es un string vacío
    if (search.trim() === "") return;

    getMovies(search);
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <form action="#" className="form" onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={handleChange}
            type="text"
            name="query"
            id="search-movies"
            placeholder="Godfather, Scarface, Taxi Driver..."
          />
          <label htmlFor="sort-movies">Latest first</label>
          <input value={sort} onChange={handleSort} type="checkbox" name="sort" id="sort-movies" />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {loading && <p>Cargando...</p>}
        {error ? <div className="error">{error}</div> : <Movies movies={movies} />}
      </main>
    </div>
  );
}
