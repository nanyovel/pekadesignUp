import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { BtnGeneral, TituloH1 } from "../../components/ElementosGenerales";

import SideBarBlog from "../../components/Blog/SideBarBlog";
import { obtenerDocPorId } from "../../libs/FetchFirebase";
import { useNavigate } from "react-router";
import ImgCenote from "./../../../public/img/blog/cenote.jpg";
import ImgTirolesa from "./../../../public/img/blog/tirolesa.jpg";
import ImgCocoBongo from "./../../../public/img/blog/cocoBongo.jpeg";
import ImgCasino from "./../../../public/img/blog/casino.jpg";
import ImgDisco from "./../../../public/img/blog/disco1.png";
import CajaCTApost from "../../components/Blog/CajaCTApost";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContenedorFinal from "./ContenedorFinal";
import OfertaSideBar from "../../components/Blog/OfertaSideBar";
import SoyXSideBar from "../../components/Blog/SoyXSideBar";

export default function Blog6NocturnoDisco({
  relacionados,
  currentPost,
  setCurrentPost,
  width,
  userMaster,
}) {
  const idPost = "ErvDEdkszsJiMaMx5XDP";

  useEffect(() => {
    (async () => {
      const post = await obtenerDocPorId("post", idPost);
      console.log(post);
      setCurrentPost(post);
    })();
  }, []);
  const navigate = useNavigate();
  return (
    currentPost && (
      <>
        <Header />
        <Container>
          <CajaTitulo>
            <Titulo>{currentPost.titulo}</Titulo>
          </CajaTitulo>
          <WrapContenido>
            <CajaInterna className="izq">
              <Img src={currentPost.imagenDestacada} />

              <CajaTexto>
                <BloqueParrafos>
                  <Parrafo className="introductorio">
                    Cuando el sol se oculta en el horizonte y las palmeras se
                    mecen bajo la brisa cálida del Caribe,{" "}
                    <b>
                      Punta Cana cobra vida con un espectáculo nocturno
                      vibrante.{" "}
                    </b>{" "}
                    Desde exclusivos clubes de playa hasta discotecas llenas de
                    energía y bares escondidos con los mejores cócteles
                    tropicales, la vida nocturna de Punta Cana ofrece algo para
                    todos los gustos.
                  </Parrafo>

                  <br />
                </BloqueParrafos>
                {width <= 680 && <OfertaSideBar single={true} />}
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      1. Beach Clubs: Fiesta con los Pies en la Arena 🌴🍹
                    </TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Empieza tu noche en uno de los famosos beach clubs, donde la
                    música y el mar se combinan en un ambiente relajado pero
                    sofisticado. Lugares como Pearl Beach Club y Huracán Café
                    ofrecen vistas impresionantes, música en vivo y cócteles
                    refrescantes que marcan el inicio de una noche épica.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      2. Discotecas de Clase Mundial 🎶💃
                    </TituloRazon>
                  </CajaEncabezado>
                  <CajaImgCuerpo className="">
                    <Img src={ImgCocoBongo} className="size100" />
                  </CajaImgCuerpo>
                  <Parrafo>
                    Si lo tuyo es bailar hasta el amanecer, Punta Cana alberga
                    algunas de las mejores discotecas del Caribe. Coco Bongo te
                    sorprenderá con su espectáculo de luces, acróbatas y música
                    en vivo, mientras que Imagine Cave Club, una discoteca
                    dentro de una cueva natural, te hará vibrar con sus ritmos
                    latinos y electrónicos.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      3. Rooftops y Bares con Encanto 🍸🌆
                    </TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Para una noche más relajada pero con estilo, los bares en
                    azoteas ofrecen vistas impresionantes de la ciudad
                    iluminada. Kan Drinks House y Versus Marina son opciones
                    perfectas para disfrutar de un buen trago mientras la brisa
                    marina te envuelve.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      4. Casinos y Entretenimiento VIP 🎰✨
                    </TituloRazon>
                  </CajaEncabezado>
                  <CajaImgCuerpo className="">
                    <Img src={ImgCasino} className="size100" />
                  </CajaImgCuerpo>

                  <Parrafo>
                    Si te gusta la adrenalina, prueba suerte en los casinos de
                    los resorts más lujosos como Hard Rock Hotel & Casino.
                    Además de los juegos de azar, muchos ofrecen espectáculos en
                    vivo y exclusivas fiestas nocturnas.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      5. Ritmos Tropicales y Cultura Dominicana 🇩🇴🎵
                    </TituloRazon>
                  </CajaEncabezado>
                  <WrapConImgSide>
                    <CajaImgCuerpo className="size40 nada">
                      <Img src={ImgDisco} className="size100" />
                    </CajaImgCuerpo>
                    <WrapParrafo className="nada">
                      <Parrafo className="">
                        No puedes dejar Punta Cana sin sumergirte en su cultura
                        musical. Baila bachata y merengue en lugares como Drink
                        Point o La Santa, donde los locales y turistas se unen
                        en una fiesta llena de energía y sabor dominicano.
                      </Parrafo>{" "}
                      <br />
                      <Parrafo className="">
                        Ya sea que busques una noche de fiesta descontrolada o
                        una velada relajada junto al mar, Punta Cana tiene la
                        combinación perfecta de luces, ritmo y playa. ¿Listo
                        para descubrirla? 🌙🔥
                      </Parrafo>{" "}
                    </WrapParrafo>
                  </WrapConImgSide>
                </CajaRazon>

                <CajaCTApost />
              </CajaTexto>
              {width <= 680 && <SoyXSideBar single={true} />}
            </CajaInterna>

            {width > 680 && (
              <CajaInterna className="der">
                <SideBarBlog relacionados={relacionados} width={width} />
              </CajaInterna>
            )}
          </WrapContenido>
        </Container>
        {relacionados && (
          <ContenedorFinal
            width={width}
            relacionados={relacionados}
            userMaster={userMaster}
            currentPost={currentPost}
          />
        )}
        <Footer />
      </>
    )
  );
}

