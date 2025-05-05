import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Img404 from "./../../public/img/error404.svg";
import Footer from "../components/Footer";

export default function Page404() {
  return (
    <>
      {/* <Header /> */}
      <Contenedor>
        <Titulo>Pagina no encontrada</Titulo>
        <Parrafo>
          La pagina solicitada no existe, favor verificar la direccion URL.
        </Parrafo>
        <Img src={Img404} />
      </Contenedor>
      {/* <Footer /> */}
    </>
  );
}
const Contenedor = styled.div`
  padding: 20px ${theme.config.paddingLateral};
`;
const Titulo = styled.h2`
  color: ${theme.secondary.coral};
  text-decoration: underline;
  font-size: 1.8rem;
`;
const Parrafo = styled.p`
  font-size: 1.3rem;
  padding-left: 15px;
  margin-top: 15px;
`;
const Img = styled.img`
  width: 450px;
  margin: auto;
`;
