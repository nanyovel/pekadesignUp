import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { IconoXCerrar } from "./ConjuntoIconos";

export default function Modal({ children, setHasModal, titulo }) {
  return (
    <Contenedor onClick={() => setHasModal(false)}>
      <CajaModal onClick={(e) => e.stopPropagation(e)}>
        <HeaderModal>
          <Titulo>{titulo}</Titulo>
          <CajaCerrar onClick={() => setHasModal(false)}>
            <IconoXCerrar width={"1.2rem"} color={theme.secondary.coral} />
          </CajaCerrar>
        </HeaderModal>
        <CajaContenido>{children}</CajaContenido>
      </CajaModal>
    </Contenedor>
  );
}
const Contenedor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000075;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
`;
const CajaModal = styled.div`
  width: 50%;
  height: 85vh;
  /* background-color: red; */
  box-shadow: ${theme.complementary.boxShadow};
  background-color: ${theme.primary.neutral200};
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid red;
  @media screen and (max-width: 850px) {
    width: 65%;
  }
  @media screen and (max-width: 650px) {
    width: 75%;
  }
  @media screen and (max-width: 520px) {
    width: 85%;
  }
  @media screen and (max-width: 450px) {
    width: 95%;
  }
`;
const HeaderModal = styled.div`
  /* height: 50px; */
  padding: 5px 0;
  background-color: ${theme.primary.neutral200};
  position: relative;
  background-color: ${theme.primary.neutral300};
  border-bottom: 1px solid ${theme.primary.neutral600};
`;
const Titulo = styled.h2`
  width: 100%;
  text-align: center;
  /* border: 1px solid red; */
  color: ${theme.secondary.coral};
`;
const CajaCerrar = styled.div`
  /* background-color: red; */
  border: 1px solid ${theme.secondary.coral};
  padding: 4px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  &:hover {
    background-color: ${theme.primary.neutral200};
  }
`;
const CajaContenido = styled.div`
  height: 90%;
  padding: 15px;
`;
