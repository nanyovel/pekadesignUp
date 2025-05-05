import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { generatorIconFlagURL } from "../../components/ListaPaises";
import { CalcularEdad } from "../../libs/FechaFormat";
import {
  BtnGeneral,
  DataList,
  InputGeneral,
  OpciongGneral,
  TextAreaGeneral,
} from "../../components/ElementosGenerales";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ImgUserAdmin from "./../../../public/icon/userAdmin.png";

export default function Admin01ViewPerfilDash({ dbUsuarios }) {
  const docUser = useParams().id;
  const [userBuscado, setUserBuscado] = useState(null);

  useEffect(() => {
    const userFind = dbUsuarios.find((user, index) => user.id == docUser);
    if (userFind) {
      console.log("usuario:", userFind);
      setUserBuscado(userFind);
    }
  }, [dbUsuarios]);

  const handleRedireccion = (ruta) => {
    if (ruta) {
      // Verificar si la ruta ya tiene un esquema válido (http o https)
      const url =
        ruta.startsWith("http://") || ruta.startsWith("https://")
          ? ruta
          : `https://${ruta}`;

      // Abrir la URL en una nueva pestaña
      window.open(url, "_blank");
    }
  };
  return (
    userBuscado && (
      <Container>
        <CajaEncabezado>
          <TituloEncabezado>Detalles de {userBuscado.nombre}</TituloEncabezado>
          <TituloEncabezado className="sub">Usuario admi</TituloEncabezado>
          <ImgBandera src={ImgUserAdmin} />
        </CajaEncabezado>
        {/* <BotonQuery userBuscado={userBuscado} /> */}
        <CajaContenido>
          <CajaInterna className="izq">
            <CajaFotoPerfil>
              {userBuscado.urlFotoPerfil ? (
                <FotoPerfil src={userBuscado.urlFotoPerfil} />
              ) : (
                <FotoPerfil
                  src={
                    userBuscado.genero == "Femenino"
                      ? theme.config.userFemale
                      : theme.config.userMale
                  }
                />
              )}
            </CajaFotoPerfil>
            <TituloRRSS>Redes sociales</TituloRRSS>

            <CajaRRSS>
              <Icono
                title={
                  userBuscado.redesSociales.instagram == ""
                    ? "Cuenta no especificada"
                    : ""
                }
                onClick={() =>
                  handleRedireccion(userBuscado.redesSociales.instagram)
                }
                icon={faInstagram}
                className={`${
                  userBuscado.redesSociales.instagram == "" ? "inactivo" : ""
                }`}
              />
              <Icono
                title={
                  userBuscado.redesSociales.instagram == ""
                    ? "Cuenta no especificada"
                    : ""
                }
                className={`${
                  userBuscado.redesSociales.twitter == "" ? "inactivo" : ""
                }`}
                onClick={() =>
                  handleRedireccion(userBuscado.redesSociales.twitter)
                }
                icon={faTwitter}
              />
              <Icono
                title={
                  userBuscado.redesSociales.instagram == ""
                    ? "Cuenta no especificada"
                    : ""
                }
                className={`${
                  userBuscado.redesSociales.facebook == "" ? "inactivo" : ""
                }`}
                onClick={() =>
                  handleRedireccion(userBuscado.redesSociales.facebook)
                }
                icon={faFacebook}
              />
            </CajaRRSS>
          </CajaInterna>
          <CajaInterna className="der">
            <CajaDatos>
              <CajitaInterna>
                <Nombre>
                  {userBuscado.nombre + " " + userBuscado.apellido}
                </Nombre>
              </CajitaInterna>

              <CajitaInterna className="row">
                <ImgBandera
                  src={generatorIconFlagURL(userBuscado.nacionalidad.siglas)}
                />
                <NombreSubtitulo>
                  {userBuscado.nacionalidad.pais}
                </NombreSubtitulo>
              </CajitaInterna>
              <CajitaInterna>
                <NombreSubtitulo>{userBuscado.correo}</NombreSubtitulo>
              </CajitaInterna>
              <CajitaInterna>
                <NombreSubtitulo>
                  {CalcularEdad(userBuscado.fechaNacimiento).qtyAnnios +
                    " Años"}
                </NombreSubtitulo>
              </CajitaInterna>
              <CajitaInterna>
                <NombreSubtitulo>{userBuscado.textoBiografia}</NombreSubtitulo>
              </CajitaInterna>
              <CajitaInterna>
                <NombreSubtitulo>{userBuscado.telefono}</NombreSubtitulo>
              </CajitaInterna>
              <CajaBtn></CajaBtn>
            </CajaDatos>
          </CajaInterna>
        </CajaContenido>
        <CajaHistorico>
          <TituloHistorico>Historico de hospedajes</TituloHistorico>

          <CajaTabla>
            <Tabla>
              <thead>
                <Filas>
                  <CeldaHead>N°</CeldaHead>
                  <CeldaHead>Propiedad</CeldaHead>
                  <CeldaHead>Desde</CeldaHead>
                  <CeldaHead>Hasta</CeldaHead>
                </Filas>
              </thead>
              <tbody>
                <Filas>
                  <CeldasBody>{1}</CeldasBody>
                  <CeldasBody></CeldasBody>
                  <CeldasBody></CeldasBody>
                  <CeldasBody></CeldasBody>
                </Filas>
                {/* <Filas>
                  <CeldasBody>{1}</CeldasBody>
                  <CeldasBody>{"Villa Koi Punta Cana"}</CeldasBody>
                  <CeldasBody>{"15/06/24"}</CeldasBody>
                  <CeldasBody>{"22/06/24"}</CeldasBody>
                </Filas> */}
              </tbody>
            </Tabla>
          </CajaTabla>
        </CajaHistorico>
      </Container>
    )
  );
}

