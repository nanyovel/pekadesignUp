import React, { useCallback, useEffect, useRef, useState } from "react";
import { theme } from "../config/theme";
import styled from "styled-components";
import Cropper from "react-easy-crop";
import {
  BtnGeneral,
  DataList,
  InputGeneral,
  OpciongGneral,
  TituloSeccion,
} from "../components/ElementosGenerales";
import { ListaPaises } from "../components/ListaPaises";
import BotonQuery from "../components/BotonQuery";
import { ModalLoading } from "../components/ModalLoading";
import db, { autenticar, storage } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { getCroppedImg } from "../components/cropImageCanvas";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { ES6AFormat, INPUTAFormat } from "../libs/FechaFormat";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { formatoCorreo } from "../libs/StringS";
import { UserSchema } from "../model/AuthSchema";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Registrarse({ usuario }) {
  // ************ RECURSOS GENERALES **************
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [dispatchAlerta, setDispatchAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");

  // Esto para que no aparezca el input type file sino un icono de fontawesome
  const inputRef = useRef(null);
  const clickFromIcon = () => {
    inputRef.current.click();
  };

  const auth = getAuth();
  auth.languageCode = "es";
  const [datosParseados, setDatosParseados] = useState(false);
  useEffect(() => {
    if (auth.currentUser?.emailVerified == true) {
      navigate("/");
    } else {
      setDatosParseados(true);
    }
  }, [auth]);

  // ************** MANEJANDO CORTE DE IMAGENES FOTO DE PERFIL **************
  // ************** datos del Paquete react easy crop **************
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

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setDatos({
        ...datos,
        urlFotoPerfil: {
          ...datos.urlFotoPerfil,
          value: imgUrl,
        },
      });
      setFileFotoPerfil(file);
      setHasImgCro(true);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // ***********MANEJANDO LOS INPUTS***********
  //
  // *** EXCLUIR DE LOS IMPUTS *****
  // Inputs que el usuario no puede llenar explicitamente a la hora de registro
  const {
    privilegios,
    createAt,
    estadoDoc,
    redesSociales,
    textoBiografia,
    ...datosFilter
  } = UserSchema;

  // *** OPCIONALES DE LOS IMPUTS ****
  // inputs que son de llenado opcional
  const propiedadesOpcionales = ["urlFotoPerfil"];

  // *** PROPIEDADES ANIDADAS ****
  // Estas propiedades primero la sacamos del set de inputs con su propiedad value explicita y al final volvemos a incluirla
  const propiedadesAnidadas = ["nacionalidad"];

  // *** convertir cada propiedad a objeto, marcar las opcionales y las anidadas*****
  const datosInit = Object.keys(datosFilter).reduce((acc, key) => {
    acc[key] = {
      ...UserSchema[key],
      value: "",
      obligatorio: !propiedadesOpcionales.includes(key),
      anidada: propiedadesAnidadas.includes(key),
    };

    return acc;
  }, {});
  // *** Agregar a los inputs*****
  const newEntrada = {
    value: "",
    obligatorio: true,
    anidada: false,
  };

  const datosInitial = {
    ...datosInit,
    // Pais Derivado de nacionalidad, dado que nacionalidad es una propiedad especial
    paisNacimiento: newEntrada,
    password: newEntrada,
    password2: newEntrada,
  };
  const [datos, setDatos] = useState({ ...datosInitial });

  // Tomamos el mismo set de propiedades del estado principal y lo parseamos para validaciones
  const validacionInicial = Object.keys(datosInitial).reduce((acc, key) => {
    acc[key] = {
      ...datosInitial[key],
      alerta: false,
      mensajeAlerta: "",
    };
    return acc;
  }, {});

  const [validacion, setValidacion] = useState({ ...validacionInicial });

  const handleInput = (e) => {
    const { value, name } = e.target;

    setValidacion({ ...validacionInicial });
    if (name == "paisNacimiento") {
      let datosAux = datos;
      const paisBuscado = ListaPaises.find((pais) => {
        if (pais.nombre == value) {
          return pais;
        }
      });

      if (paisBuscado) {
        datosAux = {
          ...datosAux,
          nacionalidad: {
            ...datosAux.nacionalidad,
            pais: paisBuscado.nombre,
            siglas: paisBuscado.siglas,
          },
        };
      }
      datosAux = {
        ...datosAux,
        paisNacimiento: {
          ...datosAux.paisNacimiento,
          value: value,
        },
      };

      setDatos(datosAux);
    } else {
      setDatos((prevState) => ({
        ...prevState,
        [name]: {
          ...prevState[name],
          value: value,
        },
      }));
    }
  };

  const enviarObjeto = async () => {
    let validacionAux = { ...validacionInicial };

    // ELiminar espacios en blanco al final y al inicio
    const datosParsed = Object.keys(datos).reduce((acc, key) => {
      if (key != "password" && key != "password2" && key != "nacionalidad") {
        acc[key] = {
          ...datos[key],
          value: datos[key].value.trim(),
          //
        };
      } else {
        acc[key] = {
          ...datos[key],
        };
      }
      return acc;
    }, {});

    const validaciones = {
      passwordsIguales: true,
      passwordSegura: true,
      correoValido: true,
      todosCamposLlenos: true,
    };
    // Si las contraseñas son diferentes
    if (datosParsed.password.value != datosParsed.password2.value) {
      validacionAux = {
        ...validacionInicial,
        password: {
          ...validacionInicial.password,
          alerta: true,
          mensajeAlerta: "Las contraseñas no coinciden.",
        },
        password2: {
          ...validacionInicial.password2,
          alerta: true,
          mensajeAlerta: "Las contraseñas no coinciden.",
        },
      };

      validaciones.passwordsIguales = false;
    } else {
      // Validacion de complejidad de contraseña:
      //  1- Al menos 8 caracteres.
      //  2- Contiene al menos una letra mayúscula.
      //  3- Contiene al menos una letra minúscula.
      const regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (regex.test(datosParsed.password.value) == false) {
        validacionAux = {
          ...validacionInicial,
          password: {
            ...validacionInicial.password,
            alerta: true,
            mensajeAlerta: "La contraseña debe cumplir con:",
            insegura: true,
          },
        };
        validaciones.passwordSegura = false;
      }
    }

    // si el correo no tiene formato de correo
    if (formatoCorreo(datosParsed.correo.value) == false) {
      validacionAux = {
        ...validacionAux,
        correo: {
          ...validacionAux.correo,
          alerta: true,
          mensajeAlerta: "Correo no valido",
        },
      };
      validaciones.correoValido = false;
    }

    // Si dejo algun campo vacio
    validacionAux = Object.keys(validacionAux).reduce((acc, key) => {
      if (
        datosParsed[key].value == "" &&
        datosParsed[key].obligatorio == true &&
        datosParsed[key].anidada == false
      ) {
        validaciones.todosCamposLlenos = false;
        acc[key] = {
          ...datosInitial[key],
          alerta: true,
          mensajeAlerta: "Campo obligatorio",
        };
      } else {
        acc[key] = { ...validacionAux[key] };
      }

      return acc;
    }, {});
    setValidacion({ ...validacionAux });
    if (
      validaciones.passwordsIguales == true &&
      validaciones.passwordSegura == true &&
      validaciones.correoValido == true &&
      validaciones.todosCamposLlenos == true
    ) {
      try {
        setIsLoading(true);
        // Las propiedades que eran objeto, ahora conviertelas en propiedades simples
        const datosEnviar = Object.keys(datosParsed).reduce((acc, key) => {
          // La propiedades que son anindadas tienen
          if (datos[key].anidada) {
            const { anidada, obligatorio, value, ...datosPAux } = datos[key];

            acc[key] = datosPAux;
          } else {
            acc[key] = datos[key].value;
          }

          return acc;
        }, {});

        await createUserWithEmailAndPassword(
          autenticar,
          datosEnviar.correo,
          datosEnviar.password
        );
        // Elimina propiedades que no se necesitan
        const { password, password2, paisNacimiento, ...datosSinPassword } =
          datosEnviar;
        const usuar = auth.currentUser;
        const newUserEnviar = {
          ...UserSchema,
          ...datosSinPassword,
          createAt: ES6AFormat(new Date()),
          fechaNacimiento: INPUTAFormat(datos.fechaNacimiento.value),
          correo: usuar.email,
          urlFotoPerfil: "",
          estadoDoc: 0,
        };

        await setDoc(doc(db, "usuarios", usuar.uid), newUserEnviar);

        try {
          // Cargar foto de perfil
          const nombreFoto =
            "avatars/" +
            newUserEnviar.userName +
            "__" +
            ES6AFormat(new Date()).replaceAll("/", "_") +
            "__" +
            usuar.uid;
          const storageRefFoto = ref(storage, nombreFoto);
          const usuarioActualizar = doc(db, "usuarios", usuar.uid);
          if (fileFotoPerfil) {
            await uploadBytes(storageRefFoto, fileFotoPerfil).then(() => {}); // Ahora entregame la url de la foto de perfil y colocasela en una propiedad del objeto de este usuario en la base de datos
            getDownloadURL(ref(storage, storageRefFoto)).then((url) =>
              updateDoc(usuarioActualizar, {
                urlFotoPerfil: url,
              })
            );
          }
        } catch (error) {
          console.log("error al cargar foto de perfil");
          console.log(error);

          setIsLoading(false);
        }
        setIsLoading(false);
        navigate("/");
        // location.reload();
      } catch (error) {
        console.log(error);
        switch (error.code) {
          case "auth/email-already-in-use":
            // setHasAlerta(true);
            setMensajeAlerta("El correo ya existe.");
            setDispatchAlerta(true);
            break;

          default:
            setMensajeAlerta("Error con la base de datos 1");
            setDispatchAlerta(true);
            break;
        }

        setIsLoading(false);
      }
    }
  };

  return (
    datosParseados && (
      <>
        <Header />
        <BotonQuery datos={datos} validacion={validacion} />
        <CajaContenido>
          <Titulo>Registrarse</Titulo>

          <WrapInputs>
            <SeccionFotoPerfil>
              {hasImgCrop && (
                <ModalCroper>
                  <WrapElementsCrops>
                    <TituloCrop>Seleccione el area a recortar</TituloCrop>
                    <CajCropper>
                      <Cropper
                        image={datos.urlFotoPerfil.value}
                        crop={crop}
                        zoom={1}
                        minZoom={1}
                        maxZoom={2}
                        cropShape={"round"}
                        objectFit={"cover"}
                        aspect={1}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                      />
                    </CajCropper>
                    <CajaControlesCrop>
                      <BtnCrop className="" onClick={() => handleCrop()}>
                        Aceptar
                      </BtnCrop>
                      <BtnCrop
                        className="danger"
                        onClick={() => setHasImgCro(false)}
                      >
                        Cancelar
                      </BtnCrop>
                    </CajaControlesCrop>
                  </WrapElementsCrops>
                </ModalCroper>
              )}
              <CajaFotoPerfil>
                <FotoPerfil src={datos.urlFotoPerfil.value} />
                <CajaIcono>
                  <Icono
                    onClick={clickFromIcon}
                    icon={faCloudArrowUp}
                    title="Cargar foto de perfil"
                  />
                  <Parrafo className="fotoPerfil">Foto de perfil</Parrafo>
                </CajaIcono>
                <Input
                  type="file"
                  ref={inputRef}
                  accept="image/*"
                  onChange={handleFile}
                  className="none"
                />
              </CajaFotoPerfil>
            </SeccionFotoPerfil>
            <CajaInput>
              <TituloInput>Nombre</TituloInput>
              {validacion.nombre.alerta && (
                <Parrafo className="danger">
                  {validacion.nombre.mensajeAlerta}
                </Parrafo>
              )}
              <Input
                value={datos.nombre.value}
                name="nombre"
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Nombre"
                autoComplete="off"
                className={validacion.nombre.alerta ? "danger" : ""}
              />
            </CajaInput>
            <CajaInput>
              <TituloInput>Apellido</TituloInput>
              {validacion.apellido.alerta && (
                <Parrafo className="danger">
                  {validacion.apellido.mensajeAlerta}
                </Parrafo>
              )}
              <Input
                value={datos.apellido.value}
                name="apellido"
                onChange={(e) => handleInput(e)}
                type="text"
                placeholder="Apellido"
                autoComplete="off"
                className={validacion.apellido.alerta ? "danger" : ""}
              />
            </CajaInput>
            <CajaInput>
              <TituloInput>Correo</TituloInput>
              {validacion.correo.alerta && (
                <Parrafo className="danger">
                  {validacion.correo.mensajeAlerta}
                </Parrafo>
              )}
              <Input
                value={datos.correo.value}
                name="correo"
                onChange={(e) => handleInput(e)}
                type="email"
                placeholder="Correo"
                autoComplete="off"
                className={validacion.correo.alerta ? "danger" : ""}
              />
            </CajaInput>
            <CajaInput>
              <TituloInput>Genero</TituloInput>
              {validacion.genero.alerta && (
                <Parrafo className="danger">
                  {validacion.genero.mensajeAlerta}
                </Parrafo>
              )}
              <CajaRadio>
                <CajitaRadio>
                  <Input
                    value={"Masculino"}
                    name="genero"
                    onChange={(e) => handleInput(e)}
                    type="radio"
                    placeholder="Genero"
                    autoComplete="off"
                    className={`
                ${validacion.genero.alerta ? "danger " : ""}
                radio
                `}
                    id="macho"
                  />
                  <Label htmlFor="macho">Masculino</Label>
                </CajitaRadio>
                <CajitaRadio>
                  <Input
                    id="hembra"
                    value={"Femenino"}
                    name="genero"
                    onChange={(e) => handleInput(e)}
                    type="radio"
                    placeholder="Genero"
                    autoComplete="off"
                    className={`
                ${validacion.genero.alerta ? " danger " : ""}
                radio
                `}
                  />
                  <Label htmlFor="hembra">Femenino</Label>
                </CajitaRadio>
              </CajaRadio>
            </CajaInput>
            <CajaInput>
              <TituloInput>Telefono</TituloInput>
              {validacion.telefono.alerta && (
                <Parrafo className="danger">
                  {validacion.telefono.mensajeAlerta}
                </Parrafo>
              )}
              <Input
                value={datos.telefono.value}
                name="telefono"
                onChange={(e) => handleInput(e)}
                type="email"
                placeholder="Telefono"
                autoComplete="off"
                className={validacion.telefono.alerta ? "danger" : ""}
              />
            </CajaInput>
            <CajaInput>
              <TituloInput>Contraseña</TituloInput>
              {validacion.password.alerta && (
                <Parrafo className="danger">
                  {validacion.password.mensajeAlerta}
                </Parrafo>
              )}
              {validacion.password.insegura && (
                <>
                  <ListaInsegura>
                    <ElementosInseguros>
                      Al menos 8 caracteres
                    </ElementosInseguros>
                    <ElementosInseguros>
                      Al menos una letra mayuscula
                    </ElementosInseguros>
                    <ElementosInseguros>
                      Al menos una letra minuscula
                    </ElementosInseguros>
                  </ListaInsegura>
                </>
              )}
              <CajaInternaInput>
                {" "}
                <Input
                  value={datos.password.value}
                  name="password"
                  onChange={(e) => handleInput(e)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  autoComplete="off"
                  className={validacion.password.alerta ? "danger" : ""}
                />
                <CajaEye>
                  <IconoEye
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </CajaEye>
              </CajaInternaInput>
            </CajaInput>
            <CajaInput>
              <TituloInput>Repetir contraseña</TituloInput>
              <CajaInternaInput>
                <Input
                  value={datos.password2.value}
                  name="password2"
                  onChange={(e) => handleInput(e)}
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Contraseña"
                  autoComplete="off"
                  className={validacion.password.alerta ? "danger" : ""}
                />
                <CajaEye>
                  <IconoEye
                    icon={showPassword2 ? faEyeSlash : faEye}
                    onClick={() => setShowPassword2(!showPassword2)}
                  />
                </CajaEye>
              </CajaInternaInput>
            </CajaInput>
            <CajaInput>
              <TituloInput>Fecha de nacimiento</TituloInput>
              {validacion.fechaNacimiento.alerta && (
                <Parrafo className="danger">
                  {validacion.fechaNacimiento.mensajeAlerta}
                </Parrafo>
              )}
              <Input
                value={datos.fechaNacimiento.value}
                name="fechaNacimiento"
                onChange={(e) => handleInput(e)}
                type="date"
                placeholder="Fecha de nacimiento"
                autoComplete="off"
                className={validacion.fechaNacimiento.alerta ? "danger" : ""}
              />
            </CajaInput>
            <CajaInput>
              <TituloInput>Pais de nacimiento</TituloInput>
              {validacion.paisNacimiento.alerta && (
                <Parrafo className="danger">
                  {validacion.paisNacimiento.mensajeAlerta}
                </Parrafo>
              )}
              <Input
                type="text"
                value={datos.paisNacimiento.value}
                name="paisNacimiento"
                onChange={(e) => handleInput(e)}
                placeholder="Nacionalidad"
                list="paises"
                autoComplete="off"
                className={validacion.paisNacimiento.alerta ? "danger" : ""}
              />
              <DataListSimple id="paises">
                {ListaPaises.map((pais, index) => {
                  return <Opcion key={index}>{pais.nombre}</Opcion>;
                })}
              </DataListSimple>
            </CajaInput>

            {dispatchAlerta && (
              <CajaErrorAlEnviar>
                <Parrafo className="danger">{mensajeAlerta}</Parrafo>
              </CajaErrorAlEnviar>
            )}
            <CajaInput className="btn">
              <BtnSimple onClick={() => enviarObjeto()}>Registrarse</BtnSimple>
            </CajaInput>
          </WrapInputs>
        </CajaContenido>
        {isLoading && <ModalLoading />}
        <Footer />
      </>
    )
  );
}
const Container = styled.div`
  min-height: 200px;
  background-color: red;
`;

const CajaContenido = styled.div`
  padding: 0 25px;
  min-height: 200px;
`;
const Titulo = styled(TituloSeccion)`
  padding-top: 30px;
`;

const WrapInputs = styled.div`
  min-width: 400px;
  min-height: 200px;
  width: 400px;
  margin: auto;
  border: 1px solid ${theme.primary.turquoise};
  border-radius: 10px;
  padding: 15px;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
  @media screen and (max-width: 600px) {
    min-width: 200px;
    width: auto;
  }
`;
const CajaInput = styled.div`
  width: 100%;
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
const Parrafo = styled.p`
  width: 100%;
  &.danger {
    color: red;
  }
  &.fotoPerfil {
    color: ${theme.secondary.coral};
    text-decoration: underline;
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
const CajaRadio = styled.div`
  display: flex;
`;
const CajitaRadio = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 15px;
`;
const Opcion = styled(OpciongGneral)``;
const DataListSimple = styled(DataList)``;
const BtnSimple = styled(BtnGeneral)`
  border: 1px solid ${theme.primary.turquoise};
`;
const ListaInsegura = styled.ul`
  color: red;
  padding-left: 30px;
`;
const ElementosInseguros = styled.li``;
const CajaErrorAlEnviar = styled.div`
  width: 100%;
`;
const SeccionFotoPerfil = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CajaFotoPerfil = styled.div`
  position: relative;
`;
const FotoPerfil = styled.img`
  border-radius: 50%;
  border: 4px solid ${theme.primary.turquoise};
  height: 200px;
  width: 200px;
`;
const CajaIcono = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
const Icono = styled(FontAwesomeIcon)`
  font-size: 2rem;
  border: 1px solid ${theme.secondary.coral};
  padding: 4px;
  cursor: pointer;
  transition: ease all 0.2s;
  background-color: ${theme.primary.neutral500};
  &:hover {
    border-radius: 4px;
    color: ${theme.primary.turquoise};
  }
`;
const ModalCroper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: #000000c6;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const WrapElementsCrops = styled.div``;
const CajCropper = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  border: 4px solid ${theme.secondary.coral};
`;
const TituloCrop = styled.h2`
  color: ${theme.primary.turquoise};
  font-size: 2rem;
  margin-bottom: 20px;
`;
const CajaControlesCrop = styled.div`
  width: 100%;
  min-height: 50px;
  position: relative;
  bottom: 0;
  /* background-color: red; */
`;
const BtnCrop = styled(BtnGeneral)``;
const CajaEye = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  /* background-color: red; */
`;

const IconoEye = styled(FontAwesomeIcon)`
  color: ${theme.azul2};
  cursor: pointer;
`;
const CajaInternaInput = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const Label = styled.label``;
