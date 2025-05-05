// 28/12/24
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// export default function Carrusel2({ arrayImg }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayImg.length);
//     }, 5000); // Cambiar cada 5 segundos

//     return () => clearInterval(interval); // Limpiar intervalo al desmontar
//   }, []);

//   return (
//     <CarouselContainer>
//       {arrayImg.map((image, index) => (
//         <CarouselImage
//           key={index}
//           src={image}
//           alt={`Imagen ${index}`}
//           active={index === currentIndex}
//         />
//       ))}
//     </CarouselContainer>
//   );
// }

// // Estilo para el contenedor del carrusel y las imágenes
// const CarouselContainer = styled.div`
//   width: 100%;
//   height: 100vh;
//   position: relative;
//   overflow: hidden;
// `;

// const CarouselImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   position: absolute;
//   transition: opacity 1s ease-in-out;
//   opacity: ${(props) => (props.active ? 1 : 0)};
// `;

// const images = [
//   "url-de-tu-imagen-1.jpg",
//   "url-de-tu-imagen-2.jpg",
//   "url-de-tu-imagen-3.jpg",
//   // Agrega más imágenes aquí
// ];
