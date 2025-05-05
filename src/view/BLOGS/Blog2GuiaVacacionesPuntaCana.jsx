import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { TituloH1 } from "../../components/ElementosGenerales";
import ImgVilla1 from "./../../assets/store/villa1.jpg";
import ImgGirl from "./../../../public/img/girlSand.jpg";
import ImgSancocho from "./../../../public/img/sancocho.webp";
import SideBarBlog from "../../components/Blog/SideBarBlog";
import { useAuth } from "../../context/AuthContext";
import { obtenerDocPorId } from "../../libs/FetchFirebase";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OfertaSideBar from "../../components/Blog/OfertaSideBar";
import SoyXSideBar from "../../components/Blog/SoyXSideBar";
import ContenedorFinal from "./ContenedorFinal";

export default function Blog2GuiaVacacionesPuntaCana({
  relacionados,
  currentPost,
  setCurrentPost,
  width,
  userMaster,
}) {
  const idPost = "v7d6oxSFFeYzW5kd3L1c";

  useEffect(() => {
    (async () => {
      const post = await obtenerDocPorId("post", idPost);
      setCurrentPost(post);
    })();
  }, []);
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
                  <Parrafo className="">
                    Punta Cana es sinónimo de playas paradisíacas, brisa
                    tropical y diversión ilimitada. Pero, como todo buen
                    destino, unas vacaciones perfectas requieren algo de
                    planeación.
                  </Parrafo>
                  {/* <br /> */}
                  <br />
                  <Parrafo>
                    Para que no te pierdas nada de lo que este rincón del{" "}
                    <b>Caribe</b> tiene para ofrecer, hemos preparado esta guía
                    definitiva con recomendaciones prácticas que harán de tu
                    viaje una experiencia inolvidable.
                  </Parrafo>
                  <br />

                  {/*  */}
                </BloqueParrafos>
                <CajaIndiceContenido>
                  <TituloIndiceContenido>
                    Índice de Contenidos
                  </TituloIndiceContenido>
                  <Lista>
                    <Elemento>
                      <Ancla href="#epocaIdeal">
                        ¿Cuándo es la Mejor Época para Visitar Punta Cana?
                      </Ancla>
                    </Elemento>
                    <Elemento>
                      <Ancla href="#imprescindibles">
                        Imprescindibles para Empacar
                      </Ancla>
                    </Elemento>
                    <Elemento>
                      <Ancla href="#playasVisitar">
                        Playas que No Puedes Dejar de Visitar
                      </Ancla>
                    </Elemento>

                    <Elemento>
                      <Ancla href="#actividadesExcursiones">
                        Actividades y Excursiones Imperdibles
                      </Ancla>
                    </Elemento>
                    <Elemento>
                      <Ancla href="#gastronomia">
                        Gastronomía Dominicana: ¡Una delicia para el paladar!
                      </Ancla>
                    </Elemento>
                    <Elemento>
                      <Ancla href="#consejosParaMoverte">
                        Consejos para Moverte por Punta Cana
                      </Ancla>
                    </Elemento>
                    <Elemento>
                      <Ancla href="#queEvitar">
                        ¿Qué Evitar en Punta Cana?
                      </Ancla>
                    </Elemento>
                  </Lista>
                </CajaIndiceContenido>
                <CajaRazon id="epocaIdeal">
                  <CajaEncabezado>
                    <TituloRazon>
                      1-¿Cuándo es la Mejor Época para Visitar Punta Cana?
                    </TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Aunque Punta Cana tiene un clima cálido durante todo el año,
                    los meses de diciembre a abril son ideales, ya que coinciden
                    con la temporada seca. Si buscas evitar multitudes y
                    encontrar mejores precios, considera viajar entre mayo y
                    noviembre, pero ten en cuenta que esta es la temporada de
                    lluvias, aunque las precipitaciones suelen ser breves.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon id="imprescindibles">
                  <CajaEncabezado>
                    <TituloRazon>2-Imprescindibles para Empacar</TituloRazon>
                  </CajaEncabezado>
                  <SubTituloRazon>No olvides llevar:</SubTituloRazon>
                  <ListaRazon>
                    <ElementosRazon>Ropa ligera y cómoda.</ElementosRazon>
                    <ElementosRazon>
                      Protector solar resistente al agua.
                    </ElementosRazon>
                    <ElementosRazon>Repelente de insectos.</ElementosRazon>
                    <ElementosRazon>
                      Trajes de baño (¡sí, más de uno!).
                    </ElementosRazon>
                    <ElementosRazon>
                      Calzado para caminar si planeas explorar.
                    </ElementosRazon>
                    <ElementosRazon>
                      Tip adicional: Lleva dólares americanos, ya que son
                      ampliamente aceptados.
                    </ElementosRazon>
                  </ListaRazon>
                </CajaRazon>
                <CajaRazon id="playasVisitar">
                  <CajaEncabezado>
                    <TituloRazon>
                      3-Playas que No Puedes Dejar de Visitar
                    </TituloRazon>
                  </CajaEncabezado>
                  <ListaRazon>
                    <ElementosRazon>
                      <b>Playa Bávaro: </b>
                      La más popular, conocida por su arena blanca y aguas
                      cristalinas.
                    </ElementosRazon>
                    <ElementosRazon>
                      <b> Playa Macao:</b> Perfecta para los amantes del surf y
                      paisajes vírgenes.
                    </ElementosRazon>
                    <ElementosRazon>
                      <b> Playa Juanillo:</b> Menos concurrida, ideal para
                      relajarte en tranquilidad.
                    </ElementosRazon>
                  </ListaRazon>
                  <Parrafo>
                    Cada playa tiene su propio encanto, así que planifica tiempo
                    para explorar varias.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon id="actividadesExcursiones">
                  <CajaEncabezado>
                    <TituloRazon>
                      4-Actividades y Excursiones Imperdibles
                    </TituloRazon>
                  </CajaEncabezado>
                  <SubTituloRazon>
                    Punta Cana no es solo sol y playa. Aquí tienes actividades
                    que enriquecerán tu experiencia:
                  </SubTituloRazon>
                  <ListaRazon>
                    <ElementosRazon>
                      <b>Isla Saona: </b> Un paraíso tropical accesible en
                      catamarán o lancha rápida
                    </ElementosRazon>
                    <ElementosRazon>
                      <b>Hoyo Azul:</b> Un cenote natural con aguas turquesas
                      impresionantes.
                    </ElementosRazon>
                    <ElementosRazon>
                      <b>Excursión en buggies:</b> Aventura por caminos de
                      tierra y paisajes rurales.
                    </ElementosRazon>
                    <ElementosRazon>
                      <b>Avistamiento de ballenas en Samaná:</b> Entre enero y
                      marzo, una experiencia única.
                    </ElementosRazon>
                  </ListaRazon>
                </CajaRazon>
                {width <= 680 && <OfertaSideBar single={true} />}
                <CajaRazon id="gastronomia">
                  <CajaEncabezado>
                    <TituloRazon>
                      5-Gastronomía Dominicana: ¡Una delicia para el paladar!
                    </TituloRazon>
                  </CajaEncabezado>
                  <Img className="sancocho" src={ImgSancocho} />
                  <SubTituloRazon>No te vayas sin probar:</SubTituloRazon>
                  <ListaRazon>
                    <ElementosRazon>
                      <b>Mangú:</b> Puré de plátano verde, típico en desayunos.
                    </ElementosRazon>
                    <ElementosRazon>
                      <b>Sancocho:</b> Un guiso tradicional que combina carnes y
                      tubérculos.
                    </ElementosRazon>
                    <ElementosRazon>
                      <b>Pescado frito:</b> Fresco y sazonado con sabores
                      caribeños.
                    </ElementosRazon>
                  </ListaRazon>
                  <Parrafo>
                    Acompaña estas delicias con un cóctel de ron o una
                    refrescante mamajuana.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon id="consejosParaMoverte">
                  <CajaEncabezado>
                    <TituloRazon>
                      6-Consejos para Moverte por Punta Cana.
                    </TituloRazon>
                  </CajaEncabezado>
                  <SubTituloRazon>
                    La mayoría de los resorts ofrecen transporte desde el
                    aeropuerto, pero si planeas explorar más allá, considera
                    estas opciones:
                  </SubTituloRazon>
                  <ListaRazon>
                    <ElementosRazon>
                      <b>Taxis y transporte privado:</b> Cómodos pero más
                      costosos.
                    </ElementosRazon>

                    <ElementosRazon>
                      <b>Alquiler de coches:</b> Ideal para aventureros que
                      quieran conocer a su ritmo.
                    </ElementosRazon>

                    <ElementosRazon>
                      <b>Transporte público:</b> Económico, pero menos fiable
                      para los turistas.
                    </ElementosRazon>
                  </ListaRazon>
                </CajaRazon>
                <CajaRazon id="queEvitar">
                  <CajaEncabezado>
                    <TituloRazon>7-Qué Evitar en Punta Cana</TituloRazon>
                  </CajaEncabezado>

                  <ListaRazon>
                    <ElementosRazon>
                      No bebas agua del grifo, siempre elige agua embotellada.,
                    </ElementosRazon>

                    <ElementosRazon>
                      Evita cambiar dinero en el aeropuerto, las tasas suelen
                      ser más altas.
                    </ElementosRazon>

                    <ElementosRazon>
                      No subestimes el sol del Caribe: usa protector solar
                      incluso en días nublados.
                    </ElementosRazon>
                  </ListaRazon>
                </CajaRazon>

                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>Vive tus Vacaciones al Máximo</TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Con esta guía definitiva, estás listo para disfrutar de unas
                    vacaciones perfectas en Punta Cana. Ya sea que busques
                    relajarte en sus playas de ensueño, explorar su rica cultura
                    o sumergirte en la aventura, este destino tiene algo para
                    todos. ¡Prepárate para crear recuerdos inolvidables en el
                    paraíso! 🌴.
                  </Parrafo>
                </CajaRazon>
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
  &.sancocho {
    width: 70%;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
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
  /* margin-left: 15px; */
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
  width: 100%;
  /* background-color: red; */
  color: ${theme.primary.turquoise};
`;
const SubTituloRazon = styled.h3`
  color: ${theme.secondary.coral};
`;
const CajaImgCuerpo = styled.div`
  margin-bottom: 25px;
`;

const CajaIndiceContenido = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: ${theme.primary.sand};
  margin-bottom: 20px;
  padding: 15px 30px;
  border: 1px solid ${theme.primary.neutral600};
`;
const TituloIndiceContenido = styled.h2`
  width: 100%;
  height: 30px;
  text-align: center;
  color: ${theme.primary.neutral600};
  /* margin-top: 10px; */
`;
const Lista = styled.ol`
  color: ${theme.secondary.azulLink};
  /* list-style: none; */
`;
const Elemento = styled.li`
  font-size: 1.2rem;
  margin-bottom: 4px;
`;
const Ancla = styled.a`
  color: ${theme.secondary.azulLink};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const ListaRazon = styled.ul`
  /* list-style: none; */
  /* color: ${theme.primary.turquoise}; */
  padding: 15px;
  padding-left: 35px;
`;
const ElementosRazon = styled.li`
  margin-bottom: 8px;
  color: ${theme.primary.neutral600};
`;
