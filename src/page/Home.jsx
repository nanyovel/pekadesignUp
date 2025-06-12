import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Theme, theme } from "../config/theme";
import Header from "../components/Header";

// import ImgEstructura1 from "./../../public/img/hero/facade-7868160_640.jpg";
// import ImgEstructura2 from "./../../public/img/hero/statue-5597502_1280.jpg";
// import ImgEstructura3 from "./../../public/img/hero/steel-scaffolding-4459235_1280.jpg";
// import ImgEstructura4 from "./../../public/img/hero/indoor-3315464_1280.jpg";
// import ImgEstructura6 from "./../../public/img/hero/office-730681_1280.jpg";
// import ImgEstructura7 from "./../../public/img/hero/house-1477041_1280.jpg";
// import ImgEstructura8 from "./../../public/img/hero/hamburg-8573427_1280.jpg";
import ImgKitchen from "./../../public/img/quienesSomos/home3.jpeg";
import ImgHome from "./../../public/img/quienesSomos/homaCasa.jpeg";
import ImgBuildingRect from "./../../public/img/quienesSomos/columnaImg.jpeg";
//
import ImgParallaxHome from "./../../public/img/quienesSomos/parallaxHome.jpeg";
import Carrusel from "../components/Carrusel";
import CardResennia from "../components/CardResennia";
import RostroMujer1 from "./../../public/img/quienesSomos/woman-659352_640.jpg";
import RostroHombre2 from "./../../public/img/quienesSomos/businessman-6039904_640.jpg";
import RostroHombre1 from "./../../public/img/quienesSomos/executive-6922418_640.jpg";

import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router";
import { BtnGeneral } from "../components/ElementosGenerales";
import { Villas } from "../DB/Villas";
// import { useAuth } from "../context/AuthContext";
import Servicios from "../components/Servicios";
import ImgEstructura1 from "./../../public/img/slider/1.jpeg";
import ImgEstructura2 from "./../../public/img/slider/2.jpeg";
import ImgEstructura3 from "./../../public/img/slider/3.jpeg";
import ImgEstructura4 from "./../../public/img/slider/4.jpeg";
import ImgEstructura5 from "./../../public/img/slider/5.jpeg";
import ImgEstructura6 from "./../../public/img/slider/6.jpeg";
import ImgEstructura7 from "./../../public/img/slider/7.jpeg";
import ImgEstructura8 from "./../../public/img/slider/8.jpeg";
import ImgEstructura9 from "./../../public/img/slider/9.jpeg";
import ImgEstructura10 from "./../../public/img/slider/10.jpeg";

