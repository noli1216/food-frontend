import { CartProvider } from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>,
);
