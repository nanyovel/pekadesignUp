import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import ImgVilla1 from "./../assets/store/villa1.jpg";
import { BtnGeneral } from "./ElementosGenerales";

export default function CardPropiedades({ prop }) {
  return (
    <Container>
      <CajaInterna>
        <Img src={prop.urlFotoDestacada} />
        <BtnSimple>Reservar</BtnSimple>
      </CajaInterna>
      <CajaInterna className="titulo">
        <Titulo>
          <>{prop.titulo}</>
        </Titulo>
        <Parrafo>{prop.textoCopy.copyResumido}</Parrafo>
      </CajaInterna>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  border: 1px solid ${theme.primary.turquoise};
  border-radius: 5px;
  cursor: pointer;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  transition: all ease 0.2s;
  &:hover {
    -moz-box-box-shadow: 2px 4px 11px 0px ${theme.primary.turquoise};
    -webkit-box-shadow: 2px 4px 11px 0px ${theme.primary.turquoise};
    box-shadow: 2px 4px 11px 0px ${theme.primary.turquoise};
    border: 1px solid #423f3f9e;
  }
`;
const CajaInterna = styled.div`
  width: 100%;
  overflow: hidden;
  /* height: 80%; */
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  &.titulo {
    padding: 15px 30px;
    height: 20%;
    display: flex;
    justify-content: space-around;
  }
  background-color: ${theme.primary.turquoise};
`;
const Img = styled.img`
  height: 100%;
  /* width: 100%; */
  /* border: 2px solid blue; */
  object-position: 20% 50%;
  object-fit: cover;
`;
const Titulo = styled.h2`
  /* border: 1px solid red; */
  color: ${theme.primary.turquoise};
  color: white;
  height: 100%;
  text-align: center;
  vertical-align: center;
  align-content: center;
  font-size: 2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  /* display: inline; */
  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
  }
`;
const Parrafo = styled.p`
  color: ${theme.primary.neutralGray};
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Número de líneas antes de cortar */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Ancla = styled.a``;
const BtnSimple = styled(BtnGeneral)`
  position: absolute;
  background-color: ${theme.secondary.coral};
  bottom: 0;
  right: 0;
`;