export default function Home() {
  const arrayImg = [
    ImgEstructura1,
    // ImgEstructura2,
    ImgEstructura3,
    ImgEstructura4,
    // ImgEstructura5,
    ImgEstructura6,
    ImgEstructura7,
    ImgEstructura8,
  ];

  const navigate = useNavigate();
  const goProperty = () => {
    navigate("/propiedades");
  };
  const villaDB = Villas[0];

  const [propiedadesDB, setPropiedadesDB] = useState([]);

  const reviewStatic = [
    {
      puntuacion: 4,
      avatarUser: RostroHombre1,
      rol: "Gerente Coca Cola",
      nombre: "Daniel Ramos",
      texto:
        "Trabajar con Pekas Design fue una experiencia excepcional. Supieron interpretar exactamente lo que queríamos y lo llevaron a otro nivel. Su atención al detalle, la estética y la funcionalidad fue impresionante.",
    },
    {
      puntuacion: 5,
      avatarUser: RostroMujer1,
      rol: "Propietaria Cielos Acusticos",
      nombre: "Yaritza Martinez",
      texto:
        "La innovación y el profesionalismo de Pekas Design superaron nuestras expectativas. Nos acompañaron durante todo el proceso con una comunicación clara y soluciones creativas. Sin duda, volveríamos a elegirlos.",
    },
    {
      puntuacion: 4,
      avatarUser: RostroHombre2,
      rol: "Director UASD",
      nombre: "Angelo Sosa",
      texto:
        "Desde el primer contacto, sentimos que nuestro proyecto estaba en buenas manos. El equipo de Pekas Design no solo cumplió con los tiempos y el presupuesto, sino que nos entregó un resultado espectacular. Totalmente recomendados.",
    },
  ];
  // const user = useAuth();
  // const currentUser = user.usuario;
  return (
    <>
      <Header
      // currentUser={currentUser}
      />
      <Container2>
        <ContainerHeader>
          <ContainerHero>
            <Carrusel arrayImg={arrayImg} />
          </ContainerHero>
          <CajaTitulo>
            <TituloH1>
              Pekas
              <Span>Design</Span>
            </TituloH1>
            <Subtitulo>Diseños acusticos</Subtitulo>
          </CajaTitulo>
        </ContainerHeader>
        <CajaAbreBocas>
          <TituloSeccion className="coral">Servicios</TituloSeccion>
          <Servicios />
        </CajaAbreBocas>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ContainerSemi>
          <Seccion>
            <TituloSeccion>Sobre nosotros</TituloSeccion>

            <WrapTextoImg className="normal">
              <CajaInterna className="texto">
                <TituloLess>¿Quienes somos?</TituloLess>
                <br />
                <Parrafo>
                  En <b>Pekas Design</b> somos una empresa de diseño y
                  construcción que nace con una visión clara: transformar
                  espacios a través de la creatividad, la tecnología y el
                  detalle. Nuestro enfoque combina la sensibilidad artística del
                  diseño con la precisión técnica de la construcción moderna,
                  dando vida a proyectos únicos que responden tanto a las
                  necesidades funcionales como a la identidad estética de cada
                  cliente.
                </Parrafo>
                <br />
                <Parrafo>
                  Nos mueve la innovación y el compromiso con la calidad. Desde
                  una fachada impactante hasta un interior cuidadosamente
                  diseñado, cada obra refleja nuestra pasión por superar
                  expectativas y construir soluciones que perduren en el tiempo.
                  En <b>Pekas Design</b> , no solo diseñamos estructuras:
                  creamos experiencias espaciales pensadas para el futuro.
                </Parrafo>
                <br />
              </CajaInterna>
              <CajaInterna className="cajaImg">
                <Img src={ImgKitchen} />
                <CajaHover className="hover"></CajaHover>
                <TituloInternoHover className="texto">
                  Transformación de espacios
                </TituloInternoHover>
              </CajaInterna>
            </WrapTextoImg>
            <WrapTextoImg className="reverse">
              <CajaInterna className="texto">
                <TituloLess>¿Por que elegirnos?</TituloLess>
                <br />
                <Parrafo>
                  En <b>Pekas Design</b> no solo ejecutamos proyectos, los
                  interpretamos, los pensamos contigo y los llevamos más allá de
                  lo esperado. Nos destacamos por integrar diseño, innovación y
                  tecnología en cada etapa del proceso, asegurando resultados
                  que combinan belleza, funcionalidad y eficiencia. Cada detalle
                  cuenta, y por eso trabajamos con un enfoque personalizado,
                  comprometido con la excelencia y la satisfacción total de
                  nuestros clientes.
                </Parrafo>
                <br />
                <Parrafo>
                  Elegirnos es apostar por un equipo creativo, técnico y
                  apasionado por lo que hace. Nos adaptamos a las nuevas
                  tendencias, utilizamos herramientas de vanguardia y mantenemos
                  una comunicación cercana para que cada proyecto fluya con
                  claridad y confianza. En <b>Pekas Design</b> , hacemos de cada
                  espacio una expresión auténtica de quienes lo habitan.
                </Parrafo>
                <br />
              </CajaInterna>
              <CajaInterna className="cajaImg">
                <Img src={ImgHome} />
                <CajaHover className="hover"></CajaHover>
                <TituloInternoHover className="texto">
                  Diseño personalizado
                </TituloInternoHover>
              </CajaInterna>
            </WrapTextoImg>
          </Seccion>
          <Seccion className="parallax">
            <SeccionParralla>
              <CajaParallax></CajaParallax>
              <BarraParallax className="top">
                <TituloParallax>
                  Pekas Design: Donde la creatividad se encuentra con la
                  tecnología.
                </TituloParallax>
              </BarraParallax>
              <BarraParallax className="bottom">
                <TituloParallax>
                  Transformamos lo común en extraordinario.
                </TituloParallax>
              </BarraParallax>
            </SeccionParralla>
          </Seccion>
          <Seccion>
            {/* <TituloSeccion>Lo que nos hace diferentes</TituloSeccion> */}
            <WrapTextoImg className="reverse svgPlaya">
              <CajaInterna className="texto">
                <CajaRazon>
                  <TituloLess className="azulPeka">Pilares</TituloLess>
                  <ListaRazon className="noListStyle">
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Innovación constante: </b> Aplicamos ideas creativas
                        y tecnología de punta en cada proyecto.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Diseño con propósito:</b> Cada espacio responde a una
                        necesidad, estética y funcionalmente.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Calidad garantizada:</b> Materiales, procesos y
                        resultados de alto nivel.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Atención personalizada:</b> Escuchamos y acompañamos
                        a cada cliente de principio a fin.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Sostenibilidad:</b> Promovemos prácticas responsables
                        y soluciones conscientes.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Precisión técnica:</b> Combinamos creatividad con
                        rigurosidad constructiva.
                      </ElementosRazon>
                    </WrapElementList>
                  </ListaRazon>
                </CajaRazon>

                <br />
                <CajaRazon>
                  <TituloLess className="azulPeka">Nuestros valores</TituloLess>
                  <ListaRazon className="noListStyle">
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b> Compromiso:</b> Cumplimos con lo que prometemos,
                        cuidando cada detalle y cada plazo.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Transparencia:</b> Nos comunicamos con claridad y
                        honestidad en todo momento.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Pasión por el diseño:</b> Amamos lo que hacemos, y
                        eso se refleja en cada proyecto.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Excelencia:</b> Buscamos siempre el mejor resultado,
                        sin conformarnos con lo mínimo.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Creatividad:</b>Transformamos ideas en soluciones
                        únicas y funcionales.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Trabajo en equipo:</b>Creemos en la colaboración como
                        base de todo gran resultado.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Responsabilidad:</b>Actuamos con seriedad y respeto
                        en cada decisión y acción.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Empatía con el cliente:</b>Escuchamos, entendemos y
                        diseñamos pensando en ti.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Adaptabilidad:</b>Nos ajustamos a tus necesidades,
                        ideas y cambios con flexibilidad.
                      </ElementosRazon>
                    </WrapElementList>
                    <WrapElementList>
                      <ListStyle>✅</ListStyle>
                      <ElementosRazon>
                        <b>Respeto por cada proyecto:</b>Valoramos cada obra
                        como si fuera propia, sin importar su tamaño.
                      </ElementosRazon>
                    </WrapElementList>
                  </ListaRazon>
                </CajaRazon>

                <br />
              </CajaInterna>
              <CajaInterna className="cajaImg svgPlaya">
                <Img src={ImgBuildingRect} className="svg" />
              </CajaInterna>
            </WrapTextoImg>
          </Seccion>
          <Seccion>
            <TituloSeccion>¿Que dicen nuestros clientes?</TituloSeccion>
            <WrapTextoImg className="cardsPerson">
              {reviewStatic.map((card, index) => {
                return <CardResennia key={index} review={card} />;
              })}
            </WrapTextoImg>
          </Seccion>
        </ContainerSemi>

        {/* <Seccion>
          <TituloSeccion>Envianos un mensaje</TituloSeccion>
        </Seccion> */}
      </Container2>
      <Footer />
    </>
  );
}

