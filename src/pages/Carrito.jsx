import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext'; // Importamos el hook
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redirigir

const CarritoContainer = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Titulo = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Encabezado = styled.th`
  background-color: #f1f1f1;
  color: #555;
  font-weight: bold;
  padding: 15px;
  border: 1px solid #ddd;
  text-align: center;
`;

const Celda = styled.td`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  color: #333;
`;

const InputCantidad = styled.input`
  width: 50px;
  padding: 5px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const BotonAccion = styled.button`
  background-color: #ff5722;
  color: white;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;

  &:hover {
    background-color: #e64a19;
  }
`;

const Total = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
`;

const BtnPagar = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

const BtnVaciar = styled.button`
  background-color: #f44336;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;

  &:hover {
    background-color: #d32f2f;
  }
`;

const BtnRegresar = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #1976d2;
  }
`;

const Carrito = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart(); // Usamos el hook para obtener el carrito y las funciones
  const navigate = useNavigate(); // Usamos el hook useNavigate para redirigir

  // Calcular el total del carrito
  const calcularTotal = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) return; // No permitimos cantidades negativas o cero
    updateQuantity(id, newQuantity);
  };

  // Función para navegar a la página de inicio
  const irAInicio = () => {
    navigate('/'); // Redirige a la página de inicio (ajustar según tu ruta de inicio)
  };

  // Función para procesar la compra
  const procesarPago = () => {
    alert("¡Compra realizada con éxito!"); // Mostrar mensaje de éxito
    clearCart(); // Vaciar el carrito
    navigate("/"); // Redirigir al inicio
  };

  return (
    <CarritoContainer>
      <Titulo>Carrito de Compras</Titulo>
      {cart.length > 0 ? (
        <>
          <Tabla>
            <thead>
              <tr>
                <Encabezado>Producto</Encabezado>
                <Encabezado>Cantidad</Encabezado>
                <Encabezado>Precio</Encabezado>
                <Encabezado>Total</Encabezado>
                <Encabezado>Eliminar</Encabezado>
                <Encabezado>Modificar</Encabezado>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <Celda>{item.nombre}</Celda>
                  <Celda>
                    <InputCantidad
                      type="number"
                      value={item.cantidad}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value, 10))
                      }
                      min="1"
                    />
                  </Celda>
                  <Celda>{item.precio} $</Celda>
                  <Celda>{(item.precio * item.cantidad).toFixed(2)} $</Celda>
                  <Celda>
                    <BotonAccion onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </BotonAccion>
                  </Celda>
                  <Celda>
                    <BotonAccion onClick={() => handleQuantityChange(item.id, item.cantidad + 1)}>
                      +
                    </BotonAccion>
                    <BotonAccion onClick={() => handleQuantityChange(item.id, item.cantidad - 1)}>
                      -
                    </BotonAccion>
                  </Celda>
                </tr>
              ))}
            </tbody>
          </Tabla>
          <Total>Total: ${calcularTotal().toFixed(2)}</Total>
          <BtnPagar onClick={procesarPago}>Proceder al Pago</BtnPagar>
          <BtnVaciar onClick={clearCart}>Vaciar Carrito</BtnVaciar>
        </>
      ) : (
        <p>Tu carrito está vacío. ¡Agrega productos para comenzar!</p>
      )}
      <BtnRegresar onClick={irAInicio}>Regresar a Inicio</BtnRegresar>
    </CarritoContainer>
  );
};

export default Carrito;
