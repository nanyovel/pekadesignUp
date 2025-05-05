import styled from "styled-components";
// import ImgEstrella from "../../public/estrella.png";
import ImgEstrella from "./../../public/img/estrella.png";
import ImgEstrellaVacia from "../../public/img/estrellaEnNegro.png";
import db from "../firebase/firebaseConfig";

import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import { theme } from "../config/theme";
import { ES6AFormat } from "../libs/FechaFormat";

export default function Calificar({ qtyEstrella, tipo, setPuntuacionStar }) {
  // *************** CONFIG GENqtyERAL *******************

  let i = 0;
  const [arrayState, setArrayState] = useState([]);
  const textoMostrar = [
    "Muy Malo 😡",
    "Malo 😠",
    "Regular 😐",
    "Bueno 🙂",
    "Muy Bueno 😃",
  ];
  const [showText, setShowText] = useState("");
  const [calificacionMaster, setCalificacionMaster] = useState([
    true,
    true,
    true,
    true,
    true,
  ]);
  // Definir cantidad de estrellas
  useEffect(() => {
    // textoMostrar[numStar];
    actualizarCalificacion(qtyEstrella);
    setShowText(textoMostrar[qtyEstrella - 1]);
  }, [qtyEstrella]);
  // Alimentar array imprimir
  const actualizarCalificacion = (calificacion) => {
    setCalificacionMaster(
      calificacionMaster.map((star, index) => {
        if (index < calificacion) {
          return true;
        } else {
          return false;
        }
      })
    );
  };
  useEffect(() => {
    const nuevoArray = [];
    for (let i = 0; i < 5; i++) {
      nuevoArray.push(
        <CajaEstrellaDoble
          key={i}
          onMouseEnter={(e) => entrarRaton(e)}
          onMouseLeave={(e) => salirMouser(e)}
          data-index={i + 1}
        >
          <FotoEstrella
            src={ImgEstrellaVacia}
            className={`${tipo}`}
            data-index={i + 1}
            onClick={(e) => atualizarCalificacion(e)}
          />
          <FotoEstrella
            src={ImgEstrella}
            className={` amarilla ${
              calificacionMaster[i] == true ? " aparecer " : ""
            } `}
            data-index={i + 1}
            onClick={(e) => atualizarCalificacion(e)}
          />
        </CajaEstrellaDoble>
      );
    }
    setArrayState(nuevoArray);
  }, [calificacionMaster]);

  const atualizarCalificacion = async (e) => {
    const { index } = e.target.dataset;
    const numStar = Number(index);

    setPuntuacionStar(numStar);
  };
  const entrarRaton = (e) => {
    const { index } = e.target.dataset;
    const numStar = Number(index);
    console.log(textoMostrar[numStar - 1]);
    setShowText(textoMostrar[numStar - 1]);
    actualizarCalificacion(numStar);
  };
  const salirMouser = (e) => {
    const { index } = e.target.dataset;
    const numStar = Number(index);
    console.log(numStar);
    setShowText(textoMostrar[qtyEstrella - 1]);
    actualizarCalificacion(qtyEstrella);
  };
  return (
    <Container>
      <WrapEstrella>{arrayState}</WrapEstrella>
      <TextoRetornar>{showText}</TextoRetornar>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  background-color: ${theme.azul4Osc};
  padding: 5px;
`;
const WrapEstrella = styled.div`
  display: flex;
`;
const FotoEstrella = styled.img`
  /* width: 100%; */
  width: 40px;
  &.slider {
  }

  &.amarilla {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
  }
  &.none {
    display: none;
  }
  &.aparecer {
    display: inline;
  }
  &.vacia {
  }
`;
const TextoRetornar = styled.h2`
  color: white;
  font-size: 1rem;
  height: 1rem;
`;
const CajaEstrellaDoble = styled.div`
  /* height: 60px; */
  position: relative;
`;
