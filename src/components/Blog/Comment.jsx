import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { ES6AFormat, hoyManniana } from "../../libs/FechaFormat";

export default function Comment({ comment }) {
  console.log(comment);
  return (
    <Container>
      <Wrap>
        <CajaInternaComentario className="izq">
          <ImgAvatar src={comment.urlFotoPerfil} />
        </CajaInternaComentario>
        <CajaInternaComentario className="der">
          <NombreUser>{comment.nombreUsuario}</NombreUser>
          <Fecha>{hoyManniana(comment.createdAt, 3)}</Fecha>
          <Parrafo>{comment.comment}</Parrafo>
        </CajaInternaComentario>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
`;

const Wrap = styled.div`
  display: flex;
  gap: 25px;
`;

const CajaInternaComentario = styled.div`
  display: flex;
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
const NombreUser = styled.h3`
  color: ${theme.primary.neutral600};
  margin-bottom: 3px;
`;
const Fecha = styled.p`
  color: ${theme.primary.neutral550};
  margin-bottom: 5px;
`;
const Parrafo = styled.p``;
