import React from "react";
import styled from "styled-components";
import { Theme, theme } from "../config/theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TituloH1 } from "../components/ElementosGenerales";
import ImgVilla6 from "./../assets/store/villa6.jpg";
import ImgNinniaPool from "./../assets/store/ninniaPool.png";
import ImgWorkRead from "./../../public/img/trabajoEscrito.jpg";
import ImgbilderClip from "./../../public/img/bilderClip.jpg";
import ImgKidPool from "./../../public/img/kidPool.jpg";
import ImgMujerPlaya from "./../../public/img/mujerPlaya.svg";
import Carrusel from "../components/Carrusel";
import CardPropiedades from "../components/CardPropiedades";
import IMGWORKSVG from "./../../public/img/workSVG.svg";
import ImgDi1 from "./../../public/img/quienesSomos/grama.jpeg";
import ImgDi2 from "./../../public/img/quienesSomos/grama2.jpeg";
import ImgDi3 from "./../../public/img/quienesSomos/tennis.jpeg";

export default function Nosotros() {
  return (
    <>
      <Header />
      <CajaContenido>
        <Titulo>Acerca de Pekas Design</Titulo>
        <Subtitulo>Conocemos un poco mas</Subtitulo>
        <WrapTextoImg>
          <CajaInterna className="texto">
            <TituloLess>Nuestra historia</TituloLess>
            <br />
            <Parrafo>
              <b>Pekas Design</b> nace en el 2018 del deseo de un grupo de
              constructores, diseñadores y visionarios apasionados por
              transformar espacios en experiencias. Desde nuestros inicios, nos
              propusimos combinar funcionalidad y estética para crear ambientes
              que no solo se vean bien, sino que también suenen bien.
            </Parrafo>
            <br />
            <Parrafo>
              Con una sólida trayectoria en el sector de la construcción,
              identificamos una necesidad creciente en el mercado: espacios
              hermosos, pero acústicamente ineficientes. Así surge nuestra
              propuesta integral, donde el diseño interior se une con soluciones
              acústicas personalizadas para hogares, oficinas, estudios de
              grabación, locales comerciales y todo tipo de espacios que
              requieran confort visual y sonoro.
            </Parrafo>
            <br />
            <Parrafo>
              A lo largo de los años, <b>Pekas Design</b> ha evolucionado hasta
              convertirse en una marca referente en diseño sensorial. Nuestro
              compromiso con la calidad, la innovación y la satisfacción del
              cliente nos ha llevado a participar en proyectos en todo el país,
              siempre guiados por una visión clara: crear espacios que inspiren.
              Hoy, seguimos creciendo, aprendiendo y diseñando con la misma
              pasión que nos impulsó desde el primer día.
            </Parrafo>
            <br />
          </CajaInterna>
          <CajaInterna className="cajaImg">
            <Img src={ImgDi1} />
            <CajaHover className="hover"></CajaHover>
            <TituloInternoHover className="texto">
              Innovacion y estetica.
            </TituloInternoHover>
          </CajaInterna>
        </WrapTextoImg>
        <WrapTextoImg className="reverse">
          <CajaInterna className="texto">
            <TituloLess>Factores diferenciadores</TituloLess>
            <br />
            <Parrafo>
              En Pekas Design no solo diseñamos espacios; transformamos
              experiencias. Lo que nos distingue va mucho más allá del diseño y
              la acústica. Nuestra esencia se basa en principios firmes y una
              visión clara de lo que debe ser una empresa comprometida con el
              futuro.
            </Parrafo>
            <br />
            <Parrafo>
              <b> Innovación constante:</b>
              <br />
              Nos mantenemos a la vanguardia, integrando tecnologías de última
              generación en cada etapa del proceso. Desde software especializado
              para modelado acústico hasta soluciones sostenibles de diseño
              interior, apostamos por herramientas que nos permiten ofrecer
              resultados más precisos, eficientes y adaptados a las necesidades
              actuales.
            </Parrafo>
            <br />
            <Parrafo>
              <b> Responsabilidad por encima de las ganancias:</b>
              <br />
              Asumimos cada proyecto como si fuera propio. Nos involucramos a
              fondo, escuchamos activamente a nuestros clientes y cuidamos cada
              detalle para garantizar resultados excepcionales. No trabajamos
              con prisa, sino con propósito.
            </Parrafo>
            <br />
            <Parrafo>
              <b> Relación a largo plazo:</b>
              <br />
              Nuestra meta no es solo ejecutar un proyecto, sino construir una
              relación duradera. Muchos de nuestros clientes vuelven a elegirnos
              porque saben que respondemos, acompañamos y mejoramos
              continuamente.
            </Parrafo>
            <br />
            <Parrafo>
              <b> Diseño con propósito:</b>
              <br />
              Cada propuesta nace del análisis, la funcionalidad y la
              sensibilidad estética. Diseñamos para el oído, para la vista y
              para el bienestar de las personas que habitarán esos espacios.
            </Parrafo>
            <br />
          </CajaInterna>
          <CajaInterna className="cajaImg">
            <Img src={ImgDi2} />
            <CajaHover className="hover"></CajaHover>
            <TituloInternoHover className="texto">
              Diseño con proposito
            </TituloInternoHover>
          </CajaInterna>
        </WrapTextoImg>

        <WrapTextoImg className="reverse">
          <CajaInterna className="cajaImg">
            <Img src={ImgDi3} className="vertical" />
            <CajaHover className="hover"></CajaHover>
            <TituloInternoHover className="texto">
              Responsabilidad
            </TituloInternoHover>
          </CajaInterna>
          <CajaInterna className="texto">
            <TituloLess>Mision</TituloLess>
            <Parrafo>
              Diseñar y transformar espacios con soluciones integrales de
              interiorismo y acústica, combinando creatividad, tecnología y
              funcionalidad para mejorar la calidad de vida de nuestros
              clientes, siempre con un alto nivel de compromiso, responsabilidad
              y excelencia.
            </Parrafo>
            <br />
            <br />

            <TituloLess>Vision</TituloLess>
            <Parrafo>
              Ser la empresa líder en diseño interior y soluciones acústicas en
              la región, reconocida por su innovación, profesionalismo y enfoque
              humano. Aspiramos a redefinir la forma en que las personas viven,
              trabajan y experimentan los espacios, creando ambientes que
              inspiran y conectan.
            </Parrafo>
            <br />
            <br />

            <TituloLess>Valores</TituloLess>
            <Lista>
              <Elemento>
                <b>Innovación: </b> Apostamos a la mejora continua, incorporando
                tecnología y nuevas ideas para ofrecer soluciones creativas y
                eficientes.
              </Elemento>
              <Elemento>
                {" "}
                <b>Responsabilidad: </b>Actuamos con ética, transparencia y
                conciencia social, priorizando el cumplimiento y la calidad por
                encima del beneficio económico.
              </Elemento>
              <Elemento>
                {" "}
                <b>Compromiso: </b> Nos involucramos profundamente en cada
                proyecto, asumiendo con seriedad cada reto y entregando
                resultados que superan expectativas.
              </Elemento>
              <Elemento>
                {" "}
                <b>Calidad: </b> Cuidamos cada detalle y exigimos lo mejor en
                cada etapa del proceso, desde el diseño hasta la ejecución.
              </Elemento>
              <Elemento>
                {" "}
                <b>Empatía: </b>Escuchamos, entendemos y trabajamos junto a
                nuestros clientes para crear espacios que respondan
                verdaderamente a sus necesidades.
              </Elemento>
              <Elemento>
                {" "}
                <b>Trabajo en equipo: </b>Fomentamos un ambiente colaborativo,
                donde el talento de cada miembro del equipo aporta valor y se
                refleja en cada proyecto.
              </Elemento>
            </Lista>
          </CajaInterna>
        </WrapTextoImg>
      </CajaContenido>
      <Footer />
    </>
  );
}
const CajaContenido = styled.div`
  width: 100%;
  padding-left: ${theme.config.paddingLateral};
  padding-right: ${theme.config.paddingLateral};
  min-height: 200px;
  @media screen and (max-width: 1100px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media screen and (max-width: 850px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
const Titulo = styled(TituloH1)`
  padding-top: 30px;
  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 2rem;
  }
