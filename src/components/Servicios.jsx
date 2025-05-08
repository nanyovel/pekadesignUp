import React, { useState } from "react";

import styled from "styled-components";
import { Theme, theme } from "../config/theme";
import { Link } from "react-router";
import { BtnGeneral } from "./ElementosGenerales";
import ImgSheetrock from "./../../public/img/servicios/paneles-de-yeso.png";
import ImgTienda from "./../../public/img/servicios/tienda.png";
import ImgPanel2 from "./../../public/img/servicios/paneles-de-yeso2.png";
import ImgCristales from "./../../public/img/servicios/limpieza-de-cristales.png";
import ImgPisos from "./../../public/img/servicios/piso.png";
import ImgEflor from "./../../public/img/servicios/eflorescencia.png";

const BotonGeneral = BtnGeneral;
// Prueba
export default function Servicios() {
  const Services = [
    {
      nombre: "Fachadas",
      textoCopy:
        "En Peka Design, entendemos que la fachada es mucho más que la cara visible de un edificio: es la primera impresión, el sello de identidad y el reflejo del diseño interior. Por eso, creamos fachadas únicas que combinan estética, innovación y funcionalidad, adaptadas a cada proyecto y necesidad.",
      icono: ImgTienda,
    },
    {
      nombre: "Sheetrock",
      textoCopy:
        "En Peka Design, entendemos que la fachada es mucho más que la cara visible de un edificio: es la primera impresión, el sello de identidad y el reflejo del diseño interior. Por eso, creamos fachadas únicas que combinan estética, innovación y funcionalidad, adaptadas a cada proyecto y necesidad.",
      icono: ImgSheetrock,
    },
    {
      nombre: "Fibrocemento",
      textoCopy:
        "En Peka Design, entendemos que la fachada es mucho más que la cara visible de un edificio: es la primera impresión, el sello de identidad y el reflejo del diseño interior. Por eso, creamos fachadas únicas que combinan estética, innovación y funcionalidad, adaptadas a cada proyecto y necesidad.",
      icono: ImgPanel2,
    },
    {
      nombre: "Cristales",
      textoCopy:
        "En Peka Design, entendemos que la fachada es mucho más que la cara visible de un edificio: es la primera impresión, el sello de identidad y el reflejo del diseño interior. Por eso, creamos fachadas únicas que combinan estética, innovación y funcionalidad, adaptadas a cada proyecto y necesidad.",
      icono: ImgCristales,
    },
    {
      nombre: "Pisos",
      textoCopy:
        "En Peka Design, entendemos que la fachada es mucho más que la cara visible de un edificio: es la primera impresión, el sello de identidad y el reflejo del diseño interior. Por eso, creamos fachadas únicas que combinan estética, innovación y funcionalidad, adaptadas a cada proyecto y necesidad.",
      icono: ImgPisos,
    },
    {
      nombre: "Revestimientos",
      textoCopy:
        "En Peka Design, entendemos que la fachada es mucho más que la cara visible de un edificio: es la primera impresión, el sello de identidad y el reflejo del diseño interior. Por eso, creamos fachadas únicas que combinan estética, innovación y funcionalidad, adaptadas a cada proyecto y necesidad.",
      icono: ImgEflor,
    },
  ];
  const [hasHover, setHasHover] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const growBox = (e) => {
    const { numero } = e.target.dataset;
    setHasHover(
      hasHover.map((opcion, index) => {
        return index == numero;
      })
    );
  };
  const lessBox = (e) => {
    const { numero } = e.target.dataset;
    setHasHover(
      hasHover.map((opcion, index) => {
        return false;
      })
    );
  };

  function separarTexto(texto, palabraClave) {
    const indiceInicio = texto.indexOf(palabraClave);

    // Si no encuentra la palabra clave, devuelve el texto completo como "antes"
    if (indiceInicio === -1) {
      return {
        antes: texto,
        palabra: "",
        despues: "",
      };
    }

    const indiceFinal = indiceInicio + palabraClave.length;

    const antes = texto.slice(0, indiceInicio);
    const palabra = texto.slice(indiceInicio, indiceFinal);
    const despues = texto.slice(indiceFinal);

    return { antes, palabra, despues };
  }
  const generaLinkWA = (servicio) => {
    const apiWhatsApp =
      "https://api.whatsapp.com/send?phone=+18099732098&text=";
    const textoSaludo =
      "Hola equipo de Sara Pet Shop, me interesa su servicio de ";
    return apiWhatsApp + encodeURIComponent(textoSaludo + servicio) + ".";
  };
  const serviciosParsed = Services.map((item) => {
    return {
      ...item,
      palabraClave: {
        antes: separarTexto(item.textoCopy, "mascota").antes,
        despues: separarTexto(item.textoCopy, "mascota").despues,
        palabra: separarTexto(item.textoCopy, "mascota").palabra,
      },
    };
  });

  return (
    <Container>
      {serviciosParsed.map((service, index) => {
        return (
          <Card
            key={index}
            data-numero={index}
            onMouseEnter={(e) => growBox(e)}
            onMouseLeave={(e) => lessBox(e)}
          >
            <CajaIcono>
              <Img src={service.icono} />
            </CajaIcono>
            <CajaTitulo>
              <Titulo>{service.nombre}</Titulo>
            </CajaTitulo>
            <CajaCopy>
              <TextoCopy className={hasHover[index] ? "grande" : ""}>
                {service.palabraClave.antes}
                <b>{service.palabraClave.palabra}</b>
                {service.palabraClave.despues}
              </TextoCopy>
            </CajaCopy>
            <CajaBoton>
              <Enlace2 target="_blank" to={generaLinkWA(service.nombre)}>
                Mas info
              </Enlace2>
            </CajaBoton>
          </Card>
        );
      })}
    </Container>
  );
}
const Enlace = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  padding: 0 30px;
  gap: 10px;