const Container = styled.div`
  min-height: 100px;
`;

const CajaTitulo = styled.div`
  height: 200px;
  background-color: ${theme.secondary.coral};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;
  margin-top: 80px;
  padding: 0 80px;
  @media screen and (max-width: 750px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 640px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 620px) {
    padding: 0 15px;
  }
`;
const Titulo = styled(TituloH1)`
  margin-top: 40px;
  width: 100%;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 2.6rem;
  @media screen and (max-width: 750px) {
    font-size: 2.1rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 1.9rem;
  }
  @media screen and (max-width: 620px) {
    font-size: 1.5rem;
  }
`;

const WrapContenido = styled.div`
  width: 100%;
  display: flex;
  padding-left: ${theme.config.paddingLateral};
  padding-right: ${theme.config.paddingLateral};
  @media screen and (max-width: 1200px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media screen and (max-width: 1020px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media screen and (max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const CajaInterna = styled.div`
  min-height: 200px;
  &.izq {
    width: 70%;
    @media screen and (max-width: 890px) {
      width: 60%;
    }
    @media screen and (max-width: 680px) {
      width: 100%;
    }
  }
  &.der {
    width: 30%;
    @media screen and (max-width: 890px) {
      width: 40%;
    }
  }
`;
const Img = styled.img`
  width: 100%;
`;
const CajaTexto = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  margin-bottom: 30px;
`;
const BloqueParrafos = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;
const Parrafo = styled.p`
  width: 85%;
  text-align: start;
  font-size: 1.2rem;
  line-height: 30px;
  /* border: 1px solid red; */
  color: ${theme.primary.neutral600};
  &.introductorio {
    width: 100%;
    background-color: ${theme.primary.neutral200};
    margin-top: -20px;
    margin-bottom: 15px;
    padding: 4px;
  }
`;
const CajaRazon = styled.div`
  margin-bottom: 25px;
  width: 100%;
`;
const CajaEncabezado = styled.div`
  width: 100%;
  min-height: 60px;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: start;
  padding: 5px;
  padding-left: 10px;
  align-items: center;
  border-left: 4px solid ${theme.secondary.coral};
`;
const TituloRazon = styled.h2`
  color: ${theme.primary.turquoise};
  width: 100%;
`;
const CajaImgCuerpo = styled.div`
  margin-bottom: 25px;
  width: 100%;
  padding: 15px;
  &.size40 {
    width: 40%;
  }
  &.nada {
    @media screen and (max-width: 840px) {
      width: 70%;
    }
    @media screen and (max-width: 700px) {
      width: 90%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;
const WrapConImgSide = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;
const WrapParrafo = styled.div`
  width: 50%;
  &.nada {
    @media screen and (max-width: 840px) {
      width: 70%;
    }
    @media screen and (max-width: 700px) {
      width: 90%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;
