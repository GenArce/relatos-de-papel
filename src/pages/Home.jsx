import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido a Relatos de Papel</h1>
      <p>Descubre nuestra colección de libros y encuentra tu próxima lectura favorita con Gen</p>
      <div className="home-links">
        <Link to="/productos" className="button">Ver Libros</Link>
        <Link to="/categorias" className="button">Explorar Categorías</Link>
        <Link to="/carrito" className="button">Ir al Carrito</Link>
        <Link to="/perfil" className="button">Ir a Perfil</Link>
      </div>
    </div>
  );
};

export default Home;
