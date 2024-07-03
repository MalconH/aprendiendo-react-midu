import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

// customHook, va a devolver:
// listado Pelis
// fn accederPelis()
export function useMovies({ sort }) {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef("");

  const getMovies = useCallback(async (search) => {
    try {
      if (search === "") return;
      if (search === previousSearch.current) return;

      setLoading(true);
      setError(false);
      const { movies } = await searchMovies(search);
      setMovies(movies);
    } catch (e) {
      setError(e.message);
    } finally {
      previousSearch.current = search;
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => b.year - a.year) : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading, error };
}
