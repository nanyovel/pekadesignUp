import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { NavLink } from "react-router";

export default function CardCajaFinal({ blog }) {
  return (
    <Card>
      <Enlace to={"/blog/" + blog.url}>
        <CajaImgCard>
          <Img src={blog.imagenDestacada} />
        </CajaImgCard>
        <CajaDown>
          <CajaTexto>
            <Texto>{blog.titulo}</Texto>
          </CajaTexto>
          <CajaLeerMas>
            <TextLeerMas>Leer Mas...</TextLeerMas>
          </CajaLeerMas>
        </CajaDown>
      </Enlace>
    </Card>
  );
}
const Enlace = styled(NavLink)`
  width: 100%;
  height: 100%;
  text-decoration: none;
`;
const Card = styled.div`
  /* border: 1px solid ${theme.primary.neutral600}; */
  min-height: 350px;
  background-color: ${theme.primary.sand};
  transition: all ease 0.2s;
  box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.75);
  &:hover {
    box-shadow: ${theme.config.sombra};
  }
  @media screen and (max-width: 1200px) {
    flex-basis: calc(33.33% - 10px); /* 3 por línea */
  }
  @media screen and (max-width: 560px) {
    flex-basis: calc(50% - 10px); /* 3 por línea */
  }
  @media screen and (max-width: 450px) {
    flex-basis: 100%; /* 3 por línea */
  }
`;
const CajaImgCard = styled.div`
  width: 100%;
  /* margin-bottom: 15px; */
  height: 200px;
  @media screen and (max-width: 1200px) {
    height: 150px;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 1px solid ${theme.primary.neutral500};
`;
const CajaDown = styled.div`
  padding: 0 15px;
`;
const CajaTexto = styled.div`
  width: 100%;
`;
const Texto = styled.h2`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  /* text-align: center; */
  font-size: 1.2rem;
  font-weight: 700;
  color: ${theme.secondary.coral};
  &:hover {
    color: ${theme.secondary.rojoTerracota};
    /* cursor: pointer; */
  }
  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.1rem;
  }
`;

const CajaLeerMas = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const TextLeerMas = styled.p`
  width: 100%;
  /* text-align: center; */
  color: ${theme.secondary.azulLink};
  &:hover {
    color: ${theme.secondary.azulText};
  }
`;
