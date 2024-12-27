// src/components/Loading.jsx

import React from "react";
import styled, { keyframes } from "styled-components";

// Animación para el ícono de carga
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Estilos del contenedor
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #fdfdfd, #e9e9e9);
  color: #333;
  font-family: "Arial", sans-serif;
  text-align: center;
`;

// Título principal
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #444;
  margin-bottom: 1rem;
`;

// Texto descriptivo
const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

// Animación del ícono de carga
const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top: 5px solid #007bff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Title>Bienvenido a Relatos de Papel</Title>
      <Subtitle>Realizado Por Gen Arce</Subtitle>
      <Loader /> {/* Ícono de carga animado */}
    </LoadingContainer>
  );
};

export default Loading;
