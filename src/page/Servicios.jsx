import React from "react";
import { TituloSeccion } from "../components/ElementosGenerales";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Theme, theme } from "../config/theme";

export default function Servicios() {
  return (
    <>
      <Header />
      <CajaPrincipal>
        <br />
        <br />
        <TituloSeccion>Servicios</TituloSeccion>
        <Subtitulo>Nuestros profesionales estan para apoyarte.</Subtitulo>
      </CajaPrincipal>
      <Footer />
    </>
  );
}
const CajaPrincipal = styled.div`
  padding-left: ${theme.config.paddingLateral};
  padding-right: ${theme.config.paddingLateral};
  margin-bottom: 60px;
  @media screen and (max-width: 1200px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media screen and (max-width: 620px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (max-width: 540px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
const TituloSimple = styled(TituloSeccion)`
  @media screen and (max-width: 540px) {
    font-size: 2rem;
  }
`;
const Subtitulo = styled.h3`
  color: ${theme.secondary.coral};
  color: ${Theme.primary.verdePeka};
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  width: 100%;
`;