const Container2 = styled.div`
  width: 100vw;
`;
const ContainerSemi = styled.div`
  padding-left: ${theme.config.paddingLateral};
  padding-right: ${theme.config.paddingLateral};
  @media screen and (max-width: 1100px) {
    padding-left: ${theme.config.paddingLateral100};
    padding-right: ${theme.config.paddingLateral100};
  }
  @media screen and (max-width: 750px) {
    padding-left: ${theme.config.paddingLateral70};
    padding-right: ${theme.config.paddingLateral70};
  }
  @media screen and (max-width: 750px) {
    padding-left: ${theme.config.paddingLateral70};
    padding-right: ${theme.config.paddingLateral70};
  }
  @media screen and (max-width: 650px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (max-width: 550px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (max-width: 560px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

// ***** HERO ******
const ContainerHeader = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* margin-bottom: 80px; */
  overflow: hidden;
  @media screen and (max-width: 620px) {
    height: 80vh;
  }
  @media screen and (max-width: 580px) {
    height: 75vh;
  }
  @media screen and (max-width: 490px) {
    height: 60vh;
  }
  @media screen and (max-width: 460px) {
    height: 50vh;
  }
`;
const ContainerHero = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  height: 100%;
`;
const CajaTitulo = styled.div`
  border: 1px solid red;
  min-width: 30%;
  min-height: 20vh;
  padding: 8px;
  position: absolute;
  top: 50vh;
  left: 100px;
  z-index: 2;
  border: 2px solid ${theme.primary.turquoise};
  background-color: ${theme.primary.neutral300};
  border-radius: 5px;

  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  padding-left: 15px;
  background-color: ${Theme.primary.azulPeka};
  border: 2px solid ${Theme.primary.verdePeka};
  border-color: black;
  transition: ease all 0.1s;
  &:hover {
    transform: scale(1.02);
  }
  animation: cambiarColor 0.2s infinite alternate;
  @keyframes cambiarColor {
    from {
      border-color: ${Theme.primary.azulPeka};
    }
    to {
      border-color: ${Theme.primary.verdePeka};
    }
  }
  @media screen and (max-width: 1300px) {
    padding: 4px;
  }
  @media screen and (max-width: 620px) {
    top: 40vh;
    right: auto;
    left: 40px;
  }

  @media screen and (max-width: 490px) {
    top: 20vh;
  }
  @media screen and (max-width: 430px) {
    min-width: 35%;
    top: 30vh;
    min-height: auto;
  }
  opacity: 0.9;