`;
const Card = styled.div`
  width: 20%;
  height: 300px;
  border: 1px solid black;
  border-radius: 5px;
  transition: ease box-shadow 0.2s;
  transition: ease all 0.2s;
  box-shadow: ${Theme.config.sombra};
  &:hover {
    cursor: pointer;
    box-shadow: ${Theme.config.sombra2};
    height: 350px;
    width: 28%;
  }
`;
const CajaIcono = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  padding: 5px;
`;
const Img = styled.img`
  height: 100%;
  box-shadow: ${Theme.config.sombra};
  border-radius: 50%;
  padding: 10px;
`;
const CajaTitulo = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${Theme.primary.grisPeka};
  background-color: black;
  display: flex;
  justify-content: center;
  color: white;
`;
const Titulo = styled.h2``;
const CajaCopy = styled.div`
  width: 100%;
  height: 40%;
  border-color: ${Theme.secondary.coralCalido};
`;
const TextoCopy = styled.p`
  height: 100%;
  width: 100%;
  padding: 6px;

  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  color: ${Theme.neutral.neutral300};
  color: white;
  &.grande {
    -webkit-line-clamp: initial;
    text-overflow: initial;
  }
`;
const CajaBoton = styled.div``;
const BtnSimple = styled(BotonGeneral)``;
const Enlace2 = styled(Enlace)`
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  border-radius: 5px;
  min-width: 100px;
  padding: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
  box-shadow: 3px 3px 3px -1px rgba(0, 0, 0, 0.43);
  display: inline-block;
  min-height: 30px;

  background-color: white;
  color: black;
  &:focus {
    background-color: ${Theme.primary.rojoCalido};
    color: black;
  }

  &:hover {
    background-color: #fff;
    background-color: ${Theme.secondary.azulBrillante};
    color: ${Theme.primary.rojoCalido};
  }
  &:active {
    background-color: ${Theme.secondary.coralCalido};
    color: black;
  }
`;
