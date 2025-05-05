import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TituloH1 } from "../components/ElementosGenerales";
import Card from "./partes03Blog/Card";
import { useAuth } from "../context/AuthContext";
import { fetchGetDocs, fetchGetDocsLimit } from "../libs/FetchFirebase";
import BotonQuery from "../components/BotonQuery";

export default function ListaBlog() {
  const usuario = useAuth().usuario;
  const [listaBlog, setListaBlog] = useState([]);
  const [datosParseados, setDatosParseados] = useState(false);

  useEffect(() => {
    (async () => {
      const listaBlogAux = await fetchGetDocsLimit(
        "post",
        "timestamp",
        "desc",
        10
      );
      console.log(listaBlogAux);
      setListaBlog(listaBlogAux);
      setDatosParseados(true);
    })();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Titulo>Ultimas entradas</Titulo>
        <WrapBlogs>
          {datosParseados &&
            listaBlog
              .filter((blog, index) => {
                if (index < 10) {
                  return <Card key={index} blog={blog} />;
                }
              })
              .map((blog, index) => {
                return <Card key={index} blog={blog} />;
              })}
        </WrapBlogs>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  min-height: 200px;
`;
const Titulo = styled(TituloH1)`
  padding-top: 30px;
`;
const WrapBlogs = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: ${theme.config.paddingLateral};
  padding-right: ${theme.config.paddingLateral};
  gap: 25px;
  margin-bottom: 80px;
  @media screen and (max-width: 1100px) {
    padding-left: 150px;
    padding-right: 150px;
  }
  @media screen and (max-width: 980px) {
    padding-left: 70px;
    padding-right: 70px;
  }
  @media screen and (max-width: 620px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
