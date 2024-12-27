// src/components/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext"; // Usamos el hook del carrito
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Estilos para el carrito flotante
const CartIcon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  padding: 15px 20px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  &:hover {
    background-color: #0056b3;
  }

  span {
    margin-left: 8px;
    font-weight: bold;
  }
`;

const CartDropdown = styled.div`
  position: fixed;
  bottom: 70px;
  right: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 280px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 9999;
  font-family: Arial, sans-serif;
`;

const CartTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 1rem;
  color: #555;
  border-bottom: 1px solid #eee;

  button {
    background-color: #f44336;
    color: black; /* Cambié el color a negro para mayor contraste */
    font-size: 0.9rem;
    padding: 4px 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;

const CheckoutButton = styled.button`
  background-color: #28a745;
  color: black; /* Cambié el color del texto a negro para mayor contraste */
  font-size: 1rem;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 15px;

  &:hover {
    background-color: #218838;
  }
`;

const NavigationButton = styled.button`
  background-color:rgb(16, 124, 219);
  color: black; /* Cambié el color del texto a negro para mayor contraste */
  font-size: 1rem;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(25, 70, 104);
  }
`;

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Función para redirigir al checkout
  const goToCheckout = () => {
    navigate("/checkout"); // Redirige a la página de checkout
  };

  // Función para redirigir al carrito
  const goToCart = () => {
    navigate("/carrito"); // Redirige a la página del carrito
  };

  return (
    <div>
      <CartIcon onClick={() => goToCheckout()}>
        🛒
        <span>{cart.length}</span>
      </CartIcon>

      {/* Mostrar el carrito desplegable */}
      {cart.length > 0 && (
        <CartDropdown>
          <CartTitle>Carrito</CartTitle>
          <ul>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <span>{item.nombre} - {item.cantidad} x ${item.precio}</span>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </CartItem>
            ))}
          </ul>
          <CheckoutButton onClick={goToCheckout}>Ir al checkout</CheckoutButton>
          <NavigationButton onClick={goToCart}>Ver Carrito</NavigationButton>
        </CartDropdown>
      )}
    </div>
  );
};

export default Cart;
