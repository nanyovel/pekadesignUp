import React from "react";
import styled from "styled-components";
import { Theme, theme } from "../config/theme";
import RostroMujer1 from "./../../public/img/rostroMujer1.jpg";
import RostroMujer2 from "./../../public/img/rostroMujer2.jpg";
import RostroHombre1 from "./../../public/img/rostroHombre1.jpg";
import EEUU from "./../../public/img/estados-unidos.png";
import ImgStar from "./../../public/img/estrella.png";
import { generatorIconFlagURL } from "./ListaPaises";

export default function CardResennia({
  filasDeDos,
  modal,
  review,
  detalleVilla,
}) {
  console.log(review);
  const qtyEstrella = [];
  let contador = 0;
  while (contador < review.puntuacion) {
    qtyEstrella.push("");
    contador++;
  }
  return (
    <CajaPersona
      className={`
      // ${filasDeDos ? " filasDeDos " : ""}
      // ${modal ? " modal " : ""}
      // ${detalleVilla ? " detalleVilla " : ""}

      `}
    >
      <CajaInterna className="persona">
        <CajaImg>
          <Img src={review.avatarUser} />
        </CajaImg>
        <CajaNombre>
          <Nombre>{review.nombre}</Nombre>
          <Nombre className="rol">{review.rol}</Nombre>
        </CajaNombre>
      </CajaInterna>
      <CajaInterna className="texto">
        <CajaSubtitulo>
          <Subtitulo>{review.texto}</Subtitulo>
        </CajaSubtitulo>
        <CajaPuntuacion>
          {qtyEstrella.map((star, index) => {
            return <ImgEstrella key={index} src={ImgStar} />;
          })}
        </CajaPuntuacion>
      </CajaInterna>
    </CajaPersona>
  );
}

const CajaPersona = styled.article`
  /* height: auto; */
  align-items: center;
  border: 1px solid ${theme.primary.turquoise};
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  max-width: calc(100% / 3 -20px);
  width: 30%;
  background-color: ${Theme.primary.azulPeka};
  color: white;
  /* margin-bottom: 20px; */
`;
const CajaInterna = styled.div`
  width: 100%;
  &.persona {
    text-align: center;
  }
  &.texto {
    /* height: 100%; */
    min-height: 100px;
    /* margin-top: 15px; */
  }
`;
const CajaImg = styled.div`
  /* height: 100px; */
`;
const Img = styled.img`
  border-radius: 50%;
  width: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  /* object-fit: cover; */
  box-shadow: ${Theme.config.sombra};
`;

const CajaNombre = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  width: 100%;
  overflow: hidden;
  text-align: center;
  align-items: center;
  gap: 5px;
`;
const Nombre = styled.h3`
  font-size: 1rem;
  font-weight: lighter;
  text-decoration: underline;
  width: 100%;
  text-align: start;
  &.rol {
    /* text-align: end; */
    margin-bottom: 8px;
    text-decoration: none;
    font-weight: normal;
    color: ${Theme.neutral.neutral800};
  }
`;
const CajaSubtitulo = styled.div`
  border: 1px solid blue;
  /* height: 80%; */
  align-content: center;
  margin-bottom: 8px;
  border: 1px solid ${theme.primary.neutral300};
  min-height: 50px;
  padding: 25px;
  /* border: 2px solid red; */
`;
const Subtitulo = styled.p``;
const CajaPuntuacion = styled.div`
  /* height: 20%; */
  /* margin-top: 20px; */
  /* border: 1px solid red; */
`;
const ImgEstrella = styled.img`
  width: 20px;
`;
