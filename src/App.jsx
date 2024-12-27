// src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import Loading from './pages/Loading'; // Importamos la página de carga
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import Perfil from './pages/Perfil';
import Categorias from './pages/Categorias';
import Checkout from './pages/Checkout'; // Importamos la página de Checkout
import Cart from './components/Cart'; // Importamos el carrito flotante
import './styles/background.css'; // Importamos los estilos para el fondo

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Después de 5 segundos, la carga desaparece
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="background"> {/* Clase BEM para el fondo */}
      <Router>
        {/* Incluimos el carrito flotante en todas las páginas */}
        <Cart />
        <Routes>
          {loading ? (
            <Route path="/" element={<Loading />} /> // Página de carga
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/checkout" element={<Checkout />} /> {/* Ruta para el checkout */}
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;


