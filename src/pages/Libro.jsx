// src/pages/Libro.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

// Estilos usando styled-components
const LibroContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
  color: #000; /* Color de texto negro */
`;

const LibroImagen = styled.img`
  width: 50%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const LibroTitulo = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const LibroDescripcion = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const LibroPrecio = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const BtnAgregarCarrito = styled.button`
  background-color: #5a9;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 80%; /* Asegura el mismo tamaño */
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
  width: 80%; /* Asegura el mismo tamaño que el de agregar al carrito */

  &:hover {
    background-color: #d32f2f;
  }
`;

const Libro = () => {
  const { id } = useParams(); // Obtener el id del libro desde la URL
  const navigate = useNavigate();
  const [libro, setLibro] = useState(null);
  const { addToCart } = useCart(); // Función para agregar al carrito

  // Simulación de productos, similar al mock de productos en Productos.jsx
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

  // Buscar el libro correspondiente al id en los productos
  useEffect(() => {
    const libroEncontrado = mockProductos.find((producto) => producto.id === parseInt(id));
    setLibro(libroEncontrado);
  }, [id]);

  if (!libro) {
    return <p>Libro no encontrado...</p>;
  }

  return (
    <LibroContainer>
      <LibroTitulo>{libro.nombre}</LibroTitulo>
      <LibroImagen src={libro.imagen} alt={libro.nombre} />
      <LibroDescripcion>{libro.descripcion}</LibroDescripcion>
      <LibroPrecio>${libro.precio}</LibroPrecio>

      {/* Botón de agregar al carrito */}
      <BtnAgregarCarrito onClick={() => addToCart(libro)}>Agregar al Carrito</BtnAgregarCarrito>

      {/* Botón para regresar al home */}
      <BtnRegresar onClick={() => navigate('/productos')}>Regresar a Ver Libros</BtnRegresar>
    </LibroContainer>
  );
};

export default Libro;
