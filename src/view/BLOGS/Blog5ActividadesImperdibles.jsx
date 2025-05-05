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
import CajaCTApost from "../../components/Blog/CajaCTApost";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContenedorFinal from "./ContenedorFinal";
import SoyXSideBar from "../../components/Blog/SoyXSideBar";
import OfertaSideBar from "../../components/Blog/OfertaSideBar";

export default function Blog5ActividadesImperdibles({
  relacionados,
  currentPost,
  setCurrentPost,
  width,
  userMaster,
}) {
  const idPost = "yMnhctcyRX6O6Digq6Ie";

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
                    Punta Cana es un paraíso tropical que va mucho más allá de
                    sus impresionantes playas de arena blanca y aguas turquesa.
                    Si te hospedas en una villa privada, tienes la libertad de
                    explorar y disfrutar experiencias únicas que harán de tu
                    viaje algo inolvidable. Aquí te compartimos algunas
                    actividades imperdibles cerca de tu villa en Punta Cana.
                  </Parrafo>

                  <br />
                </BloqueParrafos>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      1. Relájate en las Playas más Espectaculares 🏖️
                    </TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Desde Playa Bávaro hasta Playa Macao, Punta Cana cuenta con
                    algunas de las mejores playas del Caribe. Puedes disfrutar
                    de un día de sol, nadar en aguas cristalinas o practicar
                    deportes acuáticos como paddleboarding y snorkel.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      2. Explora la Isla Saona en un Tour en Catamarán ⛵
                    </TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Uno de los destinos más populares es la Isla Saona, famosa
                    por sus playas paradisíacas y piscinas naturales. Un paseo
                    en catamarán o lancha rápida te permitirá descubrir este
                    rincón del paraíso con un ambiente relajado y vistas
                    impresionantes.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      3. Aventúrate en un Safari por la Naturaleza 🌿
                    </TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Si quieres conocer el lado más auténtico de República
                    Dominicana, un tour en safari es ideal. Podrás visitar
                    plantaciones de cacao y café, conocer comunidades locales y
                    explorar la exuberante naturaleza de la región.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      4. Vive la Aventura en Scape Park 🎢
                    </TituloRazon>
                  </CajaEncabezado>

                  <CajaImgCuerpo>
                    <Img src={ImgTirolesa} className="size60" />
                  </CajaImgCuerpo>
                  <Parrafo>
                    Ubicado en Cap Cana, Scape Park es un parque lleno de
                    aventuras, desde tirolesas y cenotes escondidos hasta
                    cavernas y actividades acuáticas. Perfecto para quienes
                    buscan emoción y contacto con la naturaleza.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      5. Nada en el Hoyo Azul, un Cenote Mágico 💦
                    </TituloRazon>
                  </CajaEncabezado>
                  <WrapConImgSide>
                    <CajaImgCuerpo className="size40 nada">
                      <Img src={ImgCenote} className="size100" />
                    </CajaImgCuerpo>
                    <WrapParrafo className="nada">
                      <Parrafo className="">
                        El Hoyo Azul es un cenote de agua dulce con un color
                        azul intenso que parece sacado de una postal. Es un
                        lugar increíble para nadar y disfrutar de la belleza
                        natural de Punta Cana.
                      </Parrafo>{" "}
                      <br />
                      <Parrafo className="">
                        Ubicado dentro del impresionante Scape Park en Cap Cana,
                        el Hoyo Azul es una joya natural oculta entre la
                        exuberante vegetación de Punta Cana. Este cenote de agua
                        dulce se encuentra al pie de un acantilado de piedra
                        caliza, creando un paisaje fascinante con aguas de un
                        azul profundo y cristalino que parecen sacadas de un
                        sueño.
                      </Parrafo>{" "}
                    </WrapParrafo>
                  </WrapConImgSide>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      6. Disfruta de una Cena Romántica en la Playa 🍷
                    </TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Si buscas una experiencia más relajante, muchas villas y
                    restaurantes ofrecen cenas privadas frente al mar. Disfruta
                    de mariscos frescos y una copa de vino mientras el sol se
                    esconde en el horizonte.
                  </Parrafo>
                </CajaRazon>
                {width <= 680 && <OfertaSideBar single={true} />}
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      7. Juega Golf con Vistas al Caribe ⛳
                    </TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Punta Cana es conocida por sus campos de golf de clase
                    mundial. Si eres amante del golf, no puedes perderte la
                    oportunidad de jugar en campos diseñados por grandes
                    expertos, como Punta Espada o Corales.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      8. Explora Altos de Chavón, un Pueblo Mediterráneo en el
                      Caribe 🎭
                    </TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Ubicado a una hora de Punta Cana, Altos de Chavón es un
                    pueblo inspirado en la arquitectura mediterránea. Allí
                    encontrarás galerías de arte, tiendas, restaurantes y un
                    impresionante anfiteatro con vista al río Chavón.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      9. Diviértete en Coco Bongo, la Fiesta más Espectacular 🎉
                    </TituloRazon>
                  </CajaEncabezado>
                  <CajaImgCuerpo className="">
                    <Img src={ImgCocoBongo} className="size100" />
                  </CajaImgCuerpo>
                  <Parrafo>
                    Si quieres disfrutar de la vida nocturna, Coco Bongo es el
                    lugar perfecto. Con espectáculos en vivo, música y una gran
                    atmósfera, es una experiencia que no puedes perderte.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      10. Nado con Delfines y Encuentros con Animales Exóticos
                      🐬
                    </TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    En Dolphin Explorer o Manatí Park, puedes interactuar con
                    delfines, tiburones nodriza y otras especies exóticas. Una
                    actividad ideal para familias y amantes de la vida marina.
                  </Parrafo>
                </CajaRazon>

                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>Conclusión</TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Punta Cana tiene una infinidad de actividades para todos los
                    gustos, desde aventuras extremas hasta experiencias
                    relajantes. Al hospedarte en una villa privada, tienes la
                    flexibilidad de planear tu itinerario y descubrir lo mejor
                    del Caribe a tu ritmo. ¡Prepara tu viaje y vive unas
                    vacaciones inolvidables en Punta Cana! 🌴✨
                  </Parrafo>
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
      width: 100%;
    }
  }
`;

const Btnsimple = styled(BtnGeneral)``;
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
      width: 100%;
    }
  }
`;
