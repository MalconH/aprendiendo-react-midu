import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

function useCartReducer() {
  const cartInitialState = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, dispatch] = useReducer(cartReducer, cartInitialState);

  useEffect(() => {
    saveToLocalStorage();
  }, [cart]);

  const saveToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      product: product,
    });
    saveToLocalStorage();
  };

  const removeFromCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      product: product,
    });
    saveToLocalStorage();
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
    saveToLocalStorage();
  };

  return { cart, addToCart, removeFromCart, clearCart };
}

export function CartProvider({ children }) {
  const { cart, addToCart, clearCart, removeFromCart } = useCartReducer();

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
