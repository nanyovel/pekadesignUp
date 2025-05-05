import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";

import { BtnGeneral } from "../../components/ElementosGenerales";
import Modal from "../../components/Modal";
import { TipoLugaresCercanos } from "../../libs/Corporativo";

export default function LugaresCercanos({ lugares }) {
  const [hasModal, setHasModal] = useState(false);
  const [locationLink, setLocationLink] = useState("");
  const colocarMapa = (link) => {
    setLocationLink(link);
    setHasModal(true);
  };

  const [lugaresCercanos, setLugaresCercanos] = useState([]);
  useEffect(() => {
    const lugaresParsed = lugares.map((lugar, index) => {
      const lugarUp = TipoLugaresCercanos.find(
        (place) => place.code == lugar.code
      );

      return {
        ...lugar,
        icono: lugarUp.icono,
      };
    });
    setLugaresCercanos([...lugaresParsed]);
  }, [lugares]);
  return (
    <Container>
      {lugaresCercanos.map((lugar, index) => {
        return (
          <WrapPlace key={index}>
            <CajaTitulo>
              <Img className="titulo" src={lugar.icono} />

              <Titulo>{lugar.nombre}</Titulo>
            </CajaTitulo>
            {lugar.lugares.map((place, i) => {
              return (
                <Card key={i}>
                  <LogoImg>
                    <Img className="marca" src={place.logo} />
                    <NombreLugar>{place.nombre}</NombreLugar>
                  </LogoImg>
                  <TextoUbicacion>
                    <ParrafoDistancia>{place.distancia}</ParrafoDistancia>
                    <BtnSimple onClick={() => colocarMapa(place.comoLlegar)}>
                      Ver mapa
                    </BtnSimple>
                  </TextoUbicacion>
                </Card>
              );
            })}
          </WrapPlace>
        );
      })}

      {hasModal && (
        <Modal titulo={"Como llegar"} setHasModal={setHasModal}>
          <MapaGoogle src={locationLink}></MapaGoogle>
        </Modal>
      )}
    </Container>
  );
}
const Container = styled.div`
  /* background-color: red; */
  width: 100%;
  min-height: 200px;
  padding: 10px 25px;
  @media screen and (max-width: 660px) {
    padding: 10px 15px;
  }
  @media screen and (max-width: 460px) {
    padding: 10px 10px;
  }
`;
const WrapPlace = styled.div`
  /* margin-bottom: 10px; */
  margin-bottom: 30px;
  border-bottom: 1px solid ${theme.primary.neutral500};
`;
const CajaTitulo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Titulo = styled.h2`
  color: ${theme.primary.turquoise};
  text-decoration: underline;
  @media screen and (max-width: 660px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 460px) {
    font-size: 1rem;
  }
`;
const Card = styled.div`
  display: flex;
  margin-left: 45px;
  gap: 15px;
  border: 1px solid ${theme.primary.neutral200};
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  min-height: 40px;
  @media screen and (max-width: 660px) {
    margin-left: 25px;
  }
  @media screen and (max-width: 460px) {
    margin-left: 15px;
  }
`;
const LogoImg = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const TextoUbicacion = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  &.titulo {
    width: 40px;
    /* border: 1px solid red; */
    @media screen and (max-width: 660px) {
      width: 30px;
    }
    @media screen and (max-width: 460px) {
      width: 25px;
    }
    /* @media screen and (max-width: 560px) {
      width: 20px;
    } */
  }
  &.marca {
    width: 45px;
    @media screen and (max-width: 660px) {
      width: 40px;
    }
  }
`;
const NombreLugar = styled.h2`
  font-weight: 400;
  @media screen and (max-width: 660px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 460px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 560px) {
    font-size: 0.9rem;
  }
`;
const ParrafoDistancia = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  padding-right: 15px;
`;
const BtnSimple = styled(BtnGeneral)``;
const MapaGoogle = styled.iframe`
  width: 100%;
  height: 100%;
  border: 5px solid ${theme.secondary.coral};
`;
