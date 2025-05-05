import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";

import CardResennia from "../../components/CardResennia";
import {
  BtnGeneral,
  TextAreaGeneral,
} from "../../components/ElementosGenerales";
import Modal from "../../components/Modal";
import { Villas } from "../../DB/Villas";
import {
  fetchOnSnapLimitadoListen,
  obtenerDocPorIdFromIds,
} from "../../libs/FetchFirebase";
import { useAuth } from "../../context/AuthContext";
import { ES6AFormat, formatAES6 } from "../../libs/FechaFormat";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router";
import { ResenniaSchema } from "../../model/ResenniaSchema";
import Comment from "../../components/Blog/Comment";
import db from "../../firebase/firebaseConfig";
import Calificar from "../../components/Calificar";

export default function CajaResennias({ villaMaster, userMaster }) {
  const usuario = useAuth().usuario;
  // ***********TRAEME LOS COMENTARIOS **************
  const [resenniasDB, setResenniasDB] = useState([]);
  const condicionesDB = [
    {
      propiedad: "propiedadId",
      operador: "==",
      valor: villaMaster.id,
    },
  ];

  useEffect(() => {
    let unsubscribe;

    // Llamar a la función y obtener la función de limpieza
    unsubscribe = fetchOnSnapLimitadoListen(
      "resennias",
      condicionesDB,
      setResenniasDB,
      25
    );
    return () => {
      if (unsubscribe) {
        unsubscribe(); // Limpiar el escuchador
      }
    };
  }, [villaMaster]);

  // ***********TRAEME LOS USUARIOS DE ESOS COMENTARIOS **************
  const [resenniaParsed, setResenniaParsed] = useState([]);
  const [usuariosDB, setUsuariosDB] = useState([]);

  useEffect(() => {
    (async () => {
      const idsUsuarios = resenniasDB.map((review, index) => {
        return review.userId;
      });
      const usuariosDB = await obtenerDocPorIdFromIds("usuarios", idsUsuarios);
      setUsuariosDB(usuariosDB);
    })();
  }, [resenniasDB]);

  useEffect(() => {
    if (usuariosDB.length > 0) {
      const reviewParsedAux = resenniasDB.map((reviewDB, index) => {
        const userCurrent = usuariosDB.find(
          (user) => user.id == reviewDB.userId
        );
        return {
          ...reviewDB,
          nombre: userCurrent.nombre + " " + userCurrent.apellido,
          avatarUser: userCurrent.urlFotoPerfil,
          fechaES6: formatAES6(reviewDB.createdAt),
        };
      });

      const prueba = reviewParsedAux.sort(
        (a, b) => new Date(a.fechaES6) - new Date(b.fechaES6)
      );
      setResenniaParsed(prueba);
    }
  }, [usuariosDB]);

  // const resennias = Villas[0].resennias;
  // *********** CREAR NUEVO COMENTARIO **************
  const [inputValue, setInputValue] = useState("");
  const [puntuacionStar, setPuntuacionStar] = useState(0);
  const [mensajeE, setMensajeE] = useState("");
  const [hasError, setHasError] = useState(false);

  const enviarComentario = async () => {
    // Si el usuario no esta loeguado
    if (!usuario) {
      return;
    }
    // si no se coloco comentario
    if (inputValue == "") {
      setHasError(true);
      setMensajeE("Colocar texto.");
      return;
    }
    if (puntuacionStar == 0) {
      setHasError(true);
      setMensajeE("Marcar numero de estrellas.");
      console.log("colocar estrellas");
      return;
    }

    setHasError(false);
    setMensajeE("");

    // Si todo esta correcto
    try {
      const reviewCargar = {
        ...ResenniaSchema,
        userId: userMaster.id,
        nacionalidad: userMaster.nacionalidad,
        propiedadId: villaMaster.id,
        nombrePropiedad: villaMaster.titulo,
        createdAt: ES6AFormat(new Date()),
        timestamp: Timestamp.fromDate(new Date()),
        texto: inputValue,
        puntuacion: puntuacionStar,
        slugPropiedad: villaMaster.url,
      };
      await addDoc(collection(db, "resennias"), reviewCargar);
      setInputValue("");
      setPuntuacionStar(0);
    } catch (error) {
      console.log(error);
    }
  };
  const detenerEscucha = () => {
    setInputValue("");
    setHasError(false);
    setPuntuacionStar(0);
    setMensajeE("");
    // fetchOnSnapLimitadoListen();
  };
  const navigate = useNavigate();

  return (
    <Container>
      {/* <Titulo>Reseñas</Titulo> */}
      <BoxComments>
        {resenniaParsed.map((review, index) => {
          return (
            <CardResennia key={index} review={review} detalleVilla={true} />
          );
        })}
        {resenniaParsed.length == 0 && (
          <CajaSinCommentario>
            <TituloSinComentario> ~ Aun sin reseñas. ~</TituloSinComentario>
          </CajaSinCommentario>
        )}
      </BoxComments>
      {usuario && (
        <BoxNewComent>
          <Wrap>
            <CajaInternaComentario className="izq">
              <ImgAvatar src={userMaster.urlFotoPerfil} />
            </CajaInternaComentario>
            <CajaInternaComentario className="der">
              <CajaTextArea>
                <TextArea
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  placeholder="Escribe un comentario"
                />
                <CajaStar>
                  {hasError && <ParrafoErro>{mensajeE}</ParrafoErro>}
                  <Calificar
                    qtyEstrella={puntuacionStar}
                    tipo="slider"
                    setPuntuacionStar={setPuntuacionStar}
                  />
                </CajaStar>
                <CajaBtnComment>
                  <BtnSimple onClick={() => detenerEscucha()}>
                    Cancelar
                  </BtnSimple>
                  <BtnSimple onClick={() => enviarComentario()}>
                    Publicar
                  </BtnSimple>
                </CajaBtnComment>
              </CajaTextArea>
            </CajaInternaComentario>
          </Wrap>
        </BoxNewComent>
      )}
      {!usuario && (
        <CajaRegistrarse>
          <TextoRegistrate>
            Necesitas registrarte para poder comentar o dejar tu calificacion.
          </TextoRegistrate>
          <BtnSimple onClick={() => navigate("/registro")}>
            Registrarse
          </BtnSimple>
        </CajaRegistrarse>
      )}
    </Container>
  );
}
const Container = styled.div`
  padding: 10px 100px;
  border: 1px solid ${theme.primary.neutral550};
  border-radius: 10px;
  margin-bottom: 80px;
  @media screen and (max-width: 450px) {
    padding: 10px 40px;
  }
`;

