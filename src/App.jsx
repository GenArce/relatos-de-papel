// src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Loading from './pages/Loading';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import Perfil from './pages/Perfil';
import Categorias from './pages/Categorias';
import Checkout from './pages/Checkout';
import Libro from './pages/Libro';
import Cart from './components/Cart';
import './styles/background.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="background">
      <Router>
        <Cart />
        <Routes>
          {loading ? (
            <Route path="/" element={<Loading />} />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/libro/:id" element={<Libro />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
