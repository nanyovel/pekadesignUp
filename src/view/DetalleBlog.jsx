import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { Route, Routes } from "react-router";
import Blog1RazonesVillaVSHotel from "./BLOGS/Blog1RazonesVillaVSHotel";
import Blog2GuiaVacacionesPuntaCana from "./BLOGS/Blog2GuiaVacacionesPuntaCana";
import CajaFinal from "../components/Blog/CajaFinal";
import { useAuth } from "../context/AuthContext";
import { fetchFindAnyContains } from "../libs/FetchFirebase";
import CajaComentario from "../components/Blog/CajaComentario";
import Blog3GuiaComida from "./BLOGS/Blog3GuiaComida";
import Blog4QueEmpacar from "./BLOGS/Blog4QueEmpacar";
import Blog5ActividadesImperdibles from "./BLOGS/Blog5ActividadesImperdibles";
import Blog6NocturnoDisco from "./BLOGS/Blog6NocturnoDisco";
import useWindowWidth from "../components/useWindowWidth";

export default function DetalleBlog2({ userMaster }) {
  const width = useWindowWidth();
  const usuario = useAuth().usuario;
  const [currentPost, setCurrentPost] = useState(null);

  const [relacionados, setRelacionados] = useState([]);

  useEffect(() => {
    if (currentPost) {
      (async () => {
        const condicionesDB = [
          {
            propiedad: "keyWords",
            operador: "array-contains-any",
            valor: currentPost.keyWords,
          },
          { propiedad: "titulo", operador: "!=", valor: currentPost.titulo },
        ];
        const postAux = await fetchFindAnyContains("post", condicionesDB, 4);
        console.log(postAux);
        setRelacionados(postAux);
      })();
    }
  }, [currentPost, usuario]);

  return (
    <>
      <Routes>
        <Route
          path="razones-por-las-que-hospedarte-en-una-villa-es-mejor-que-un-hotel"
          element={
            <Blog1RazonesVillaVSHotel
              setCurrentPost={setCurrentPost}
              currentPost={currentPost}
              relacionados={relacionados}
              width={width}
              userMaster={userMaster}
            />
          }
        />
        <Route
          path="Guia-Definitiva-y-Recomendaciones-para-unas-Vacaciones-Perfectas-en-Punta-Cana"
          element={
            <Blog2GuiaVacacionesPuntaCana
              setCurrentPost={setCurrentPost}
              currentPost={currentPost}
              relacionados={relacionados}
              width={width}
              userMaster={userMaster}
            />
          }
        />
        <Route
          path="delicias-locales-que-comer-en-punta-cana-para-vivir-el-sabor-del-caribe"
          element={
            <Blog3GuiaComida
              setCurrentPost={setCurrentPost}
              currentPost={currentPost}
              relacionados={relacionados}
              width={width}
              userMaster={userMaster}
            />
          }
        />

        <Route
          path="que-empacar-para-unas-vacaciones-en-el-paraiso-punta-cana-edition"
          element={
            <Blog4QueEmpacar
              setCurrentPost={setCurrentPost}
              currentPost={currentPost}
              relacionados={relacionados}
              width={width}
              userMaster={userMaster}
            />
          }
        />
        <Route
          path="actividades-imperdibles-cerca-de-tu-villa-en-punta-cana"
          element={
            <Blog5ActividadesImperdibles
              setCurrentPost={setCurrentPost}
              currentPost={currentPost}
              relacionados={relacionados}
              width={width}
              userMaster={userMaster}
            />
          }
        />
        <Route
          path="luces-ritmo-y-playa-la-vida-nocturna-de-punta-cana-que-no-puedes-perderte"
          element={
            <Blog6NocturnoDisco
              setCurrentPost={setCurrentPost}
              currentPost={currentPost}
              relacionados={relacionados}
              width={width}
              userMaster={userMaster}
            />
          }
        />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}
