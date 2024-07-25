import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const context = useContext(FiltersContext);
  const { filters } = context;

  if (context === undefined) {
    throw new Error("useFilter must be used inside a FiltersProvider");
  }

  const filterProducts = (products) => {
    return products.filter(
      (product) =>
        (product.category === filters.category || filters.category === "all") &&
        product.price >= filters.minPrice
    );
  };

  return { ...context, filterProducts };
}
