import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";
import { useProducts } from "./hooks/useProducts";

function App() {
  const { filterProducts } = useFilters();
  const { products } = useProducts();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <main>
          <Products products={filteredProducts} />
        </main>
      </CartProvider>
    </>
  );
}

export default App;
