import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import ImgWork from "./../../../public/icon/trabajo.png";
import ImgReloj from "./../../../public/icon/reloj.png";
import ImgReloj2 from "./../../../public/icon/historia.png";
import ImgIdioma from "./../../../public/icon/idioma.png";
import ImgCuba from "./../../../public/icon/cuba.png";
import ImgUbicacion from "./../../../public/icon/ubicacion.png";
import ImgColegio from "./../../../public/icon/colegio.png";
import ImgCorazon from "./../../../public/icon/corazon.png";
import { BtnGeneral } from "../../components/ElementosGenerales";
import Modal from "../../components/Modal";
import { Villas } from "../../DB/Villas";

export default function CajaAnfritrion({ anfitrion }) {
  const [hasModal, setHasModal] = useState(false);
  // const [anfitrion, setAnfitrion] = useState(Villas[0].anfitrion);
  return (
    <Container>
      <WrapPerfil>
        <CajaFoto>
          <Img src="https://a0.muscache.com/im/pictures/user/a177079f-9e70-4575-b089-b39a82ea87a2.jpg?im_w=240&im_format=avif" />
        </CajaFoto>
        <CajaNombre>
          <Nombre>{anfitrion.nombre}</Nombre>
        </CajaNombre>
        <CajaPresentacion>
          <ParrafoPresentacion>{anfitrion.textoBienvenida}</ParrafoPresentacion>
        </CajaPresentacion>
      </WrapPerfil>
      <ContenedorAcerca>
        <TituloAcerca>Sobre Kostia</TituloAcerca>
        <CajaDetalles>
          <CajaInterna className="izq">
            <Lista>
              <Item>
                <CajaTituloItem>
                  <Icono src={ImgWork} />
                  <TituloItem className="titulo">Profesion:</TituloItem>
                </CajaTituloItem>
                <TituloItem>{anfitrion.profesion}</TituloItem>
              </Item>
              <Item>
                <CajaTituloItem>
                  <Icono src={ImgReloj} />
                  <TituloItem className="titulo">Edad:</TituloItem>
                </CajaTituloItem>
                <TituloItem>{anfitrion.edad}</TituloItem>
              </Item>
              <Item>
                <CajaTituloItem>
                  <Icono src={ImgReloj2} />
                  <TituloItem className="titulo">Pasa tiempo:</TituloItem>
                </CajaTituloItem>
                <TituloItem>{anfitrion.pasaTiempo}</TituloItem>
              </Item>
              <Item>
                <CajaTituloItem>
                  <Icono src={ImgIdioma} />
                  <TituloItem className="titulo">Idiomas:</TituloItem>
                </CajaTituloItem>
                <TituloItem>{anfitrion.idiomas}</TituloItem>
              </Item>
            </Lista>
          </CajaInterna>
          <CajaInterna className="der">
            <Item>
              <CajaTituloItem>
                <Icono src={ImgCuba} />
                <TituloItem className="titulo">Nacionalidad:</TituloItem>
              </CajaTituloItem>
              <TituloItem>{anfitrion.nacionalidad}</TituloItem>
            </Item>
            <Item>
              <CajaTituloItem>
                <Icono src={ImgUbicacion} />
                <TituloItem className="titulo">Recidencia:</TituloItem>
              </CajaTituloItem>
              <TituloItem>{anfitrion.residencia}</TituloItem>
            </Item>
            <Item>
              <CajaTituloItem>
                <Icono src={ImgColegio} />
                <TituloItem className="titulo">Estudio en:</TituloItem>
              </CajaTituloItem>
              <TituloItem>{anfitrion.estudioEn}</TituloItem>
            </Item>
            <Item className="column">
              <CajaTituloItem className="column">
                <Icono src={ImgCorazon} />
                <TituloItem className="titulo">Filosofia de vida:</TituloItem>
              </CajaTituloItem>
              <TituloItem className="detalle">
                {anfitrion.filosofiaDeVida}
              </TituloItem>
            </Item>
          </CajaInterna>
        </CajaDetalles>
      </ContenedorAcerca>
      <ContenedorContact>
        <TituloAcerca>Contactar a Kostia</TituloAcerca>
        <CajaDetalles>
          <BtnSimple onClick={() => setHasModal(true)}>
            Contacto y RRSS
          </BtnSimple>
          {hasModal && (
            <Modal
              titulo={"Conctato y redes sociales de Kostia"}
              setHasModal={setHasModal}
            >
              <WrapModal>
                <TextoModal>
                  Para visualizar los contactos y redes sociales de Kostia
                  Kindelan, primero debes iniciar sesion o registrarte.
                </TextoModal>
                <BtnSimple>Iniciar sesion</BtnSimple>
                <BtnSimple>Registrarse</BtnSimple>
              </WrapModal>
            </Modal>
          )}
        </CajaDetalles>
      </ContenedorContact>
    </Container>
  );
}
const BtnSimple = styled(BtnGeneral)`
  height: 30px;
`;
const WrapModal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
  /* gap: 15px; */
