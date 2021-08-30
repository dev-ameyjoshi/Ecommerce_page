import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartContext } from "./cart-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartContext.Provider
      value={{ itemsInCart: 0, setItemsInCart: "bouhut badiya" }}
    >
      <App />
    </CartContext.Provider>
  </StrictMode>,

  rootElement
);
