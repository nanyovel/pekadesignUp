import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import { UserSchema } from "../model/Auth";
import { useNavigate } from "react-router";
import BotonQuery from "../components/BotonQuery";
import { generatorIconFlagURL, ListaPaises } from "../components/ListaPaises";
import {
  CalcularEdad,
  ES6AFormat,
  FormatAInput,
  INPUTAFormat,
} from "../libs/FechaFormat";
import {
  BtnGeneral,
  DataList,
  InputGeneral,
  OpciongGneral,
  TextAreaGeneral,
} from "../components/ElementosGenerales";
import { signOut } from "firebase/auth";
import db, { autenticar } from "../firebase/firebaseConfig";
import { ModalLoading } from "../components/ModalLoading";
import { doc, updateDoc } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Perfil({ userMaster, usuario }) {
  // ************ RECURSOS GENERALES **************
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [dispatchAlerta, setDispatchAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
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

  // ************* CERRAR SESION ***********
  const cerrarSesion = async () => {
    try {
      await signOut(autenticar);
      navigate("/");
    } catch (error) {
      console.log("Error al cerrar sesion.");
      console.log(error);
    }
  };

  // ************** MANEJANDO CORTE DE IMAGENES FOTO DE PERFIL **************
  // ************** datos del Paquete react easy crop **************
  const inputRef = useRef(null);
  const clickFromIcon = () => {
    inputRef.current.click();
  };
  const [fileFotoPerfil, setFileFotoPerfil] = useState(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [hasImgCrop, setHasImgCro] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(
        datos.urlFotoPerfil.value,
        croppedAreaPixels
      );
      // Imagen cortada se debe cuardar ahora como un file, tomar en cuenta:
      // -Con la imagen tenemos la ruta de una imagen pero tambien el archivo como tal
      handleUpload(croppedImage);
      setDatos({
        ...datos,
        urlFotoPerfil: {
          ...datos.urlFotoPerfil,
          value: croppedImage,
        },
      });
      setHasImgCro(false);
    } catch (error) {
      console.error("Error recortando la imagen:", error);
    }
  };

  const handleUpload = (croppedImage) => {
    fetch(croppedImage)
      .then((res) => res.blob())
      .then((blob) => setFileFotoPerfil(blob));
  };

  // ******************* Editar PERFIL *******************

  const [modoEditar, setModoEditar] = useState(false);
  const [userEditable, setUserEditable] = useState({});
  const initialAux = {
    paisNacimiento: "",
    fechaNacimiento: "",
  };
  const [inpustAux, setInputsAux] = useState({ ...initialAux });
  const editar = () => {
    setUserEditable({ ...userMaster });

    setInputsAux({
      ...inpustAux,
      paisNacimiento: userMaster.nacionalidad.pais,
      fechaNacimiento: FormatAInput(userMaster.fechaNacimiento),
    });
    setModoEditar(true);
  };

  const handleInput = (e) => {
    const { value, name } = e.target;
    let userAux = userEditable;
    console.log(name);
    if (name == "paisNacimiento") {
      const paisBuscado = ListaPaises.find((pais) => {
        if (pais.nombre == value) {
          return pais;
        }
      });

      if (paisBuscado) {
        userAux = {
          ...userAux,
          nacionalidad: {
            ...userAux.nacionalidad,
            pais: paisBuscado.nombre,
            siglas: paisBuscado.siglas,
          },
        };
      }

      setInputsAux({
        ...inpustAux,
        paisNacimiento: value,
      });
      setUserEditable({ ...userAux });
    } else if (name == "fechaNacimiento") {
      setUserEditable({
        ...userEditable,
        fechaNacimiento: INPUTAFormat(value),
      });
      setInputsAux({
        ...inpustAux,
        fechaNacimiento: value,
      });
    } else if (name == "instagram" || name == "twitter" || name == "facebook") {
      setUserEditable({
        ...userEditable,
        redesSociales: {
          ...userEditable.redesSociales,
          [name]: value,
        },
      });
    } else {
      console.log("llego");
      setUserEditable({
        ...userEditable,
        [name]: value,
      });
    }
  };

  const cancelarCambios = () => {
    setModoEditar(false);
    setUserEditable({ ...userMaster });
    setInputsAux({ ...initialAux });
  };

  const [validacionInputs, setValidacionInputs] = useState({
    nombre: true,
    apellido: true,
    paisNacimiento: true,
    fechaNacimiento: true,
    telefono: true,
  });

  const guardarCambios = async () => {
    try {
      setIsLoading(true);
      const userUP = {
        ...userEditable,
      };
      const docActualizar = doc(db, "usuarios", userMaster.id);
      await updateDoc(docActualizar, userUP);
      setModoEditar(false);
      setUserEditable({ ...userMaster });
      setInputsAux({ ...initialAux });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      {userMaster && !modoEditar ? (
        <Container>
          <CajaContenido>
            <CajaInterna className="izq">
              <CajaFotoPerfil>
                {userMaster.urlFotoPerfil ? (
                  <FotoPerfil src={userMaster.urlFotoPerfil} />
                ) : (
                  <FotoPerfil
                    src={
                      userMaster.genero == "Femenino"
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
                    userMaster.redesSociales.instagram == ""
                      ? "Cuenta no especificada"
                      : ""
                  }
                  onClick={() =>
                    handleRedireccion(userMaster.redesSociales.instagram)
                  }
                  icon={faInstagram}
                  className={`${
                    userMaster.redesSociales.instagram == "" ? "inactivo" : ""
                  }`}
                />
                <Icono
                  title={
                    userMaster.redesSociales.instagram == ""
                      ? "Cuenta no especificada"
                      : ""
                  }
                  className={`${
                    userMaster.redesSociales.twitter == "" ? "inactivo" : ""
                  }`}
                  onClick={() =>
                    handleRedireccion(userMaster.redesSociales.twitter)
                  }
                  icon={faTwitter}
                />
                <Icono
                  title={
                    userMaster.redesSociales.instagram == ""
                      ? "Cuenta no especificada"
                      : ""
                  }
                  className={`${
                    userMaster.redesSociales.facebook == "" ? "inactivo" : ""
                  }`}
                  onClick={() =>
                    handleRedireccion(userMaster.redesSociales.facebook)
                  }
                  icon={faFacebook}
                />
              </CajaRRSS>
            </CajaInterna>
            <CajaInterna className="der">
              <CajaDatos>
                <CajitaInterna>
                  <Nombre>
                    {userMaster.nombre + " " + userMaster.apellido}
                  </Nombre>
                </CajitaInterna>

                <CajitaInterna className="row">
                  <ImgBandera
                    src={generatorIconFlagURL(userMaster.nacionalidad.siglas)}
                  />
                  <NombreSubtitulo>
                    {userMaster.nacionalidad.pais}
                  </NombreSubtitulo>
                </CajitaInterna>
                <CajitaInterna>
                  <NombreSubtitulo>{userMaster.correo}</NombreSubtitulo>
                </CajitaInterna>
                <CajitaInterna>
                  <NombreSubtitulo>
                    {CalcularEdad(userMaster.fechaNacimiento).qtyAnnios +
                      " Años"}
                  </NombreSubtitulo>
                </CajitaInterna>
                <CajitaInterna>
                  <NombreSubtitulo>{userMaster.textoBiografia}</NombreSubtitulo>
                </CajitaInterna>
                <CajitaInterna>
                  <NombreSubtitulo>{userMaster.telefono}</NombreSubtitulo>
                </CajitaInterna>
                <CajaBtn>
                  <WrapBtn>
                    <BtnSimple onClick={() => editar()}>
                      Editar perfil
                    </BtnSimple>
                    <BtnSimple onClick={() => navigate("/recuperar")}>
                      Cambiar contraseña
                    </BtnSimple>
                    <BtnSimple onClick={() => cerrarSesion()}>
                      Cerrar sesion
                    </BtnSimple>
                  </WrapBtn>
                </CajaBtn>
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
                    <CeldaHead>Comentar</CeldaHead>
                    <CeldaHead>Volver a reservar</CeldaHead>
                  </Filas>
                </thead>
                <tbody>
                  <Filas>
                    <CeldasBody>{1}</CeldasBody>
                    <CeldasBody></CeldasBody>
                    <CeldasBody></CeldasBody>
                    <CeldasBody></CeldasBody>
                    <CeldasBody>
                      {/* <BtnSimple>Comentar</BtnSimple> */}
                    </CeldasBody>
                    <CeldasBody>
                      {/* <BtnSimple>Reservar</BtnSimple> */}
                    </CeldasBody>
                  </Filas>

                  <Filas></Filas>
                </tbody>
              </Tabla>
            </CajaTabla>
          </CajaHistorico>
        </Container>
      ) : (
        <Container>
          <BotonQuery
            userMaster={userMaster}
            userEditable={userEditable}
            inpustAux={inpustAux}
          />
          <CajaContenido>
            <CajaInterna className="izq">
              <CajaFotoPerfil>
                {userEditable.urlFotoPerfil ? (
                  <FotoPerfil src={userEditable.urlFotoPerfil} />
                ) : (
                  <FotoPerfil
                    src={
                      userEditable.genero == "Femenino"
                        ? theme.config.userFemale
                        : theme.config.userMale
                    }
                  />
                )}
              </CajaFotoPerfil>
              <TituloRRSS>Redes sociales</TituloRRSS>
              <CajaRRSS className={modoEditar ? "modoEditar" : ""}>
                <CajaInput>
                  <TituloInput>Perfil de instagram</TituloInput>

                  <Input
                    value={userEditable.redesSociales.instagram}
                    name="instagram"
                    onChange={(e) => handleInput(e)}
                    type="email"
                    placeholder="Perfil de instagram"
                    autoComplete="off"
                  />
                </CajaInput>
                <CajaInput>
                  <TituloInput>Perfil de X (Twitter)</TituloInput>

                  <Input
                    value={userEditable.redesSociales.twitter}
                    name="twitter"
                    onChange={(e) => handleInput(e)}
                    type="email"
                    placeholder="Perfil de X"
                    autoComplete="off"
                  />
                </CajaInput>
                <CajaInput>
                  <TituloInput>Perfil de Facebook</TituloInput>

                  <Input
                    value={userEditable.redesSociales.facebook}
                    name="facebook"
                    onChange={(e) => handleInput(e)}
                    type="email"
                    placeholder="Perfil de facebook"
                    autoComplete="off"
                  />
                </CajaInput>
              </CajaRRSS>
            </CajaInterna>
            <CajaInterna className="der">
              <CajaDatos>
                <CajaInput>
                  <TituloInput>Nombres</TituloInput>

                  <Input
                    value={userEditable.nombre}
                    name="nombre"
                    onChange={(e) => handleInput(e)}
                    type="email"
                    placeholder="Nombres"
                    autoComplete="off"
                    className={validacionInputs.nombre == false ? "danger" : ""}
                  />
                </CajaInput>
                <CajaInput>
                  <TituloInput>Apellidos</TituloInput>

                  <Input
                    value={userEditable.apellido}
                    name="apellido"
                    onChange={(e) => handleInput(e)}
                    type="email"
                    placeholder="Apellidos"
                    autoComplete="off"
                    className={
                      validacionInputs.apellido == false ? "danger" : ""
                    }
                  />
                </CajaInput>

                <CajaInput>
                  <TituloInput>Pais de nacimiento</TituloInput>

                  <Input
                    type="text"
                    value={inpustAux.paisNacimiento}
                    name="paisNacimiento"
                    onChange={(e) => handleInput(e)}
                    placeholder="Nacionalidad"
                    list="paises"
                    autoComplete="off"
                    className={
                      validacionInputs.paisNacimiento == false ? "danger" : ""
                    }
                  />
                  <DataListSimple id="paises">
                    {ListaPaises.map((pais, index) => {
                      return <Opcion key={index}>{pais.nombre}</Opcion>;
                    })}
                  </DataListSimple>
                </CajaInput>

                <CajaInput>
                  <TituloInput>Fecha de nacimiento</TituloInput>

                  <Input
                    value={inpustAux.fechaNacimiento}
                    name="fechaNacimiento"
                    onChange={(e) => handleInput(e)}
                    type="date"
                    placeholder="Fecha de nacimiento"
                    autoComplete="off"
                    className={
                      validacionInputs.fechaNacimiento == false ? "danger" : ""
                    }
                  />
                </CajaInput>

                <CajitaInterna>
                  <NombreSubtitulo>{userEditable.correo}</NombreSubtitulo>
                </CajitaInterna>

                <CajaInput>
                  <TituloInput>Cuentanos sobre ti</TituloInput>

                  <TextArea
                    value={userEditable.textoBiografia}
                    name="textoBiografia"
                    onChange={(e) => handleInput(e)}
                    placeholder="Explicanos sobre ti; intereses, datos curiosos etc."
                    autoComplete="off"
                    className={
                      validacionInputs.fechaNacimiento.alerta ? "danger" : ""
                    }
                  />
                </CajaInput>
                <CajaInput>
                  <TituloInput>Numero de telefono</TituloInput>

                  <Input
                    value={userEditable.telefono}
                    name="telefono"
                    onChange={(e) => handleInput(e)}
                    placeholder="Telefono"
                    autoComplete="off"
                    className={
                      validacionInputs.fechaNacimiento.alerta ? "danger" : ""
                    }
                  />
                </CajaInput>

                <CajaAlerta>
                  <Parrafo>{mensajeAlerta}</Parrafo>
                </CajaAlerta>
                <CajaBtn>
                  <WrapBtn>
                    <BtnSimple onClick={() => cancelarCambios()}>
                      Cancelar
                    </BtnSimple>
                    <BtnSimple onClick={() => guardarCambios()}>
                      Guardar cambios
                    </BtnSimple>
                  </WrapBtn>
                </CajaBtn>
              </CajaDatos>
            </CajaInterna>
          </CajaContenido>
          {isLoading && <ModalLoading />}
        </Container>
      )}
      <Footer />
    </>
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
