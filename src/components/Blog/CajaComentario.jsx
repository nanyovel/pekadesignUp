import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import Comment from "./Comment";
import { BtnGeneral, TextAreaGeneral } from "../ElementosGenerales";
import { useAuth } from "../../context/AuthContext";
import {
  fetchOnSnapLimitadoListen,
  obtenerDocPorIdFromIds,
} from "../../libs/FetchFirebase";
import { addDoc, collection, doc, Timestamp } from "firebase/firestore";
import db from "../../firebase/firebaseConfig";
import { CommentSchema } from "../../model/CommentSchema";
import { ES6AFormat, formatAES6 } from "../../libs/FechaFormat";
import { useNavigate } from "react-router";

export default function CajaComentario({ currentPost, userMaster }) {
  const usuario = useAuth().usuario;

  // ***********TRAEME LOS COMENTARIOS **************
  const [commentsDB, setCommentsDB] = useState([]);
  const condicionesDB = [
    {
      propiedad: "postId",
      operador: "==",
      valor: currentPost.id,
    },
  ];

  useEffect(() => {
    let unsubscribe;

    if (currentPost) {
      // Llamar a la función y obtener la función de limpieza
      unsubscribe = fetchOnSnapLimitadoListen(
        "comentariosPost",
        condicionesDB,
        setCommentsDB,
        25
      );
    }

    return () => {
      if (unsubscribe) {
        unsubscribe(); // Limpiar el escuchador
      }
    };
  }, [currentPost]);

  // ***********TRAEME LOS USUARIOS DE ESOS COMENTARIOS **************
  const [commentsParsed, setCommentsParsed] = useState([]);
  const [usuariosDB, setUsuariosDB] = useState([]);
  useEffect(() => {
    // console.log(commentsDB);
    (async () => {
      const idsUsuarios = commentsDB.map((comment, index) => {
        return comment.userId;
      });
      const usuariosDB = await obtenerDocPorIdFromIds("usuarios", idsUsuarios);
      setUsuariosDB(usuariosDB);
    })();
  }, [commentsDB]);

  useEffect(() => {
    // console.log(usuariosDB);
    if (usuariosDB.length > 0) {
      const commentParsedAux = commentsDB.map((commentsDB, index) => {
        const userCurrent = usuariosDB.find(
          (user) => user.id == commentsDB.userId
        );
        return {
          ...commentsDB,
          nombreUsuario: userCurrent.nombre,
          apellidoUsuario: userCurrent.apellido,
          urlFotoPerfil: userCurrent.urlFotoPerfil,
          fechaES6: formatAES6(commentsDB.createdAt),
        };
      });

      console.log(commentParsedAux);
      const prueba = commentParsedAux.sort(
        (a, b) => new Date(a.fechaES6) - new Date(b.fechaES6)
      );
      setCommentsParsed(prueba);
    }
  }, [usuariosDB]);

  // *********** CREAR NUEVO COMENTARIO **************
  const [inputValue, setInputValue] = useState("");

  const enviarComentario = async () => {
    // Si el usuario no esta loeguado
    if (!usuario) {
      return;
    }
    // si no se coloco comentario
    if (inputValue == "") {
      return;
    }

    // Si todo esta correcto
    try {
      const postCargar = {
        ...CommentSchema,
        userId: userMaster.id,
        postId: currentPost.id,
        createdAt: ES6AFormat(new Date()),
        timestamp: Timestamp.fromDate(new Date()),
        comment: inputValue,
        slugPost: currentPost.url,
      };
      await addDoc(collection(db, "comentariosPost"), postCargar);
      setInputValue("");
    } catch (error) {
      console.log(error);
    }
  };
  const detenerEscucha = () => {
    // fetchOnSnapLimitadoListen();
    setInputValue("");
  };
  const navigate = useNavigate();
  return (
    <Container>
      <Titulo>Comentarios</Titulo>
      <BoxComments>
        {commentsParsed.map((comment, index) => {
          return <Comment key={index} comment={comment} />;
        })}
        {commentsParsed.length == 0 && (
          <CajaSinCommentario>
            <TituloSinComentario> ~ Aun sin comentarios. ~</TituloSinComentario>
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
                <CajaBtnComment>
                  {/* <BtnSimple onClick={() => setInputValue("")}> */}
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
            Necesitas registrarte para poder comentar.
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
  @media screen and (max-width: 900px) {
    padding: 10px 20px;
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
  justify-content: end;
`;
const BtnSimple = styled(BtnGeneral)``;

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
