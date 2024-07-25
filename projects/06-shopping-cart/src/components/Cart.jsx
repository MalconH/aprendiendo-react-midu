import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css";
import { useCart } from "../hooks/useCart";

function CartItem({ title, price, thumbnail, quantity, addToCart, removeFromCart }) {
  return (
    <li className="product">
      <img src={thumbnail} alt={price} />
      <div>
        <h3>{title}</h3> - <span>${price}</span>
      </div>

      <footer>
        <p>Cantidad: {quantity}</p>
        <button onClick={addToCart}>+</button>
        <button onClick={removeFromCart}>X</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartId = useId();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <label className="cart-button" htmlFor={cartId}>
        <CartIcon />
      </label>
      <input type="checkbox" name="open-cart" id={cartId} hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </div>
  );
}
