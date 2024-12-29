// src/pages/Productos.jsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

// Estilos usando styled-components
const ProductosContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
  color: #000;
`;

const ProductosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductoCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const ProductoImage = styled.img`
  width: 80%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductoNombre = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

const ProductoPrecio = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

const BtnAgregar = styled.button`
  background-color: #5a9;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 80%;
  margin-top: 10px;

  &:hover {
    background-color: #48a;
  }
`;

const BtnRegresar = styled.button`
  background-color: #f44336;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #d32f2f;
  }
`;

const Productos = () => {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const navigate = useNavigate();

  const mockProductos = [
    {
      id: 1,
      nombre: 'Libro de Ficción',
      precio: 10.0,
      descripcion: 'Un libro lleno de aventuras y fantasía.',
      imagen: 'https://via.placeholder.com/150?text=Ficción',
    },
    {
      id: 2,
      nombre: 'Historia del Mundo',
      precio: 15.0,
      descripcion: 'Explora los eventos históricos más importantes.',
      imagen: 'https://via.placeholder.com/150?text=Historia',
    },
    {
      id: 3,
      nombre: 'Ciencia Avanzada',
      precio: 20.0,
      descripcion: 'Un viaje fascinante al mundo de la ciencia.',
      imagen: 'https://via.placeholder.com/150?text=Ciencia',
    },
    {
      id: 4,
      nombre: 'Fantasía Épica',
      precio: 18.0,
      descripcion: 'Sumérgete en un mundo mágico y épico.',
      imagen: 'https://via.placeholder.com/150?text=Fantasía',
    },
    {
      id: 5,
      nombre: 'Misterios Ocultos',
      precio: 12.0,
      descripcion: 'Descubre los secretos mejor guardados.',
      imagen: 'https://via.placeholder.com/150?text=Misterio',
    },
  ];

  useEffect(() => {
    setProductos(mockProductos);
    setProductosFiltrados(mockProductos); 
  }, []);

  const handleBusqueda = (e) => {
    const query = e.target.value.toLowerCase();
    setBusqueda(query);

    const filtrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(query)
    );
    setProductosFiltrados(filtrados);
  };

  const handleAddToCart = (producto) => {
    addToCart(producto); 
  };

  const handleVerLibro = (id) => {
    navigate(`/libro/${id}`);
  };

  return (
    <ProductosContainer>
      <input
        type="text"
        placeholder="Buscar libros..."
        value={busqueda}
        onChange={handleBusqueda}
        style={{ marginBottom: '20px', padding: '10px', width: '80%' }}
      />
      <ProductosGrid>
        {productosFiltrados.map((producto) => (
          <ProductoCard key={producto.id} onClick={() => handleVerLibro(producto.id)}>
            <ProductoImage src={producto.imagen} alt={producto.nombre} />
            <ProductoNombre>{producto.nombre}</ProductoNombre>
            <ProductoPrecio>${producto.precio}</ProductoPrecio>
            <BtnAgregar onClick={(e) => {e.stopPropagation(); handleAddToCart(producto);}}>
              Agregar al carrito
            </BtnAgregar>
          </ProductoCard>
        ))}
      </ProductosGrid>
      <BtnRegresar onClick={() => navigate('/')}>Regresar al inicio</BtnRegresar>
    </ProductosContainer>
  );
};

export default Productos;
