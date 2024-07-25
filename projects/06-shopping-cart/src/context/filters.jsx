import { createContext, useState } from "react";

export const FiltersContext = createContext({});

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const changeFilter = (filter, value) => {
    const newFilters = { ...filters };
    newFilters[filter] = value;

    setFilters(newFilters);
  };

  return (
    <FiltersContext.Provider value={{ filters, changeFilter }}>{children}</FiltersContext.Provider>
  );
}