`;
const TituloH1 = styled.h1`
  font-size: 6rem;
  color: ${theme.primary.turquoise};
  padding: 0;
  /* font-weight: lighter; */
  color: white;
  @media screen and (max-width: 620px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 460px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 430px) {
    font-size: 3.5rem;
  }
`;
const Span = styled.span`
  color: ${theme.primary.white};
  color: ${theme.primary.neutral600};
`;
const Subtitulo = styled.h2`
  color: ${theme.secondary.coral};
  color: white;
  @media screen and (max-width: 460px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 430px) {
    font-size: 1rem;
  }
`;
const TituloSeccion = styled.h2`
  color: ${Theme.primary.azulPeka};
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  text-decoration: underline;
  margin-bottom: 40px;
  font-weight: normal;
  &.sinMarginBottom {
    margin-bottom: 0;
  }
  &.coral {
    color: ${theme.primary.sand};
    color: white;
  }
  @media screen and (max-width: 620px) {
    font-size: 2rem;
  }
`;
const SubtituloSeccion = styled.h3`
  color: ${theme.primary.neutral600};
  font-size: 2rem;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 620px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 425px) {
    font-size: 1.1rem;
  }
`;
const BtnSimple = styled(BtnGeneral)``;

const TituloLess = styled.h3`
  font-size: 1.8rem;
  color: ${theme.secondary.coral};
  color: ${Theme.primary.verdePeka};
  &.azulPeka {
    color: ${Theme.primary.azulPeka};
  }
`;
const WrapTextoImg = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 30px;
  &.reverse {
    flex-direction: row-reverse;

    @media screen and (max-width: 900px) {
      display: flex;
      justify-content: center;
      flex-direction: column-reverse;
      align-items: center;
    }
    @media screen and (max-width: 850px) {
      flex-direction: row;
      &.svgPlaya {
        flex-direction: column-reverse;
      }
    }
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
  &.normal {
    /* flex-direction: row-reverse; */
    @media screen and (max-width: 850px) {
      display: flex;
      flex-direction: column;
    }
  }
  &.cardsPerson {
    width: 100%;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }
  &.noticias {
    width: 100%;
  }
`;
const CajaInterna = styled.div`
  width: 50%;
  &.texto {
    align-content: center;
  }
  &.cajaImg {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    width: 40%;

    &:hover .hover {
      visibility: visible;
      opacity: 0.8;
    }
    &:hover .texto {
      left: 0;
    }
    /* width: 30%; */
    /* width: ; */
    @media screen and (max-width: 850px) {
      width: 100%;
      &.svgPlaya {
        width: 60%;
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
const Img = styled.img`
  width: 100%;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  object-fit: cover;
  &.svg {
    width: 100%;
    height: auto;
  }
