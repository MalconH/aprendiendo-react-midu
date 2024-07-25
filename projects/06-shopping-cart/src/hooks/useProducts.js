import { useEffect, useState } from "react";
import { products as initialProducts } from "../mocks/products.json";

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const mappedProducts = initialProducts.map((product) => {
      return {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        category: product.category,
      };
    });

    setProducts(mappedProducts);
  }, []);

  return { products };
}
