import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "../page/Home";
import DetalleVilla from "../view/DetalleVilla";
import Page404 from "../page/Page404";
import ListaPropiedades from "../page/ListaPropiedades";
import FormContact from "../components/FormContact";
import PageContact from "../page/PageContact";
import Nosotros from "../page/Nosotros";

import ListaBlog from "../page/ListaBlog";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Perfil from "../page/Perfil";
import BarraTopOferta from "../components/BarraTopOferta";
import AvisoTop from "../components/AvisoTop";
import { useAuth } from "../context/AuthContext";
import { sendEmailVerification } from "firebase/auth";
import BotonQuery from "../components/BotonQuery";
import { RutaProtegida } from "../context/RutaProtegida";
import Login from "../Auth/Login";
import Registrarse from "../Auth/Registrarse";
import ResetPassword from "../Auth/ResetPassword";
import MenuLateral from "../components/MenuLateral";
import Manager from "../page/Manager";
import DetalleBlog2 from "../view/DetalleBlog";

export default function MasterRoutes({
  userMaster,
  setDBUsuarios,
  dbUsuarios,
}) {
  const user = useAuth();
  const currentUser = user.usuario;

  // ********************* CONFIGAR CORREO *************************
  const mensajeInitial = `La cuenta del email:${
    userMaster ? userMaster.correo : ""
  } 
             ha sido creada correctamente, ahora debes confirmar que eres el propietario, para ello haz click en el siguiente boton para enviarte un enlace a tu correo.`;
  const [mensajeConfirmar, setMensajeConfirmar] = useState(mensajeInitial);
  const [btnCta, setBtnCta] = useState("Enviar enlace");

  const confirmarEmail = () => {
    var actionCodeSettings = { url: "https://breakkoi.vercel.app/" };
    sendEmailVerification(currentUser, actionCodeSettings)
      .then(function () {
        setMensajeConfirmar("Enlace de confirmacion enviado a su correo.");
        setBtnCta("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {currentUser ? (
        currentUser.emailVerified == false ? (
          <AvisoTop
            mensaje={mensajeConfirmar}
            ctaTexto={btnCta}
            cta={() => confirmarEmail()}
          />
        ) : null
      ) : null}

      {/* <BotonQuery currentUser={currentUser} /> */}
      <Routes>
        <Route path="/" element={<Home userMaster={userMaster} />} />
        <Route
          path="/propiedades/"
          element={<ListaPropiedades userMaster={userMaster} />}
        />
        <Route
          path="/propiedades/:id"
          element={<DetalleVilla userMaster={userMaster} />}
        />
        <Route path="/blog/" element={<ListaBlog />} />
        <Route
          path="/blog/*"
          element={<DetalleBlog2 userMaster={userMaster} />}
        />
        <Route
          path="/contactos/"
          element={<PageContact userMaster={userMaster} />}
        />
        <Route
          path="/admin/*"
          element={
            <Manager setDBUsuarios={setDBUsuarios} dbUsuarios={dbUsuarios} />
          }
        />

        {/* Auth */}
        <Route path="/login/" element={<Login />} />
        <Route path="/registro/" element={<Registrarse />} />
        <Route path="/nosotros/" element={<Nosotros />} />
        <Route
          path="/perfil/"
          element={
            <RutaProtegida>
              <Perfil userMaster={userMaster} />
            </RutaProtegida>
          }
        />
        <Route
          path="/recuperar/"
          element={<ResetPassword userMaster={userMaster} />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>

      {currentUser && <MenuLateral />}
    </>
  );
}
