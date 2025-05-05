import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

import CardVillas from "./partes02Propiedades/CardVillas";
import { TituloH1 } from "../components/ElementosGenerales";
import { NavLink } from "react-router";
import { Villas } from "../DB/Villas";
import { fetchGetDocs } from "../libs/FetchFirebase";
import AnchoScreen from "../components/dev/AnchoScreen";

export default function ListaPropiedades() {
  const [listaPropiedades, setListaPropiedades] = useState([]);
  useEffect(() => {
    (async () => {
      const propiedadesAux = await fetchGetDocs("propiedades", []);
      console.log(propiedadesAux);
      setListaPropiedades(propiedadesAux);
    })();
  }, []);
  const ancho = window.screen.width;
  return (
    <>
      <Header />
      <AnchoScreen />
      {/* <AnchoScreen /> */}
      <Container>
        <Titulo>Propiedades</Titulo>
        <CajaVilla>
          {listaPropiedades.map((pro, index) => {
            return (
              <Enlace key={index} to={pro.url}>
                <CardVillas villa={pro} />
              </Enlace>
            );
          })}
        </CajaVilla>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  padding: 20px ${theme.config.paddingLateral};
  @media screen and (max-width: 850px) {
    padding: 20px 50px;
  }
  @media screen and (max-width: 430px) {
    padding: 20px 20px;
  }
`;
const CajaVilla = styled.div`
  margin-bottom: 25px;
  @media screen and (max-width: 850px) {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
`;
const Enlace = styled(NavLink)`
  margin-bottom: 25px;
  display: inline-block;
  color: auto;
  text-decoration: auto;
  width: 100%;
  &:active {
    color: auto;
  }
  &:target {
    color: auto;
  }
  @media screen and (max-width: 850px) {
    min-width: 60%;
  }
`;
const Titulo = styled(TituloH1)``;
