import React, { useState } from "react";
import styled from "styled-components";
import { Theme, theme } from "../config/theme";
import FormContact from "../components/FormContact";
import ImgCarta from "../../public/img/carta.png";
import ImgTypeWriter from "../../public/img/typewriter-1170657_1280.jpg";
import { TituloSeccion } from "../components/ElementosGenerales";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PageContact({ userMaster }) {
  return (
    <>
      <Header />
      <CajaPrincipal>
        <br />
        <br />
        <CajaTitulo>
          <TituloSimple>Envianos un mensaje</TituloSimple>
          <Subtitulo>
            Hablemos de tu próxima idea; diseñamos soluciones, empezando por
            escucharte.
          </Subtitulo>
        </CajaTitulo>
        <WrapContenido>
          <CajaImg>
            <Img src={ImgCarta} />
          </CajaImg>
          <FormContact userMaster={userMaster} />
        </WrapContenido>
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
const CajaTitulo = styled.div`
  width: 100%;
  padding-left: 60px;
  margin-bottom: 25px;
  @media screen and (max-width: 540px) {
    padding-top: 40px;
    padding-left: 15px;
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
const WrapContenido = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: ${Theme.config.sombra};
  padding: 35px;
  background-image: linear-gradient(
      to top,
      gray 36%,
      rgba(35, 129, 197, 0.8) 100%
    ),
    url("../../public/img/typewriter-1170657_1280.jpg");
  @media screen and (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;
const CajaImg = styled.div`
  width: 20%;
  margin-bottom: 24px;
  /* border: 1px solid blue; */
  @media screen and (max-width: 950px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Img = styled.img`
  width: 100%;
  @media screen and (max-width: 950px) {
    width: 40%;
  }
`;
