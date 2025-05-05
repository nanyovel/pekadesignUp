import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { NavLink } from "react-router";
import { fetchGetDocs } from "../../libs/FetchFirebase";
import { useAuth } from "../../context/AuthContext";
import { generatorIconFlagURL } from "../../components/ListaPaises";

export default function Admin01ListaUser({ setDBUsuarios, dbUsuarios }) {
  const usuario = useAuth().usuario;
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(dbUsuarios);
  }, [dbUsuarios]);
  return (
    <Container>
      <>
        <CajaEncabezado>
          <TituloEncabezado>Lista de todos los usuarios</TituloEncabezado>
        </CajaEncabezado>

        <CajaTabla>
          <Tabla>
            <thead>
              <Filas className="cabeza">
                <CeldaHead>N°</CeldaHead>
                <CeldaHead>Nombre</CeldaHead>
                <CeldaHead>Apellido</CeldaHead>
                <CeldaHead>Pais</CeldaHead>
                <CeldaHead>Genero</CeldaHead>
                <CeldaHead>Correo*</CeldaHead>
              </Filas>
            </thead>
            <tbody>
              {userList.map((user, index) => {
                return (
                  <Filas key={index} className="body">
                    <CeldasBody>{index + 1}</CeldasBody>
                    <CeldasBody>{user.nombre}</CeldasBody>
                    <CeldasBody>{user.apellido}</CeldasBody>
                    <CeldasBody title={user.nacionalidad.pais}>
                      {" "}
                      <ImgBandera
                        src={generatorIconFlagURL(user.nacionalidad.siglas)}
                      />
                    </CeldasBody>
                    <CeldasBody>{user.genero}</CeldasBody>
                    <CeldasBody>
                      <Enlaces to={"/admin/usuarios/" + user.id}>
                        {user.correo}
                      </Enlaces>
                    </CeldasBody>
                  </Filas>
                );
              })}
            </tbody>
          </Tabla>
        </CajaTabla>
      </>
    </Container>
  );
}

const Container = styled.div``;

const CajaEncabezado = styled.div`
  padding: 15px;
`;
const TituloEncabezado = styled.h2`
  color: ${theme.secondary.coral};
  border-bottom: 2px solid;
`;

const CajaTabla = styled.div`
  overflow-x: scroll;
  padding: 0 10px;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  &::-webkit-scrollbar {
    height: 3px;
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

const ImgBandera = styled.img`
  width: 30px;
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
    border-bottom: 1px solid red;
    background-color: ${theme.primary.textoNoBlanco};
  }

  &.cabeza {
    background-color: ${theme.primary.turquoise};
    &:hover {
      background-color: ${theme.primary.turquoise};
      color: black;
    }
  }
  color: ${theme.textoBlancoEdtem};
  &:hover {
    background-color: ${theme.primary.neutral600};
    color: white;
  }
`;

const CeldaHead = styled.th`
  padding: 3px 7px;
  text-align: center;
  border: 1px solid ${theme.primary.neutral600};

  font-size: 0.9rem;
`;
const CeldasBody = styled.td`
  font-size: 0.9rem;

  border: 1px solid ${theme.primary.neutral600};
  height: 25px;
  padding-left: 5px;
  padding-right: 5px;

  text-align: center;
`;
const Enlaces = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
