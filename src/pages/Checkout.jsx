// src/pages/Checkout.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  // Calcular el total del carrito
  const calcularTotal = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  const handleCheckout = () => {
    // Al hacer el checkout, mostramos un mensaje, vaciamos el carrito y redirigimos
    alert("¡Pedido realizado con éxito!");
    clearCart(); // Vaciar el carrito
    navigate("/"); // Redirigir a la página principal
  };

  // Función para redirigir al carrito
  const goToCart = () => {
    navigate("/carrito"); // Redirige a la página del carrito
  };

  // Función para regresar al inicio
  const goHome = () => {
    navigate("/"); // Redirige al inicio
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Resumen de la compra</h2>
      {cart.length > 0 ? (
        <>
          <ul style={styles.cartList}>
            {cart.map((item) => (
              <li key={item.id} style={styles.cartItem}>
                {item.nombre} - {item.cantidad} x ${item.precio}
              </li>
            ))}
          </ul>
          <h3 style={styles.total}>Total: ${calcularTotal().toFixed(2)}</h3>
          <button onClick={handleCheckout} style={styles.checkoutButton}>
            Confirmar Compra
          </button>
          {/* Botón para ir al carrito */}
          <div style={styles.navigationContainer}>
            <button onClick={goToCart} style={styles.navButton}>
              Ir al Carrito
            </button>
          </div>
        </>
      ) : (
        <p style={styles.emptyCart}>El carrito está vacío. ¡Añade algunos productos primero!</p>
      )}

      {/* Botón para volver al inicio siempre visible */}
      <div style={styles.navigationContainer}>
        <button onClick={goHome} style={styles.navButton}>
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "white", // Fondo blanco para mayor claridad
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Sombra suave para darle profundidad
    borderRadius: "8px", // Bordes redondeados
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  cartList: {
    listStyleType: "none",
    padding: "0",
    marginBottom: "20px",
    textAlign: "left",
  },
  cartItem: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "10px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
  },
  total: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  checkoutButton: {
    backgroundColor: "#1E90FF", // Azul brillante
    color: "black", // Texto negro para mejor visibilidad
    fontSize: "1.1rem",
    padding: "12px 24px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "20px",
  },
  checkoutButtonHover: {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  },
  emptyCart: {
    fontSize: "1.2rem",
    color: "#777",
    marginTop: "20px",
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "center", // Centrado de botones
    marginTop: "20px",
    gap: "10px", // Espacio entre los botones
  },
  navButton: {
    backgroundColor: "#007bff", // Azul para los botones
    color: "black", // Texto negro para visibilidad
    fontSize: "1rem",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "45%", // Botones más delgados
    transition: "background-color 0.3s ease",
  },
  navButtonHover: {
    backgroundColor: "#0056b3",
  },
};

export default Checkout;
