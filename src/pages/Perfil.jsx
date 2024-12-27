import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

// Mock de usuario
const mockUser = {
  nombre: "Gen Arce",
  correo: "gen.arce@gmail.com",
  direccion: "Ecuador - Master en Software",
  telefono: "+593994712535",
};

const Perfil = () => {
  const navigate = useNavigate(); // Usamos el hook useNavigate

  // Función para navegar a la página de inicio
  const irAInicio = () => {
    navigate('/'); // Redirige a la página de inicio
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Mi Perfil</h1>
        <div style={styles.userInfoContainer}>
          <h2 style={styles.subtitle}>Información del Usuario</h2>
          <div style={styles.infoGroup}>
            <p style={styles.infoText}><strong>Nombre:</strong> {mockUser.nombre}</p>
            <p style={styles.infoText}><strong>Correo:</strong> {mockUser.correo}</p>
            <p style={styles.infoText}><strong>Dirección:</strong> {mockUser.direccion}</p>
            <p style={styles.infoText}><strong>Teléfono:</strong> {mockUser.telefono}</p>
          </div>
        </div>
        <button onClick={irAInicio} style={styles.button}>Regresar a Inicio</button>
      </div>
    </div>
  );
};

// Estilos del componente
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    background: 'linear-gradient(to bottom, #f3f4f6, #e1e5eb)',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    width: '400px',
    maxWidth: '90%',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px',
  },
  subtitle: {
    fontSize: '1.8rem',
    color: '#555',
    marginBottom: '20px',
  },
  userInfoContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'left',
    marginBottom: '20px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
  },
  infoGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  infoText: {
    fontSize: '1.1rem',
    color: '#333',
    lineHeight: '1.5',
  },
  button: {
    marginTop: '20px',
    padding: '12px 24px',
    fontSize: '1.1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Perfil;
