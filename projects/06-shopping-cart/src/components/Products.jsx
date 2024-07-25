import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import "./products.css";
import { useCart } from "../hooks/useCart";

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div className="products">
      <ul>
        {products.map((product) => {
          const isProductInCart = cart.some((item) => item.id === product.id);

          return (
            <li className="product" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <span>{product.price}</span>
              </div>
              <button
                className={isProductInCart ? "remove-from-cart" : "add-to-cart"}
                onClick={() => (isProductInCart ? removeFromCart(product) : addToCart(product))}
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