`;
const Parrafo = styled.p`
  line-height: 1.4rem;
  color: ${theme.primary.neutral650};
`;
const CajaHover = styled.div`
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.8rem;
  width: 100%;
  height: 100%;
  position: absolute;
  font-weight: 600;
  background-color: ${Theme.primary.verdePeka};
  background-color: #2ba58d9e;
  padding: 10px;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.4s;
  visibility: hidden;
  opacity: 0;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(10px);
`;

const Seccion = styled.section`
  margin-bottom: 100px;
  &.parallax {
    height: 100vh;
    width: 100%;
    /* overflow-x: hidden; */
  }
  &.fondo {
    background-color: ${theme.primary.turquoise};
    width: 100vw;
  }
  &.video {
    margin-bottom: 0;
    height: 130%;
    @media screen and (max-width: 1350px) {
      display: flex;
      flex-direction: column;
      height: auto;
    }
  }
`;

// Parallax
const SeccionParralla = styled(Seccion)`
  width: 100%;
  height: 100vh;
  left: 0;
  position: absolute;
`;
const BarraParallax = styled.div`
  min-height: 100px;
  display: flex;
  align-items: center;

  width: 100vw;
  background-color: ${Theme.primary.azulPeka};
  position: absolute;
  left: 0;
  &.top {
    top: 0;
  }
  &.bottom {
    bottom: 0;
  }
  @media screen {
  }
`;
const TituloParallax = styled.h2`
  color: ${theme.primary.turquoise};
  color: ${Theme.primary.verdePeka};
  width: 100%;
  height: 100%;
  text-align: center;
  align-content: center;
  font-size: 3rem;
  color: white;
  padding: 0 15px;
  @media screen and (max-width: 700px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
  }
`;
const CajaParallax = styled.div`
  height: 90vh;
  width: 100%;
  position: absolute;
  left: 0;
  background-image: url(${ImgParallaxHome});
  /* Ajuste del fondo */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const EnlacePrincipal = styled(Link)`
  text-decoration: none;
  position: relative;
  color: auto;
  &:visited {
    color: black;
    color: white;
  }

  &:hover {
    opacity: 1;
    animation: arroz 1s;
    animation-direction: normal;
  }

  @keyframes arroz {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  &.cardProps {
    display: inline-block;
    width: 40%;
    @media screen and (max-width: 600px) {
      width: 80%;
    }
    @media screen and (max-width: 520px) {
      width: 85%;
    }
    @media screen and (max-width: 490px) {
      width: 90%;
    }
    @media screen and (max-width: 450px) {
      width: 95%;
    }
    @media screen and (max-width: 420px) {
      width: 100%;
    }
  }
`;

const CajaRazon = styled.div`
  margin-bottom: 25px;
  width: 100%;
`;

const ListaRazon = styled.ul`
  padding: 15px;
  padding-left: 35px;
  &.noListStyle {
    list-style: none;
  }
`;
const WrapElementList = styled.div`
  display: flex;
`;
const ListStyle = styled.h2`
  font-size: 1.2rem;
`;
const ElementosRazon = styled.li`
  margin-bottom: 8px;
  color: ${theme.primary.neutral600};
`;
const CajaAbreBocas = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: ${Theme.primary.azulPeka};
  padding: 50px;
  margin-top: 80px;
`;
const TituloInternoHover = styled.h2`
  color: white;
  opacity: 1;
  position: absolute;
  left: 100%;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  /* height: 100%; */
  background-color: ${Theme.primary.azulPeka};
  transition: 0.2s all ease;
  text-align: center;
  vertical-align: center;
  align-content: center;
  font-size: 2.4rem;
`;
