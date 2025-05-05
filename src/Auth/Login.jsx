import React, { useEffect, useState } from "react";
import { theme } from "../config/theme";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BtnGeneral, TituloH1 } from "../components/ElementosGenerales";
import { NavLink, useNavigate } from "react-router";
import BotonQuery from "../components/BotonQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ModalLoading } from "../components/ModalLoading";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { autenticar } from "../firebase/firebaseConfig";
import { formatoCorreo } from "../libs/StringS";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  // ************ RECURSOS GENERALES **************
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const datosInitial = {
    correo: "",
    password: "",
  };

  const currentUser = useAuth().usuario;
  const [datosParseados, setDatosParseados] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    console.log(auth.currentUser);
    if (auth.currentUser) {
      navigate("/");
    } else {
      setDatosParseados(true);
    }
  }, [auth]);

  const [datos, setDatos] = useState({ ...datosInitial });
  const [showPassword, setShowPassword] = useState(false);
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setDatos((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [hasAlerta, setHasAlerta] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // si existen campos vacios
    if (datos.correo == "" || datos.password == "") {
      setHasAlerta(true);
      setMensajeAlerta("Existen campos vacios.");
      return;
    }
    // si el correo no tiene formato de correo
    if (!formatoCorreo(datos.correo)) {
      setHasAlerta(true);
      setMensajeAlerta("Formato de correo incorrecto.");
      return;
    }

    // Si no se encuentran incoreherencias.
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(
        autenticar,
        datos.correo,
        datos.password
      );

      // location.reload();
      navigate("/");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-credential":
          // Error con la base de datos
          setHasAlerta(true);
          setMensajeAlerta("Correo o contraseña no valido.");
          break;

        default:
          setMensajeAlerta("Error con la base de datos");

          break;
      }
      setIsLoading(false);
    }
  };
  return (
    datosParseados && (
      <>
        <Header />

        <CajaContenido>
          <BotonQuery datos={datos} />
          <Titulo>Iniciar sesion</Titulo>
          <form onSubmit={(e) => handleSubmit(e)}>
            <WrapInputs>
              <CajaInput>
                <TituloInput>Correo electronico</TituloInput>
                <Input
                  value={datos.correo}
                  onChange={(e) => handleInputs(e)}
                  name="correo"
                  placeholder="Email"
                  type="text"
                />
              </CajaInput>
              <CajaInput>
                <TituloInput>Contraseña</TituloInput>
                <CajaInternaInput>
                  <Input
                    value={datos.password}
                    onChange={(e) => handleInputs(e)}
                    name="password"
                    placeholder="Contraseña"
                    type={showPassword ? "text" : "password"}
                  />
                  <CajaEye>
                    <IconoEye
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </CajaEye>
                </CajaInternaInput>
              </CajaInput>
              {hasAlerta && (
                <CajaErrorAlEnviar>
                  <Parrafo className="danger">{mensajeAlerta}</Parrafo>
                </CajaErrorAlEnviar>
              )}

              <CajaInput className="btn">
                <BtnSimple type="submit" onClick={() => handleSubmit()}>
                  Iniciar sesion
                </BtnSimple>
              </CajaInput>
              <CajaInput className="links">
                <Enlaces to={"/registro"}>Registrarse</Enlaces>
                <Enlaces to={"/recuperar"}>Olvide mi contraseña</Enlaces>
              </CajaInput>
            </WrapInputs>
          </form>
          {isLoading && <ModalLoading />}
        </CajaContenido>
        <Footer />
      </>
    )
  );
}
const CajaContenido = styled.div`
  min-height: 200px;
  padding: 0 25px;
`;
const Titulo = styled(TituloH1)`
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
    margin-bottom: 40px;
  }
  &.links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;

const Enlaces = styled(NavLink)`
  color: ${theme.primary.neutral600};
  display: block;
  position: relative;
  transition: color 25ms;
  border-bottom: 3px solid transparent;
  &:hover {
    color: ${theme.primary.neutral500};
    border-bottom: 3px solid;
  }

  text-decoration: none;
`;
const TituloInput = styled.p`
  color: ${theme.complementary.midnightBlue};
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  color: ${theme.primary.turquoiseBrillante};
  background-color: ${theme.complementary.midnightBlue};
`;

const BtnSimple = styled(BtnGeneral)`
  border: 1px solid ${theme.primary.turquoise};
  /* height: 40px; */
`;
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

const CajaErrorAlEnviar = styled.div`
  width: 100%;
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
