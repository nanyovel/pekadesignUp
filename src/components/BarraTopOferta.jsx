import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";

export default function BarraTopOferta() {
  return (
    <Container>
      <Texto>Oferta para Villa Koi en todo el mes de Junio</Texto>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  background-color: ${theme.secondary.coral};
  min-height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Texto = styled.h2`
  color: white;
`;