const Titulo = styled.h2`
  color: ${theme.secondary.coral};
  font-size: 2.4rem;
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
`;

const BoxComments = styled.div`
  border: 1px solid ${theme.primary.neutral550};
  border-radius: 5px;
  width: 100%;
  margin-bottom: 35px;
`;

const BoxNewComent = styled.div``;

const Wrap = styled.div`
  display: flex;
  gap: 25px;
`;

const CajaInternaComentario = styled.div`
  display: flex;
  width: 100%;
  &.izq {
    width: 40px;
  }
  &.der {
    flex-direction: column;
  }
`;
const ImgAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
const CajaTextArea = styled.div`
  width: 80%;
  border: 1px solid black;
  /* height: 140px; */
  /* position: relative; */
  background-color: ${theme.complementary.midnightBlue};
`;
const TextArea = styled(TextAreaGeneral)`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  resize: none;
  border: none;
  min-height: 90px;
`;
const CajaBtnComment = styled.div`
  /* position: absolute; */
  height: 60px;
  width: 100%;
  display: flex;
  /* background-color: red; */
`;

const ParrafoErro = styled.p`
  color: red;
`;
const BtnSimple = styled(BtnGeneral)``;
const CajaStar = styled.div`
  width: 100%;
  border: 1px solid black;
  /* background-color: green; */
  /* height: 40px; */
`;
const CajaSinCommentario = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TituloSinComentario = styled.p`
  font-size: 1.2rem;
  color: ${theme.primary.neutral600};
`;

const CajaRegistrarse = styled.div``;
const TextoRegistrate = styled.h3`
  color: ${theme.secondary.azulText};
`;
