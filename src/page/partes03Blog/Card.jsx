import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import Img1 from "./../../../public/img/girlSand.jpg";
import { BtnGeneral } from "../../components/ElementosGenerales";
import { NavLink } from "react-router";

export default function Card({ blog }) {
  return (
    <Enlace to={"/blog/" + blog.url}>
      <Container>
        <CajaInterna className="izq">
          <Img src={blog.imagenDestacada} />
        </CajaInterna>
        <CajaInterna className="der">
          <CajaTitulo>
            <Titulo>{blog.titulo}</Titulo>
          </CajaTitulo>

          <CajaParrafo>
            <Parrafo>{blog.parrafoPrincipalResumido}</Parrafo>
          </CajaParrafo>
          <CajaBtn>
            <BtnSimple>Ver mas</BtnSimple>
          </CajaBtn>
        </CajaInterna>
      </Container>
    </Enlace>
  );
}
const Enlace = styled(NavLink)`
  text-decoration: none;
  overflow: hidden;
  border: 1px solid ${theme.primary.neutral500};
  border-radius: 15px;
  transition: all ease 0.2s;
  &:hover {
    box-shadow: ${theme.config.sombra};
  }
`;

const Container = styled.div`
  height: 200px;

  overflow: hidden;
  display: flex;
  background-color: ${theme.primary.sand};
  @media screen and (max-width: 520px) {
    flex-direction: column;
    height: 350px;
  }
`;
const CajaInterna = styled.div`
  &.izq {
    width: 30%;
    height: 100%;
    @media screen and (max-width: 520px) {
      width: 100%;
      height: 50%;
    }
  }
  &.der {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    @media screen and (max-width: 520px) {
      width: 100%;
      height: 50%;
    }
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CajaTitulo = styled.div`
  min-height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  /* border: 1px solid blue; */
  @media screen and (max-width: 900px) {
    min-height: auto;
  }
`;
const Titulo = styled.h2`
  color: ${theme.secondary.coral};
  width: 90%;
  text-align: center;
  padding-top: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  /* border: 1px solid green; */
  @media screen and (max-width: 900px) {
    font-size: 1.1rem;
  }
`;
const CajaParrafo = styled.div`
  width: 100%;
  /* height: 90%; */
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 25px;
  /* border: 1px solid red; */
  @media screen and (max-width: 520px) {
    margin-bottom: 15px;
  }
`;
const Parrafo = styled.p`
  color: ${theme.primary.neutral600};
  font-size: 1.1rem;

  display: -webkit-box; /* Usado para el comportamiento flexible */
  -webkit-line-clamp: 3; /* Especifica el número máximo de líneas */
  -webkit-box-orient: vertical; /* Define la orientación del contenido */
  overflow: hidden; /* Oculta el contenido que excede el límite */
  text-overflow: ellipsis;
`;
const CajaBtn = styled.div`
  width: 100%;
  text-align: end;
  padding-right: 15px;
  /* padding: 10px; */
  @media screen and (max-width: 520px) {
    margin-bottom: 15px;
  }
`;
const BtnSimple = styled(BtnGeneral)``;
