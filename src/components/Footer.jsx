import React from "react";
import styled from "styled-components";
import { Theme, theme } from "../config/theme";
import ImgLogo from "./../../public/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <ContenedorFooter>
      <CajaInterna className="start">
        <CajitaInterna className="start">
          <CajaTituloLogo>
            <Enlaces to={"/"}>
              <Img src={ImgLogo} />
            </Enlaces>
            <TituloLogo>
              Peka
              <Span>Design</Span>
            </TituloLogo>
          </CajaTituloLogo>
          <Subtitulo>Diseños acusticos...</Subtitulo>
          <CajaRRSS>
            <Icono icon={faYoutube} />
            <Icono icon={faInstagram} />
            <Icono icon={faLinkedin} />
            <Icono icon={faFacebook} />
          </CajaRRSS>
        </CajitaInterna>
      </CajaInterna>
      <CajaInterna className="center">
        <CajitaInterna className="center">
          <TituloUbicaciones>
            <Enlaces to={"/"}>Home</Enlaces>
          </TituloUbicaciones>

          <TituloUbicaciones>
            <Enlaces to={"/nosotros"}>Sobre nosotros</Enlaces>
          </TituloUbicaciones>
          <TituloUbicaciones>
            <Enlaces to={"/contactos"}>Contactos</Enlaces>
          </TituloUbicaciones>
        </CajitaInterna>
      </CajaInterna>
      <CajaInterna>
        <MapaGoogle src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8774143012724!2d-69.9805887250378!3d18.48921108259831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8a15284e4fe9%3A0x76f4b20a4f16a7dd!2sCarrefour%20Hipermercado!5e0!3m2!1ses-419!2sdo!4v1746667856151!5m2!1ses-419!2sdo"></MapaGoogle>
      </CajaInterna>
    </ContenedorFooter>
  );
}
const Enlaces = styled(NavLink)`
  /* color: ${theme.primary.neutral600}; */
  color: white;
  display: block;
  position: relative;
  transition: color 25ms;
  &:hover {
    color: white;
    /* border-bottom: 3px solid; */
  }

  text-decoration: none;
  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
  }
`;
const ContenedorFooter = styled.footer`
  height: 500px;
  background-color: ${theme.primary.neutral600};
  width: 100vw;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
    padding: 20px 0;
  }
`;
const CajaInterna = styled.div`
  /* border: 1px solid red; */
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-left: 1px solid ${theme.primary.neutral300}; */
  box-shadow: 11px -1px -1px 5px #eeeeee5c;
  -webkit-box-shadow: -4px 0px 10px -3px #eeeeee5c;
  -moz-box-shadow: -4px 0px 10px -3px #eeeeee5c;
  box-shadow: -4px 0px 10px -3px #eeeeee5c;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const CajitaInterna = styled.div`
  width: 80%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  &.start {
    min-height: 40px;
    align-items: center;
  }

  &.center {
    /* border: 1px solid red; */
    gap: 15px;
    height: 80%;
    padding: 5px;
  }
`;

// ****** CAJA START ******
const CajaTituloLogo = styled.div`
  display: flex;
  /* min-height: 400px; */
  /* border: 2px solid blue; */
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;
const Img = styled.img`
  width: 60px;
  margin-right: 10px;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    width: 40px;
  }
`;
const TituloLogo = styled.div`
  font-size: 3rem;
  color: ${theme.primary.turquoise};
  padding: 0;
  font-weight: lighter;
  @media screen and (max-width: 900px) {
    font-size: 2.5rem;
  }
`;
const Span = styled.span`
  color: ${theme.primary.neutral300};
`;

const Subtitulo = styled.h2`
  color: ${Theme.secondary.turquesaBrillante};
  color: white;
  margin-bottom: 20px;
  @media screen and (max-width: 900px) {
    font-size: 1.1rem;
  }
`;
const CajaRRSS = styled.div`
  /* border: 2px solid black; */
  width: 100%;
  height: 60px;
  padding: 4px;
  display: flex;
  justify-content: center;
  gap: 30px;
  @media screen and (max-width: 900px) {
    gap: 20px;
  }
  @media screen and (max-width: 800px) {
    gap: 10px;
  }
  @media screen and (max-width: 700px) {
    gap: 4px;
  }
`;
const Icono = styled(FontAwesomeIcon)`
  font-size: 2rem;

  color: ${Theme.secondary.azulBrillante};
  cursor: pointer;
  border: 2px solid;
  padding: 5px;
  border-radius: 4px;
  transition: ease 0.4s;
  &:hover {
    background-color: ${Theme.secondary.azulBrillante};
    color: ${theme.primary.neutral600};
    color: white;
  }
  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

// ****** CAJA CENTER ******
const TituloUbicaciones = styled.h2`
  color: ${theme.primary.neutral300};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const MapaGoogle = styled.iframe`
  width: 95%;
  display: block;
  margin: auto;
  height: 500px;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.43);
`;
