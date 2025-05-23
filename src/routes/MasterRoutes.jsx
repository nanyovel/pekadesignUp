import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "../page/Home";
import Page404 from "../page/Page404";
import Nosotros from "../page/Nosotros";

import AvisoTop from "../components/AvisoTop";
import { sendEmailVerification } from "firebase/auth";

import MenuLateral from "../components/MenuLateral";
import PageContact from "../page/PageContact";

export default function MasterRoutes({ setDBUsuarios, dbUsuarios }) {
  const confirmarEmail = () => {};

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contactos/" element={<PageContact />} />
        {/* <Route
          path="/admin/*"
          element={
            <Manager setDBUsuarios={setDBUsuarios} dbUsuarios={dbUsuarios} />
          }
        /> */}

        {/* Auth */}
        {/* <Route path="/login/" element={<Login />} /> */}
        {/* <Route path="/registro/" element={<Registrarse />} /> */}
        <Route path="/nosotros/" element={<Nosotros />} />
        {/* <Route
          path="/perfil/"
          element={
            <RutaProtegida>
              <Perfil />
            </RutaProtegida>
          }
        />
        <Route
          path="/recuperar/"
          element={<ResetPassword />}
        /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>

      {/* {true && <MenuLateral />} */}
    </>
  );
}
