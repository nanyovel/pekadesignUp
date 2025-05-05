import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import CajaNuevoBlog from "../../components/Blog/CajaNuevoBlog";

export default function Admin04Blog() {
  return (
    <Container>
      <CajaNuevoBlog />
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
