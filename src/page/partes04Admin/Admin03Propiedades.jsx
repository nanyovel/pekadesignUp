import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import CajaNuevaPropiedad from "../../components/CajaNuevaPropiedad";

export default function Admin03Propiedades() {
  return (
    <Container>
      <CajaNuevaPropiedad />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  gap: 15px;
  padding: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;
