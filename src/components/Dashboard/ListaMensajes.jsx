import React, { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { Link } from "react-router";
import { fetchGetDocs } from "../../libs/FetchFirebase";
import BotonQuery from "../BotonQuery";

export default function ListaMensajes({ setMensajesDB, mensajesDB }) {
  useEffect(() => {
    (async () => {
      const auxLista = await fetchGetDocs("mensajes", []);
      console.log(auxLista);
      setMensajesDB(auxLista);
    })();
  }, []);
  return (
    <CajaTabla>
      <BotonQuery mensajesDB={mensajesDB} />
      <Tabla>
        <thead>
          <Filas className="cabeza">
            <CeldaHead>N°</CeldaHead>
            <CeldaHead>Fecha</CeldaHead>
            <CeldaHead>Nombre</CeldaHead>
            <CeldaHead>Usuario</CeldaHead>
            <CeldaHead>Telefono</CeldaHead>
            <CeldaHead>Correo</CeldaHead>
            <CeldaHead>Mensaje</CeldaHead>
          </Filas>
        </thead>
        <tbody>
          {mensajesDB?.map((mensaje, index) => {
            return (
              <Filas key={index}>
                <CeldasBody>{index + 1}</CeldasBody>
                <CeldasBody>{mensaje.createdAt.slice(0, 10)}</CeldasBody>

                <CeldasBody>{mensaje.nombre}</CeldasBody>
                <CeldasBody>
                  <Enlaces to={"/admin/usuarios/" + mensaje.userId}>
                    {mensaje.userId}
                  </Enlaces>
                </CeldasBody>

                <CeldasBody>{mensaje.telefono}</CeldasBody>
                <CeldasBody>{mensaje.correo}</CeldasBody>
                <CeldasBody>{mensaje.mensaje}</CeldasBody>
              </Filas>
            );
          })}
        </tbody>
      </Tabla>
    </CajaTabla>
  );
}

const CajaTabla = styled.div`
  padding: 0 20px;
  overflow-x: scroll;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #19b4ef;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #19b4ef;
    border-radius: 7px;
  }
`;

const Tabla = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 95%;
  margin: auto;
  margin-bottom: 25px;
`;

const Filas = styled.tr`
  &.body {
    font-weight: normal;
    /* border-bottom: 1px solid #49444457; */
    border-bottom: 1px solid red;
    background-color: ${theme.azul5Osc};
  }

  &.cabeza {
    background-color: ${theme.azulOscuro1Sbetav};
  }
  color: ${theme.textoBlancoEdtem};
  &:hover {
    background-color: ${theme.azulOscuro1Sbetav};
  }
  &.modalH {
    background-color: ${theme.azulOscuro1Sbetav3};
    /* background-color: red; */
    /* width: 100%; */
  }
`;

const CeldaHead = styled.th`
  /* border-bottom: 1px solid #605e5e; */
  padding: 3px 7px;
  text-align: center;
  /* border: 1px solid #000; */
  border: 1px solid ${theme.azul1};

  font-size: 0.9rem;
`;
const CeldasBody = styled.td`
  font-size: 0.9rem;
  /* border: 1px solid black; */

  border: 1px solid ${theme.azul1};
  height: 25px;
  padding-left: 5px;
  padding-right: 5px;

  &.clicKeable {
    cursor: pointer;
    &:hover {
      /* text-decoration: underline; */
    }
  }

  text-align: center;
`;
const Enlaces = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
