import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { BtnGeneral } from "./ElementosGenerales";

export default function AvisoTop({ ctaTexto, cta, mensaje }) {
  return (
    <Container>
      <CajaInterna>
        <Texto>{mensaje}</Texto>
        {ctaTexto ? (
          <BtnSimple onClick={() => cta()}>{ctaTexto}</BtnSimple>
        ) : null}
      </CajaInterna>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  background-color: ${theme.secondary.coral};
  min-height: 40px;
`;
const CajaInterna = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px 35px;
`;
const Texto = styled.p`
  color: white;
  font-weight: bold;
`;
const BtnSimple = styled(BtnGeneral)``;
