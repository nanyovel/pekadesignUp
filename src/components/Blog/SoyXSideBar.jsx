import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { theme } from "../../config/theme";
import { BtnGeneral } from "../ElementosGenerales";

export default function SoyXSideBar({ single }) {
  return (
    <Container className={single ? "single" : ""}>
      <CajaFoto className={single ? "single" : ""}>
        <BackFoto />
        <Img src="https://a0.muscache.com/im/pictures/user/a177079f-9e70-4575-b089-b39a82ea87a2.jpg?im_w=240&im_format=avif" />
      </CajaFoto>
      <CajaCopy className={single ? "single" : ""}>
        <Parrafo>
          Hola, soy Kostia Kindelan, empresario cubano radicado en la República
          Dominicana.
        </Parrafo>
        <br />
        <Parrafo>
          Resido en Punta Cana y estoy encantado de poder brindarte
          asesoramiento sobre tu estadía en la zona. Si me lo permites, puedes
          contactarme y con gusto te recomendaré una de nuestras villas o
          propiedades.
        </Parrafo>
      </CajaCopy>
      <CajaRRSS className={single ? "single" : ""}>
        <Icono icon={faYoutube} />
        <Icono icon={faInstagram} />
        <Icono icon={faLinkedin} />
        <Icono icon={faFacebook} />
      </CajaRRSS>
    </Container>
  );
}
const Container = styled.div`
  /* background-color: black; */
  width: 100%;
  min-height: 400px;
  padding: 15px 5px;
  &.single {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CajaFoto = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  position: relative;
  &.single {
    width: 60%;
    @media screen and (max-width: 520px) {
      width: 80%;
    }
    @media screen and (max-width: 460px) {
      width: 100%;
    }
  }
`;
const BackFoto = styled.div`
  background-color: ${theme.primary.turquoise};
  width: 80%;
  height: 100%;
  position: absolute;
  z-index: 0;
  top: 0;
`;
const Img = styled.img`
  width: 100%;
  z-index: 1;
  position: relative;
  height: 80%;
  top: 20px;
  box-shadow: ${theme.config.sombra};
  border-radius: 2px;
`;
const CajaCopy = styled.div`
  margin-top: 45px;
  width: 100%;
  &.single {
    width: 60%;
    @media screen and (max-width: 520px) {
      width: 80%;
    }
    @media screen and (max-width: 460px) {
      width: 100%;
    }
  }
`;
const Parrafo = styled.p`
  width: 100%;
  /* color: ${theme.secondary.azulText}; */
  color: ${theme.secondary.coral};
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 1px;
`;

const CajaRRSS = styled.div`
  /* border: 2px solid black; */
  width: 100%;
  height: 60px;
  padding: 4px;
  display: flex;
  justify-content: center;
  gap: 30px;
  border: 1px solid black;
  align-items: center;
  @media screen and (max-width: 1450px) {
    gap: 10px;
  }
  @media screen and (max-width: 1250px) {
    gap: 5px;
  }
  &.single {
    width: 60%;
    @media screen and (max-width: 520px) {
      width: 80%;
    }
    @media screen and (max-width: 460px) {
      width: 100%;
    }
  }
`;

const Icono = styled(FontAwesomeIcon)`
  font-size: 1.4rem;

  color: ${theme.secondary.coral};
  cursor: pointer;
  border: 2px solid;
  padding: 5px;
  border-radius: 4px;
  transition: ease 0.4s;
  &:hover {
    background-color: ${theme.primary.neutral300};
    color: ${theme.primary.neutral600};
  }
`;
