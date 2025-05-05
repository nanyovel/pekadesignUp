import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { BtnGeneral, TituloH1 } from "../../components/ElementosGenerales";
import ImgVilla1 from "./../../assets/store/villa1.jpg";
import ImgMaleta from "./../../../public/img/blog/maleta.png";

import ImgGirl from "./../../../public/img/girlSand.jpg";
import SideBarBlog from "../../components/Blog/SideBarBlog";
import { fetchGetDocs, obtenerDocPorId } from "../../libs/FetchFirebase";
import { useAuth } from "../../context/AuthContext";
import BotonQuery from "../../components/BotonQuery";
import { useNavigate } from "react-router";
import CajaCTApost from "../../components/Blog/CajaCTApost";
import Header from "../../components/Header";
import ContenedorFinal from "./ContenedorFinal";
import Footer from "../../components/Footer";
import SoyXSideBar from "../../components/Blog/SoyXSideBar";
import OfertaSideBar from "../../components/Blog/OfertaSideBar";

export default function Blog4QueEmpacar({
  relacionados,
  currentPost,
  setCurrentPost,
  userMaster,
  width,
}) {
  const idPost = "E1JSVyPjSh9v1G1O3Z77";

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
                    Punta Cana es el destino soñado para quienes buscan sol,
                    playa y diversión sin preocupaciones. Pero para que tu
                    experiencia sea perfecta, es esencial empacar de manera
                    inteligente. ¿No sabes qué llevar? No te preocupes, aquí te
                    dejamos la guía definitiva con todo lo que necesitas para
                    disfrutar al máximo de tu estadía en el paraíso.
                  </Parrafo>

                  <br />
                </BloqueParrafos>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>1-🌞 Ropa Ligera y Cómoda</TituloRazon>
                  </CajaEncabezado>
                  <SubTituloRazon>
                    El clima en Punta Cana es cálido durante todo el año, así
                    que opta por prendas frescas y transpirables como:
                  </SubTituloRazon>
                  <ListaRazon className="noListStyle">
                    <ElementosRazon>
                      ✔️ Ropa de lino o algodón para mantenerte fresco..
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Trajes de baño (¡lleva más de uno para rotarlos!).
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Salidas de playa, pareos o kimonos.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Pantalones cortos, camisetas y vestidos ligeros.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Un atuendo elegante-casual para cenas o salidas
                      nocturnas.
                    </ElementosRazon>
                  </ListaRazon>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>2- 🏖️ Calzado Adecuado</TituloRazon>
                  </CajaEncabezado>
                  <ListaRazon className="noListStyle">
                    <ElementosRazon>
                      ✔️ Sandalias cómodas para la playa.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Zapatillas deportivas si planeas hacer excursiones o
                      caminatas.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Zapatos elegantes o casuales para salir por la noche.
                    </ElementosRazon>
                  </ListaRazon>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>🕶️ Accesorios Esenciales</TituloRazon>
                  </CajaEncabezado>
                  <ListaRazon className="noListStyle">
                    <ElementosRazon>
                      ✔️ Gafas de sol con protección UV.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Sombrero o gorra para protegerte del sol.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Bolsa de playa impermeable para llevar lo necesario.
                    </ElementosRazon>
                  </ListaRazon>
                </CajaRazon>
                {width <= 680 && <OfertaSideBar single={true} />}
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      🌊 Protección Solar y Cuidado Personal
                    </TituloRazon>{" "}
                  </CajaEncabezado>

                  <ListaRazon className="noListStyle">
                    <ElementosRazon>
                      ✔️ Protector solar de amplio espectro y resistente al
                      agua.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ After sun o aloe vera para calmar la piel.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Repelente de insectos, especialmente si harás
                      actividades al aire libre.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Productos de higiene personal y maquillaje ligero.
                    </ElementosRazon>
                  </ListaRazon>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>📷 Tecnología y Gadgets Útiles</TituloRazon>
                  </CajaEncabezado>
                  <ListaRazon className="noListStyle">
                    <ElementosRazon>
                      ✔️ Teléfono y cargador (¡no olvides un cargador
                      portátil!).
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Cámara o GoPro para capturar cada momento.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Adaptador de corriente universal si viajas desde otro
                      país.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Kindle o libro favorito para relajarte en la playa.
                    </ElementosRazon>
                  </ListaRazon>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>🛂 Documentos y Dinero</TituloRazon>
                  </CajaEncabezado>
                  <ListaRazon className="noListStyle">
                    <ElementosRazon>
                      ✔️ Pasaporte y copias digitales por seguridad.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Tarjetas de crédito/débito y algo de efectivo en
                      dólares o pesos dominicanos.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Seguro de viaje en caso de emergencias.
                    </ElementosRazon>
                  </ListaRazon>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>
                      🌴 Extras para una Experiencia Increíble
                    </TituloRazon>
                  </CajaEncabezado>
                  <ListaRazon className="noListStyle">
                    <ElementosRazon>
                      ✔️ Snorkel si quieres explorar las aguas cristalinas.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Termo reutilizable para mantenerte hidratado.
                    </ElementosRazon>
                    <ElementosRazon>
                      ✔️ Snacks ligeros para excursiones.
                    </ElementosRazon>
                  </ListaRazon>
                </CajaRazon>
                <CajaImgCuerpo>
                  <Img src={ImgMaleta} className="size40" />
                </CajaImgCuerpo>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>¡Listo para el paraíso!</TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Siguiendo esta guía, estarás preparado para disfrutar sin
                    preocupaciones de cada rincón de
                    <b>Punta Cana.</b>
                    Ahora solo queda relajarte, sumergirte en sus aguas turquesa
                    y vivir unas vacaciones inolvidables.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>📍 ¿Aún sin hospedaje?</TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    <b> Nuestras villas en Punta Cana </b>te ofrecen comodidad,
                    lujo y la mejor experiencia para unas vacaciones de ensueño.
                    ¡Reserva ahora y vive el Caribe al máximo! 🌴✨
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
const Container = styled.div`
  min-height: 100px;
`;

const Img = styled.img`
  width: 100%;
  &.size40 {
    width: 40%;
  }
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
`;
const CajaImgCuerpo = styled.div`
  margin-bottom: 25px;
`;
const SubTituloRazon = styled.h3`
  color: ${theme.secondary.coral};
`;
const ListaRazon = styled.ul`
  /* color: ${theme.primary.turquoise}; */
  padding: 15px;
  padding-left: 35px;
  &.noListStyle {
    list-style: none;
  }
`;
const ElementosRazon = styled.li`
  margin-bottom: 8px;
  color: ${theme.primary.neutral600};
`;
const Btnsimple = styled(BtnGeneral)``;