const Container = styled.div`
  padding: 25px ${theme.config.paddingLateral};
  @media screen and (max-width: 1100px) {
    padding: 20px 100px;
  }
  @media screen and (max-width: 900px) {
    padding: 20px 80px;
  }
  @media screen and (max-width: 600px) {
    padding: 20px 30px;
  }
  @media screen and (max-width: 450px) {
    padding: 20px 15px;
  }
`;
const CajaContenido = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  background-color: ${theme.primary.neutral200};
  padding: 10px;
  @media screen and (max-width: 940px) {
    flex-direction: column;
  }
`;
const CajaInterna = styled.div`
  &.izq {
    width: 30%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
    @media screen and (max-width: 940px) {
      width: 100%;
      flex-direction: column;
    }
  }
  &.der {
    width: 60%;
    @media screen and (max-width: 940px) {
      width: 100%;
      flex-direction: column;
    }
    /* border: 1px solid red; */
  }
`;
const CajaFotoPerfil = styled.div`
  width: 200px;
`;
const FotoPerfil = styled.img`
  width: 100%;
  border-radius: 50%;
`;
const TituloRRSS = styled.h2`
  font-size: 1rem;
  width: 100%;
  text-align: start;
  color: ${theme.secondary.coral};
`;
const CajaRRSS = styled.div`
  /* border: 2px solid black; */
  width: 100%;
  /* height: 40px; */
  padding: 4px;
  display: flex;
  justify-content: center;
  gap: 30px;
  &.modoEditar {
    flex-direction: column;
    border: 1px solid red;
    gap: 4px;
  }
`;
const Icono = styled(FontAwesomeIcon)`
  font-size: 2rem;

  color: ${theme.primary.turquoise};
  cursor: pointer;
  border: 2px solid;
  padding: 5px;
  border-radius: 4px;
  transition: ease 0.4s;
  &:hover {
    background-color: ${theme.primary.neutral300};
    color: ${theme.primary.neutral600};
  }

  &.inactivo {
    color: gray;
    cursor: auto;
    &:hover {
      background-color: transparent;
      color: gray;
    }
  }
`;
const CajaDatos = styled.div`
  min-height: 200px;
  padding: 15px;
`;
const CajitaInterna = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  border-bottom: 1px solid ${theme.primary.neutral600};
  &.row {
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }
`;
const Nombre = styled.h2`
  font-weight: 400;
`;

const NombreSubtitulo = styled.h3`
  font-size: 1rem;
  font-weight: 400;
`;
const ImgBandera = styled.img`
  width: 30px;
`;
const CajaBtn = styled.div`
  width: 100%;
`;
const WrapBtn = styled.div``;
const BtnSimple = styled(BtnGeneral)``;
const CajaHistorico = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: ${theme.primary.sand};
  box-shadow: ${theme.config.sombra};
  border-radius: 10px;
  overflow-x: scroll;
`;
const TituloHistorico = styled.h2`
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: ${theme.primary.turquoise};
  color: ${theme.primary.neutral600};
  /* color: black; */
`;
const CajaTabla = styled.div`
  width: 100%;
  overflow-x: scroll;
`;

// ---------
const Tabla = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 95%;
  margin: auto;
  margin-bottom: 30px;
  /* background-color: ${theme.pri}; */
  color: black;
`;
const Filas = styled.tr``;

const CeldaHead = styled.th`
  border-bottom: 1px solid #605e5e;
  padding: 3px 8px;
  text-align: center;
  background-color: #2b7d9e5d;
  border-right: 1px solid #5e5e60;
  font-size: 0.9rem;

  &:first-child {
    width: 40px;
  }
  &:nth-child(2) {
    /* width: 250px; */
  }
  &:nth-child(3) {
    width: 100px;
  }
  &:nth-child(4) {
    width: 100px;
  }
  &:nth-child(5) {
    width: 60px;
  }
  &:nth-child(5) {
    width: 60px;
  }
`;
const CeldasBody = styled.td`
  font-size: 0.9rem;
  border: 1px solid black;
  height: 25px;
  text-align: center;
  &.eliminar {
    cursor: pointer;
  }
  &.descripcion {
    text-align: start;
    padding-left: 10px;
  }
`;

// Edicion

const CajaInput = styled.div`
  width: 100%;
  margin-bottom: 10px;
  &.btn {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    /* margin-bottom: 40px; */
  }
  &.links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  &.checkbox {
    min-height: 25px;
    /* border: 1px solid red; */
    padding: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
  }
`;

const TituloInput = styled.p`
  color: ${theme.complementary.midnightBlue};
`;
const Input = styled(InputGeneral)`
  &.checkbox {
    background-color: red;
    width: 20px;
  }
  &.danger {
    color: ${theme.secondary.coral};
    border: 1px solid red;
  }
  &.none {
    display: none;
  }
  &.radio {
    width: 15px;
    &:focus {
      border: 1px solid black;
      width: 25px;
    }
  }
`;
const Opcion = styled(OpciongGneral)``;
const DataListSimple = styled(DataList)``;

const TextArea = styled(TextAreaGeneral)``;

const CajaAlerta = styled.div``;
const Parrafo = styled.p``;

const CajaEncabezado = styled.div`
  padding: 15px;
`;
const TituloEncabezado = styled.h2`
  color: ${theme.secondary.coral};
  border-bottom: 2px solid;
  &.sub {
    border: none;
    font-size: 1.2rem;
  }
`;
