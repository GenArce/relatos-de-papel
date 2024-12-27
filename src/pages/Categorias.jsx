// src/pages/Categorias.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

// Mock de categorías
const categoriasMock = [
  { id: 1, nombre: 'Ficción', descripcion: 'Historias increíbles que despiertan la imaginación.' },
  { id: 2, nombre: 'Historia', descripcion: 'Conoce el pasado y aprende del mundo.' },
  { id: 3, nombre: 'Ciencia', descripcion: 'Explora el conocimiento y los avances científicos.' },
  { id: 4, nombre: 'Fantasía', descripcion: 'Sumérgete en mundos mágicos y épicos.' },
  { id: 5, nombre: 'Misterio', descripcion: 'Descubre secretos y resuelve enigmas.' },
];

const Categorias = () => {
  const navigate = useNavigate(); // Usamos el hook useNavigate

  // Función para navegar a la página de inicio
  const irAInicio = () => {
    navigate('/'); // Redirige a la página de inicio
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Categorías de Libros</h2>
      <ul style={styles.list}>
        {categoriasMock.map((categoria) => (
          <li key={categoria.id} style={styles.item}>
            <h3 style={styles.categoryTitle}>{categoria.nombre}</h3> {/* Nombre de la categoría */}
            <p style={styles.categoryDescription}>{categoria.descripcion}</p> {/* Descripción de la categoría */}
          </li>
        ))}
      </ul>
      {/* Botón para regresar al inicio */}
      <button onClick={irAInicio} style={styles.button}>
        Regresar a Inicio
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    background: 'linear-gradient(to bottom, #f9f9f9, #e0e0e0)',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  item: {
    background: '#fff',
    border: '2px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  categoryTitle: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  categoryDescription: {
    fontSize: '1rem',
    color: '#777',
    marginBottom: '15px',
  },
  button: {
    marginTop: '30px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Categorias;
