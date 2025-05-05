import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { BtnGeneral } from "../../components/ElementosGenerales";
import Modal from "../../components/Modal";
import { Villas } from "../../DB/Villas";

export default function CopyDescription({ texto, resumido }) {
  // const texto = Villas[0].textoCopyDescription;

  const [hasModal, setHasModal] = useState(false);
  return (
    <Container>
      <CajaTextoView className={resumido ? "resumido" : ""}>
        {!resumido ? (
          texto.copyResumido
        ) : (
          <>
            {texto.copyResumido}
            <Vermas onClick={() => setHasModal(true)}>Ver mas.</Vermas>
          </>
        )}
      </CajaTextoView>
      {!resumido && (
        <BtnSimple onClick={() => setHasModal(true)}>Texto completo</BtnSimple>
      )}
      {hasModal && (
        <>
          <Modal titulo={texto.tituloPrincipal} setHasModal={setHasModal}>
            <Titulo>{texto.tituloPrincipal}</Titulo>
            <CajaTextoView className={resumido ? "resumido" : ""}>
              {texto.copyResumido}
            </CajaTextoView>
            <CajaTextoView>
              {texto.parrafos.map((parrafo, index) => {
                return (
                  <CajaParrafo>
                    <SubTitulo>{parrafo.titulo}</SubTitulo>
                    <Parrafo>{parrafo.texto}</Parrafo>
                  </CajaParrafo>
                );
              })}
            </CajaTextoView>
          </Modal>
        </>
      )}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  /* background-color: red; */
  /* min-height: 100px; */
`;
const CajaTextoView = styled.div`
  font-size: 1.1rem;
  color: ${theme.primary.neutral600};
  margin-bottom: 10px;
  padding: 8px;
  &.resumido {
    padding: 0;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Limita el texto a 4 líneas */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const BtnSimple = styled(BtnGeneral)``;
const CajaParrafo = styled.div`
  margin-bottom: 15px;
`;
const SubTitulo = styled.h2`
  /* margin-bottom: 20px; */
  font-size: 1.2rem;
`;
const Parrafo = styled.p`
  /* margin-bottom: 15px; */
`;
const Vermas = styled.span`
  color: ${theme.secondary.coral};
  margin-left: 10px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: ${theme.secondary.sandDark};
  }
`;
const Titulo = styled.h2``;
