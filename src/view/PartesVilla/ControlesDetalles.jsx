import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import {
  IconoComida,
  IconoFotos,
  IconoShare,
} from "../../components/ConjuntoIconos";
import Modal from "../../components/Modal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { PropsSchema } from "../../model/PropsSchema";
import BotonQuery from "../../components/BotonQuery";

export default function ControlesDetalles({
  hacerScroll,
  villaMaster,
  mostrarGaleria,
  setMostrarGaleria,
}) {
  const [listaImagenes, setListaImagenes] = useState([]);
  useEffect(() => {
    const imgLista = villaMaster.areas.flatMap((areas) => areas.fotos);
    const imgAux = [
      {
        texto: "Imagen destacada",
        url: villaMaster.urlFotoDestacada,
      },
      ...imgLista,
    ];
    const imgParsed = imgAux.map((img) => {
      return {
        original: img.url,
        thumbnail: img.url,
        description: img.texto,
      };
    });
    console.log(imgParsed);
    setListaImagenes(imgParsed);
  }, []);
  //

  return (
    <CajaControles>
      <CajitaDetalles>
        <IconoShare width="1.3rem" />
        <TituloFunt>Compartir</TituloFunt>
      </CajitaDetalles>
      <CajitaDetalles>
        <IconoFotos width="1.3rem" />
        <TituloFunt onClick={() => setMostrarGaleria(true)}>
          Ver mas fotos
        </TituloFunt>
      </CajitaDetalles>
      <CajitaDetalles>
        <IconoComida width="1.3rem" />
        <TituloFunt data-name="lugaresCercanos" onClick={(e) => hacerScroll(e)}>
          Lugares cercados
        </TituloFunt>
      </CajitaDetalles>

      {mostrarGaleria && (
        <Modal setHasModal={setMostrarGaleria} titulo={"Imagenes del lugar"}>
          <BotonQuery listaImagenes={listaImagenes} />
          <h1>jm</h1>
          <CajaGaleria>
            <ImageGallery items={listaImagenes} />
          </CajaGaleria>
        </Modal>
      )}
    </CajaControles>
  );
}
const CajaGaleria = styled.div`
  width: 80%;
  /* height: 70%; */
  /* border: 4px solid red; */
  margin: auto;
`;

const Container = styled.div``;

const CajaControles = styled.div`
  width: 100%;
  /* min-height: 50px; */
  display: flex;
  border-bottom: 1px solid ${theme.primary.neutral200};
  /* margin-bottom: 15px; */
`;
const CajitaDetalles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 5px;
`;
const TituloFunt = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const CajaAnfitrion = styled.div``;
const ImgAvatar = styled.img`
  border-radius: 50%;
  width: 60px;
  aspect-ratio: 1/1;
`;
const Titulo = styled.h3`
  font-size: 0.9rem;
  font-weight: 400;
`;
const NombreAnfitrion = styled.p``;
