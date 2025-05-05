import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Galeria from "./PartesVilla/Galeria";
import DescripcionVilla from "./PartesVilla/DescripcionVilla";
import Amenidades from "./PartesVilla/Amenidades";
import ControlesDetalles from "./PartesVilla/ControlesDetalles";
import CopyDescription from "./PartesVilla/CopyDescription";
import Principal from "./PartesVilla/Principal";
import Location from "./PartesVilla/Location";
import { BtnGeneral } from "../components/ElementosGenerales";
import CajaResennias from "./PartesVilla/CajaResennias";
import LugaresCercanos from "./PartesVilla/LugaresCercanos";
import CajaAnfritrion from "./PartesVilla/CajaAnfritrion";
import { useParams } from "react-router";
import { Villas } from "../DB/Villas";
import BotonQuery from "../components/BotonQuery";
import { fetchGetDocs, obtenerDocPorId } from "../libs/FetchFirebase";
import ImageGallery from "react-image-gallery";
import useWindowWidth from "../components/useWindowWidth";

export default function DetalleVilla({ userMaster }) {
  const width = useWindowWidth();
  const [villaMaster, setVillaMaster] = useState({});
  const params = useParams();
  const docUser = params.id;
  const condicionesDB = [
    {
      propiedad: "url",
      operador: "==",
      valor: docUser,
    },
  ];
  useEffect(() => {
    (async () => {
      const propiedadesAux = await fetchGetDocs("propiedades", condicionesDB);

      if (propiedadesAux.length > 0) {
        console.log(propiedadesAux);
        setVillaMaster(propiedadesAux[0]);
        setDatosParsed(true);
      }
    })();
  }, []);
  // /***************RECURSOS GENERALES******* */
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [datosParsed, setDatosParsed] = useState(false);
  useEffect(() => {
    const villaBuscada = Villas.find((villa) => {
      if (docUser == villa.url) {
        return villa;
      }
    });
  }, [docUser]);
  const galeriaRef = useRef(null);
  const lugaresCercanosRef = useRef(null);
  const amenidadesRef = useRef(null);
  const resenniasRef = useRef(null);

  const hacerScroll = (e) => {
    const nameDataset = e.target.dataset.name;
    console.log("nameDataset");

    if (nameDataset == "galeria") {
      galeriaRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (nameDataset == "lugaresCercanos") {
      lugaresCercanosRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (nameDataset == "amenidades") {
      amenidadesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (nameDataset == "resennias") {
      resenniasRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        // Ajustar el scroll 100px hacia arriba después de desplazarse
        window.scrollBy({ top: -100, behavior: "smooth" });
      }, 500); // Ajusta este tiempo si es necesario
    }
  };

  const [listaImagenes, setListaImagenes] = useState([]);
  useEffect(() => {
    if (villaMaster?.areas) {
      console.log(villaMaster);
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
    }
  }, [villaMaster]);
  return (
    <>
      <Header noFixed={true} />
      {datosParsed && (
        <Container>
          <TituloVilla ref={galeriaRef}>{villaMaster.titulo}</TituloVilla>
          <Subtitulo>{villaMaster.subTitulo}</Subtitulo>
          {width > 550 && (
            <Galeria
              width={width}
              villaMaster={villaMaster}
              setMostrarGaleria={setMostrarGaleria}
            />
          )}
          {width <= 550 && (
            <CajaGaleria>
              <h1>aaaa</h1>
              {/* <ImageGallery items={listaImagenes} /> */}
            </CajaGaleria>
          )}
          <ControlesDetalles
            hacerScroll={hacerScroll}
            mostrarGaleria={mostrarGaleria}
            setMostrarGaleria={setMostrarGaleria}
            villaMaster={villaMaster}
          />
          <Seccion className="anchoCompleto sinBorde">
            <Subtitulo className=" pocoMargin">
              {villaMaster.Subtitulo}
            </Subtitulo>

            <DescripcionVilla
              width={width}
              hacerScroll={hacerScroll}
              villa={villaMaster}
            />
          </Seccion>
          <Seccion>
            <Subtitulo>Principal</Subtitulo>
            <Principal principal={villaMaster.principales} />
          </Seccion>
          <Seccion>
            <Subtitulo ref={lugaresCercanosRef}>Lugares cercanos</Subtitulo>
            <LugaresCercanos lugares={villaMaster.lugaresCercano} />
          </Seccion>
          <Seccion>
            <Subtitulo ref={amenidadesRef}>Amenidades</Subtitulo>
            <Amenidades amenidades={villaMaster.amenidades} />
          </Seccion>

          <Seccion>
            <Subtitulo>Detalles</Subtitulo>
            <CopyDescription texto={villaMaster.textoCopy} />
          </Seccion>
          <Seccion>
            <Subtitulo>Ubicacion</Subtitulo>
            <Location urlMapa={villaMaster.location} />
          </Seccion>
          <Seccion>
            <Subtitulo ref={resenniasRef}>Reseñas</Subtitulo>
            <CajaResennias villaMaster={villaMaster} userMaster={userMaster} />
          </Seccion>
          <Seccion className="anchoCompleto">
            <Subtitulo>Anfritrion</Subtitulo>
          </Seccion>
        </Container>
      )}
      <Footer />
    </>
  );
}
const CajaGaleria = styled.div`
  width: 100%;
  min-height: 200px;
  height: 350px;
  margin-bottom: 25px;
  height: auto;
`;

const Container = styled.div`
  position: relative;
  padding: 0 200px;
  margin-bottom: 300px;
  @media screen and (max-width: 1100px) {
    padding: 0 60px;
  }
  @media screen and (max-width: 960px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 750px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 650px) {
    padding: 0 10px;
  }
`;
const TituloVilla = styled.h1`
  padding: 20px;
  color: ${theme.primary.turquoise};
  font-size: 1.6rem;
  @media screen and (max-width: 650px) {
    padding: 5px;
  }
`;
const Seccion = styled.section`
  margin-bottom: 50px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${theme.primary.turquoise};
  border-bottom: 1px solid ${theme.secondary.coral};
  /* background-color: red; */
  width: 65%;
  &.sinBorde {
    border: none;
  }
  &.anchoCompleto {
    width: auto;
  }
  height: auto;
  @media screen and (max-width: 750px) {
    width: 90%;
  }
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;
const Subtitulo = styled.h2`
  color: ${theme.secondary.coral};
  border-bottom: 1px solid ${theme.secondary.coral};
  margin-bottom: 15px;
  &.pocoMargin {
    margin-bottom: 15px;
  }
`;

const BtnSimple = styled(BtnGeneral)``;