`;
const Subtitulo = styled.h3`
  color: ${Theme.primary.verdePeka};
  font-size: 1.4rem;
  text-decoration: underline;
  text-align: center;
  width: 100%;
  margin-bottom: 25px;
`;

const WrapTextoImg = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 30px;
  &.reverse {
    flex-direction: row-reverse;
    margin-bottom: 180px;
    @media screen and (max-width: 970px) {
      flex-direction: column-reverse;
    }
  }
  @media screen and (max-width: 970px) {
    flex-direction: column-reverse;
  }
`;
const CajaInterna = styled.div`
  width: 48%;
  &.texto {
    align-content: center;
    @media screen and (max-width: 970px) {
      width: 80%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
  &.cajaImg {
    position: relative;
    overflow: hidden;
    border-radius: 5px;

    &:hover .hover {
      transform: translateX(0%);
    }

    &:hover .hover {
      visibility: visible;
      opacity: 0.8;
    }
    &:hover .texto {
      left: 0;
    }
    @media screen and (max-width: 970px) {
      width: 80%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
    }
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
    width: 80%;
  }
  &.vertical {
    /* width: 100%; */
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
  padding: 10px;
  left: 0;
  top: 0;

  background-color: #2ba58d9e;
  transition: all ease-in-out 0.4s;
  visibility: hidden;
  opacity: 0;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(10px);
`;

const CajaWave = styled.div`
  /* border: 2px solid red; */
  position: absolute;
  bottom: -100px;
  width: 100%;
  /* overflow: hidden; */
`;
const ImgWave = styled.img`
  position: absolute;
  bottom: -5px;
`;
const TituloLess = styled.h3`
  font-size: 1.8rem;
  color: ${Theme.primary.verdePeka};
`;
const Lista = styled.ul`
  padding-left: 20px;
`;
const Elemento = styled.li`
  margin-bottom: 15px;
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