`;
const TextoModal = styled.h2`
  margin-bottom: 20px;
  color: ${theme.secondary.coral};
`;
const Container = styled.div`
  width: 80%;
  margin: auto;
  min-height: 100px;
  /* background-color: red; */
  background-color: ${theme.primary.sand};
  border-radius: 10px;
  box-shadow: ${theme.config.sombra};
  padding: 15px;
`;
const WrapPerfil = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;
const CajaFoto = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;
const Img = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 5px solid ${theme.primary.turquoise};
  box-shadow: ${theme.config.sombra};
`;
const CajaNombre = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const Nombre = styled.h2`
  width: 100%;
  text-align: center;
  /* background-color: blue; */
  color: ${theme.primary.neutral600};
  font-weight: 400;
  /* border-bottom: 1px solid; */
  text-decoration: underline;
`;
const CajaPresentacion = styled.div`
  display: flex;
  justify-content: center;
`;
const ParrafoPresentacion = styled.p`
  text-align: center;
  width: 40%;
  font-size: 1.2rem;
  color: ${theme.primary.neutral600};
`;
const ContenedorAcerca = styled.div`
  width: 100%;
  min-height: 100px;
  margin-bottom: 25px;
  /* background-color: red; */
  /* padding: 15px; */
`;
const TituloAcerca = styled.h2`
  width: 100%;
  text-align: start;
  /* padding-left: ; */
  font-size: 1.8rem;
  color: ${theme.primary.turquoise};
  border-bottom: 4px solid;
  margin-bottom: 15px;
`;
const CajaDetalles = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const CajaInterna = styled.div`
  /* width: calc(100% / 2-20px); */
  width: 48%;
  /* border: 1px solid red; */
  padding: 10px 15px;
  box-shadow: ${theme.config.sombra};
  border-radius: 10px;
  &.izq {
  }
  &.der {
  }
`;
const Lista = styled.ul`
  list-style: none;
`;
const Item = styled.li`
  border-bottom: 1px solid ${theme.primary.neutral600};
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.column {
    flex-direction: column;
  }
`;
const CajaTituloItem = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  &.column {
    width: 100%;
    align-items: center;
    justify-content: start;
    /* background-color: red; */
  }
`;
const Icono = styled.img`
  width: 40px;
  margin-right: 15px;
  margin-bottom: 4px;
  margin-top: 4px;
`;
const TituloItem = styled.p`
  font-size: 1.1rem;
  color: ${theme.primary.neutral600};
  font-weight: 400;
  &.detalle {
    font-size: 0.9rem;
    /* font-size: ; */
    /* font-weight: 700; */
  }
`;
const ContenedorContact = styled.div`
  width: 100%;
  min-height: 100px;
  /* background-color: red; */
  /* padding: 15px; */
`;
