import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";  // Importamos el CartProvider
import "./index.css";
import './styles/global.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>  {/* Envolvemos toda la aplicación con CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
