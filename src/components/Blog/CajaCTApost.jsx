import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { BtnGeneral } from "../ElementosGenerales";
import { useNavigate } from "react-router";

export default function CajaCTApost() {
  const navigate = useNavigate();
  return (
    <Container>
      <BtnSimple onClick={() => navigate("/propiedades")}>Reservar</BtnSimple>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
`;
const BtnSimple = styled(BtnGeneral)``;
