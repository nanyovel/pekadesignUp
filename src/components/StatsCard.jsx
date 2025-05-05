import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";

export default function StatsCard({ icono, titulo, qty }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 500; // Duración en milisegundos
    const increment = qty / (duration / 16); // Aumento por frame (asumiendo 60fps)

    const interval = setInterval(() => {
      start += increment;
      if (start >= qty) {
        start = qty;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16); // Aproximadamente 60fps

    return () => clearInterval(interval);
  }, [qty]);
  return (
    <Container>
      <CajaInterna>
        <ImgIcon src={icono} />
      </CajaInterna>
      <CajaInterna className="qty">
        <Qty>{count}</Qty>
      </CajaInterna>
      <CajaInterna className="titulo">
        <Titulo>{titulo}</Titulo>
      </CajaInterna>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 200px;
  padding: 10px;
  @media screen and (max-width: 920px) {
    height: 140px;
  }
  @media screen and (max-width: 480px) {
    height: auto;
  }
`;
const CajaInterna = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  &.qty {
    height: auto;
  }
  @media screen and (max-width: 920px) {
    height: 60px;
  }
`;
const ImgIcon = styled.img`
  height: 75%;
  @media screen and (max-width: 920px) {
    /* height: 60%; */
  }
  @media screen and (max-width: 480px) {
    font-size: 2.4rem;
    height: 90%;
  }
`;

const Qty = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2.6rem;
  color: ${theme.secondary.coral};
  @media screen and (max-width: 920px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2.4rem;
  }
`;
const Titulo = styled.h2`
  font-size: 1.8rem;
  color: ${theme.primary.turquoise};
  @media screen and (max-width: 920px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
