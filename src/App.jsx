import "./styles.css";
import { useCart } from "./cart-context";

export function ProductListing() {
  return ["1", "2", "3", "4", "5", "6"].map((item) => (
    <div style={{ border: "solid black 1px", padding: "1rem", margin: "1rem" }}>
      <h2>Product {item}</h2>
      <button>Add to cart</button>
    </div>
  ));
}

export function Cart() {
  const { itemsInCart, setItemsInCart } = useCart();

  return <h1> Items in cart {itemsInCart} </h1>;
}

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
