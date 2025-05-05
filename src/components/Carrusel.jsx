import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Carrusel({ arrayImg }) {
  useEffect(() => {
    let ancho = 0;
    let contador = 1;
    const interval = setInterval(() => {
      if (contador == arrayImg.length) {
        contador = 1;
        ancho = 0;
      }
      ancho = 100 * contador;
      contador++;

      setBoxStyle({
        ...boxStyle,
        transform: `translate(-${ancho}vw`,
      });
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const [boxStyle, setBoxStyle] = useState({
    // transform: "translate(-100vw)",
  });
  return (
    <CarouselContainer>
      <CarouselWrapper style={boxStyle}>
        {arrayImg.map((image, index) => (
          <CarouselImage key={index} src={image} alt={`Imagen ${index}`} />
        ))}
      </CarouselWrapper>
    </CarouselContainer>
  );
}

// Contenedor del carrusel y las imágenes
const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
  height: 100%;
`;

const CarouselImage = styled.img`
  flex-shrink: 0;
  display: inline;
  width: 100vw;
  display: block;
  height: 100%;
  /* object-fit: cover; */
`;
