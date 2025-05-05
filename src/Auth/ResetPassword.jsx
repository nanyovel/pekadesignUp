import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BtnGeneral, TituloSeccion } from "../components/ElementosGenerales";
import { NavLink } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

export default function ResetPassword() {
  // ******************** ENVIANDO A LA BASE DE DATOS******************** //
  const auth = getAuth();
  auth.languageCode = "es";
  const currentUser = auth.currentUser;

  const [correo, setCorreo] = useState("");
  const handleInput = (e) => {
    setCorreo(e.target.value);
  };

  // Reiniciar cuando el usuario tiene sesion iniciada
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const reiniciarPass = async () => {
    try {
      await sendPasswordResetEmail(auth, currentUser.email);
      setMensajeEnviado(true);
    } catch (error) {
      console.log(error);
      console.log("error con la base de datos");
    }
  };

  // Reiniciar cuando el usuario no tiene sesion iniciada
  const [mensaje, setMensaje] = useState();
  const [hasMensaje, setHasMensaje] = useState(false);
  const [tipoMensaje, setTipoMensaje] = useState("");
  const enviarLink = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, correo);
      setCorreo("");
      setMensaje("Enlace enviado correctamente!");
      setHasMensaje(true);
      setTipoMensaje("success");
    } catch (error) {
      console.log(error);
      console.log("Error con la base de datos.");
    }
  };

  return (
    <>
      <Header />
      <CajaContenido>
        <Titulo>Reestablecer contraseña</Titulo>
        <Subtitulo>
          Enviaremos un enlace a tu correo de reestablecimiento de contraseña.
        </Subtitulo>
        {!currentUser && (
          <form action="" onSubmit={(e) => enviarLink(e)}>
            <WrapInputs>
              {hasMensaje && (
                <CajaMensaje>
                  <Parrafo className={tipoMensaje}>{mensaje}</Parrafo>
                </CajaMensaje>
              )}
              <CajaInput>
                <TituloInput>Correo electronico</TituloInput>
                <Input
                  value={correo}
                  placeholder="Correo"
                  onChange={(e) => handleInput(e)}
                  type="text"
                />
              </CajaInput>

              <CajaInput className="btn">
                <BtnSimple
                  type="submit"
                  onSubmit={(e) => enviarLink(e)}
                  onClick={(e) => enviarLink(e)}
                >
                  Enviar enlace
                </BtnSimple>
              </CajaInput>
            </WrapInputs>
          </form>
        )}
        {currentUser &&
          (!mensajeEnviado ? (
            <CajaInternal>
              <CajaSubInterna>
                <ParrafoReset>
                  Si deseas reiniciar tu contraseña, haz click en el siguiente
                  botón y se te enviará un enlace a tu correo para restablecer.
                </ParrafoReset>
              </CajaSubInterna>
              <BtnSimple onClick={() => reiniciarPass()}>
                Enviar enlace
              </BtnSimple>
            </CajaInternal>
          ) : (
            <CajaInternal>
              <CajaSubInterna>
                <ParrafoReset>
                  Hemos enviado un enlace de reestablecimiento de contraseña a
                  tu correo.
                </ParrafoReset>
              </CajaSubInterna>
              <BtnSimple onClick={() => reiniciarPass()}>
                Volver a enviar
              </BtnSimple>
            </CajaInternal>
          ))}
      </CajaContenido>
      <Footer />
    </>
  );
}

const CajaContenido = styled.div`
  min-height: 200px;
  margin-top: 60px;
  margin-bottom: 80px;
  padding: 0 25px;
`;
const Titulo = styled(TituloSeccion)`
  /* padding-top: 30px; */
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
  margin-top: 25px;
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
`;

const Subtitulo = styled.h3`
  color: ${theme.secondary.coral};
  font-size: 1.4rem;
  text-decoration: underline;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
`;

const CajaMensaje = styled.div`
  width: 100%;
  background-color: ${theme.success};
  padding: 4px;
`;
const Parrafo = styled.p`
  font-size: 1.4rem;
  /* font-weight: bold; */
  &.success {
    color: ${theme.success};
    color: white;
  }
`;

const CajaInternal = styled.div`
  width: 80%;
  min-height: 200px;
  border-radius: 10px;
  background-color: ${theme.primary.neutral600};
  box-shadow: ${theme.config.sombra};
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;
const CajaSubInterna = styled.div`
  width: 80%;
  min-height: 150px;
  border: 2px solid ${theme.warning};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-shadow: 3px 7px 8px 0px #ffc107c5;
`;
const ParrafoReset = styled.p`
  color: ${theme.primary.turquoise};
  font-size: 1.4rem;
`;
