import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart() {
  const context = useContext(CartContext);

  // Throw error when tring to access to CartContext outside a valid CartProvider
  // CartContext by default is an empty object
  if (Object.keys(context).length === 0) {
    throw new Error("Cart component must be within a valid CartProvider");
  }

  return context;
}
