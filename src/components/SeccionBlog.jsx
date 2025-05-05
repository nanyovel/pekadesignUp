import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../config/theme";

import { fetchGetDocsLimit } from "../libs/FetchFirebase";
import { NavLink } from "react-router";

export default function SeccionBlog() {
  const [ultimosPost, setUltimosPost] = useState(null);
  useEffect(() => {
    (async () => {
      const romo = await fetchGetDocsLimit("post", "timestamp", "desc", 5);
      setUltimosPost(romo);
    })();
  }, []);
  const [isMovil, setIsMovil] = useState(false);
  useEffect(() => {
    console.log(ultimosPost);
    const hasMovil = window.screen.width < 620 ? true : false;
    setIsMovil(hasMovil);
  }, [window.screen.width, ultimosPost]);
  return (
    <>
      {ultimosPost && !isMovil && (
        <Container>
          <CajaInterna className="izquieda">
            <Enlace className="destacada" to={"/blog/" + ultimosPost[1].url}>
              <CajaImg className="destacada">
                <Img src={ultimosPost[1].imagenDestacada} />
              </CajaImg>
              <CajaTitulo className="destacada">
                <Titulo>{ultimosPost[1].titulo}</Titulo>
              </CajaTitulo>
            </Enlace>
            <Enlace className="subDestacada" to={"/blog/" + ultimosPost[0].url}>
              <CajaImg className="subDestacada">
                <Img src={ultimosPost[0].imagenDestacada} />
              </CajaImg>
              <CajaTitulo className="subDestacada">
                <Titulo>{ultimosPost[0].titulo}</Titulo>
              </CajaTitulo>
            </Enlace>
          </CajaInterna>
          <CajaInterna className="derecha">
            <Enlace className="itemsRigt" to={"/blog/" + ultimosPost[2].url}>
              <CajaImg className="itemsRigt">
                <Img src={ultimosPost[2].imagenDestacada} />
              </CajaImg>
              <CajaTitulo className="itemsRigt">
                <Titulo>{ultimosPost[2].titulo}</Titulo>
              </CajaTitulo>
            </Enlace>
            <Enlace className="itemsRigt" to={"/blog/" + ultimosPost[3].url}>
              <CajaImg className="itemsRigt">
                <Img src={ultimosPost[3].imagenDestacada} />
              </CajaImg>
              <CajaTitulo className="itemsRigt">
                <Titulo>{ultimosPost[3].titulo}</Titulo>
              </CajaTitulo>
            </Enlace>
            <Enlace className="itemsRigt" to={"/blog/" + ultimosPost[4].url}>
              <CajaImg className="itemsRigt">
                <Img src={ultimosPost[4].imagenDestacada} />
              </CajaImg>
              <CajaTitulo className="itemsRigt">
                <Titulo>{ultimosPost[4].titulo}</Titulo>
              </CajaTitulo>
            </Enlace>
          </CajaInterna>
        </Container>
      )}

      <ContainerMovil>
        {ultimosPost &&
          isMovil &&
          ultimosPost.map((post, index) => {
            return (
              <Enlace
                key={index}
                className="destacada"
                to={"/blog/" + post.url}
              >
                <CajaImg className="destacada">
                  <Img src={post.imagenDestacada} />
                </CajaImg>
                <CajaTitulo className="destacada">
                  <Titulo>{post.titulo}</Titulo>
                </CajaTitulo>
              </Enlace>
            );
          })}
      </ContainerMovil>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  height: 550px;
`;

const CajaInterna = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.izquieda {
    width: 70%;
    margin-right: 15px;
  }
  &.derecha {
    width: 30%;
  }
`;
const Enlace = styled(NavLink)`
  cursor: pointer;
  display: block;
  border: 1px solid black;
  transition: all ease 0.2s;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  background-color: ${theme.primary.turquoiseTenue};
  text-decoration: none;
  &:hover {
    -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  }
  &.destacada {
    height: 69%;
  }
  &.subDestacada {
    height: 28%;
    display: flex;
    flex-direction: row-reverse;
  }
  &.itemsRigt {
    height: 32%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const Enlace2 = styled.a`
  cursor: pointer;
  display: block;
  border: 1px solid black;
  transition: all ease 0.2s;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  &:hover {
    -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  }
  &.destacada {
    height: 69%;
  }
  &.subDestacada {
    height: 28%;
    display: flex;
    flex-direction: row-reverse;
  }
  &.itemsRigt {
    height: 32%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const CajaImg = styled.div`
  overflow: hidden;
  &.destacada {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.subDestacada {
    width: 70%;
    height: 100%;
    background-color: green;
  }
  &.itemsRigt {
    height: 70%;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom: 1px solid black;
  /* border-radius: 4px; */
`;
const CajaTitulo = styled.div`
  padding: 5px;
  font-size: 1.2rem;
  position: absolute;
  bottom: 0;
  z-index: 10;
  background-color: black;
  color: ${theme.secondary.gold};

  &.destacada {
    height: auto;
    background-color: black;
    color: ${theme.secondary.gold};
  }
  &.subDestacada {
    display: flex;
    align-items: center;
    position: sticky;
  }
  &.itemsRigt {
    height: 30%;
    font-size: 1rem;
  }
`;

const Titulo = styled.h2`
  color: inherit;
  font-size: 1.1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 440px) {
    font-size: 0.9rem;
  }
`;

const ContainerMovil = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
