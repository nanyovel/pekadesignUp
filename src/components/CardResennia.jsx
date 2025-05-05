import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
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
      ${filasDeDos ? " filasDeDos " : ""}
      ${modal ? " modal " : ""}
      ${detalleVilla ? " detalleVilla " : ""}

      `}
    >
      <CajaInterna className="persona">
        <CajaImg>
          <Img src={review.avatarUser} />
        </CajaImg>
        <CajaNombre>
          <CajitaBandera>
            <Img
              className="bandera"
              src={generatorIconFlagURL(review.nacionalidad.siglas)}
            />
          </CajitaBandera>
          <Nombre>{review.nombre}</Nombre>
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
  height: auto;
  align-items: center;
  border: 1px solid ${theme.primary.turquoise};
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  max-width: 400px;
  background-color: ${theme.primary.turquoise};
  color: white;
  margin-bottom: 20px;
  &.filasDeDos {
    flex: 1 1 calc(50% - 10px);
    /* margin-bottom: 15px; */
  }
  &.modal {
    margin: auto;
    margin-bottom: 15px;
    width: 100%;
  }
  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1200px) {
    width: 30%;
    &.detalleVilla {
      width: 100%;
    }
  }
  @media screen and (max-width: 620px) {
    width: 40%;
    flex: 1 1 calc(50% - 15px);
  }
  @media screen and (max-width: 540px) {
    width: 80%;
    flex: 1 calc(80% - 15px);
  }
`;
const CajaInterna = styled.div`
  &.persona {
    width: 150px;
    text-align: center;
  }
  &.texto {
    height: 100%;
    min-height: 100px;
    min-width: 200px;
    margin-top: 15px;
    width: 100%;
  }
  &.detalleVilla {
    width: 100%;
  }
`;
const CajaImg = styled.div`
  height: 100px;
`;
const Img = styled.img`
  border-radius: 50%;
  width: 60%;
  aspect-ratio: 1/1;
  object-fit: cover;
  /* object-fit: cover; */
  &.bandera {
    width: 20px;
  }
`;
const CajitaBandera = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
`;
const CajaNombre = styled.div`
  display: flex;
  /* border: 1px solid red; */
  width: 150px;
  overflow: hidden;
  text-align: center;
  align-items: center;
  gap: 5px;
`;
const Nombre = styled.h3`
  font-size: 1rem;
  font-weight: lighter;
`;
const CajaSubtitulo = styled.div`
  /* border: 1px solid red; */
  height: 80%;
  align-content: center;
  margin-bottom: 15px;
  border: 1px solid ${theme.primary.neutral300};
  min-height: 50px;
  padding: 4px;
`;
const Subtitulo = styled.p``;
const CajaPuntuacion = styled.div`
  height: 20%;
  margin-top: 20px;
`;
const ImgEstrella = styled.img`
  width: 20px;
`;
