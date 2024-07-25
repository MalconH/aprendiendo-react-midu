import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const minPriceId = useId();
  const categoryId = useId();

  const { filters, changeFilter } = useFilters();

  const { minPrice } = filters;

  const handleChangeMinPrice = (e) => {
    changeFilter("minPrice", e.target.value);
  };

  const handleChangeCategory = (e) => {
    changeFilter("category", e.target.value);
  };

  return (
    <div className="filters">
      <div>
        <label htmlFor={minPriceId}>Precio mínimo</label>
        <input
          type="range"
          name="min-price"
          id={minPriceId}
          min={0}
          max={1000}
          step={10}
          onChange={handleChangeMinPrice}
          value={minPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryId}>Categoría</label>
        <select name="category" id={categoryId} onChange={handleChangeCategory}>
          <option value="all">Todo</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </div>
  );
}
