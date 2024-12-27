import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>Relatos de Papel</div>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/categorias">Categorías</Link>
        <Link to="/perfil">Perfil</Link>
        <Link to="/carrito">Carrito</Link>
      </div>
    </nav>
  );
};

export default Navbar;
