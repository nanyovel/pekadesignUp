import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
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

export default function Nosotros() {
  return (
    <>
      <Header />
      <CajaContenido>
        <Titulo>Sobre nosotros</Titulo>
        <Subtitulo>Conocemos un poco mas</Subtitulo>
        <WrapTextoImg>
          <CajaInterna className="texto">
            <TituloLess>¿Quienes somos?</TituloLess>
            <br />
            <Parrafo>
              En <b>Break Koi,</b> ofrecemos una colección exclusiva de villas
              en <b>Punta Cana,</b> diseñadas para brindar lujo, seguridad y
              comodidad en un entorno paradisíaco. Nos apasiona crear
              experiencias únicas para nuestros huéspedes, con alojamientos
              elegantes y servicios personalizados que garantizan una estadía
              inolvidable. Nuestro compromiso es seguir creciendo y adquiriendo
              nuevas propiedades para ofrecer siempre lo mejor en hospitalidad.
            </Parrafo>
            <br />
            <Parrafo>
              Más que un destino, <b>Break Koi,</b> es un espacio donde la
              exclusividad se combina con un trato cercano y amigable. Nos
              enfocamos en la seguridad, el confort y la atención personalizada,
              asegurando que cada huésped se sienta como en casa. Nuestro
              objetivo es construir relaciones a largo plazo, creando momentos
              memorables que hagan de cada visita una experiencia para repetir.
            </Parrafo>
            <br />
          </CajaInterna>
          <CajaInterna className="cajaImg">
            <Img src={ImgWorkRead} />
            <CajaHover className="hover">
              Somos una excelente opcion de alquileres vacacionales en Punta
              Cana.
            </CajaHover>
          </CajaInterna>
        </WrapTextoImg>
        <WrapTextoImg className="reverse">
          <CajaInterna className="texto">
            <TituloLess>¿Por que elegirnos?</TituloLess>
            <br />
            <Parrafo>
              En <b>Break Koi,</b> combinamos lujo, seguridad y hospitalidad
              para ofrecerte una experiencia inigualable en Punta Cana. Nuestras
              villas elegantes y exclusivas están diseñadas para brindarte el
              máximo confort, con espacios cuidadosamente decorados y amenidades
              de primera clase. Además, garantizamos privacidad y tranquilidad
              en un entorno paradisíaco, ideal para quienes buscan una escapada
              perfecta.
            </Parrafo>
            <br />
            <Parrafo>
              Nos distinguimos por nuestro trato personalizado y atención
              cercana a cada huésped. En <b>Break Koi,</b> no solo te ofrecemos
              un lugar donde hospedarte, sino un servicio cálido y amigable que
              hará que te sientas como en casa. Queremos construir relaciones a
              largo plazo, asegurándonos de que cada visita sea una experiencia
              única que siempre querrás repetir.
            </Parrafo>
            <br />
          </CajaInterna>
          <CajaInterna className="cajaImg">
            <Img src={IMGWORKSVG} />
            <CajaHover className="hover">
              Somos una excelente opcion de alquileres vacacionales en Punta
              Cana.
            </CajaHover>
          </CajaInterna>
        </WrapTextoImg>

        <WrapTextoImg className="reverse">
          <CajaInterna className="texto">
            <TituloLess>Mision</TituloLess>
            <br />
            <Parrafo>
              Brindar experiencias inolvidables a nuestros clientes mediante el
              alquiler de villas exclusivas en Punta Cana. Nos enfocamos en
              ofrecer comodidad, lujo y privacidad en entornos paradisíacos,
              creando el ambiente perfecto para unas vacaciones de ensueño.
            </Parrafo>
            <br />
            <Parrafo>
              Nos comprometemos a proporcionar un servicio personalizado y de
              alta calidad, atendiendo cada detalle para que nuestros huéspedes
              se sientan como en casa y disfruten al máximo de su estadía.
            </Parrafo>
            <br />

            <TituloLess>Vision</TituloLess>
            <br />
            <Parrafo>
              Ser la opción líder en alquiler de villas en Punta Cana,
              reconocidos por nuestra excelencia en el servicio y nuestra
              capacidad de crear experiencias únicas y memorables. Aspiramos a
              expandir nuestro portafolio de propiedades exclusivas, manteniendo
              siempre un alto estándar de calidad y confort.
            </Parrafo>
            <br />
            <Parrafo>
              Nos esforzamos por ser referentes en hospitalidad, innovación y
              atención al cliente, construyendo relaciones duraderas basadas en
              la confianza y la satisfacción de nuestros huéspedes.
            </Parrafo>
            <br />

            <TituloLess>Valores</TituloLess>
            <br />
            <Lista>
              <Elemento>
                <b>Calidad y Excelencia: </b> Nos comprometemos a ofrecer el más
                alto estándar en cada una de nuestras villas y servicios.
                Cuidamos cada detalle para garantizar una experiencia impecable.
              </Elemento>
              <Elemento>
                {" "}
                <b>Compromiso con el Cliente: </b>Trabajamos con pasión y
                dedicación para superar las expectativas de nuestros huéspedes,
                asegurándonos de que cada visita sea única y memorable.
              </Elemento>
              <Elemento>
                {" "}
                <b>Confianza y Transparencia: </b> Construimos relaciones
                sólidas y transparentes con nuestros clientes, brindándoles
                seguridad y tranquilidad durante todo el proceso de reserva y
                estadía.
              </Elemento>
              <Elemento>
                {" "}
                <b>Hospitalidad y Calidez: </b> Nos esforzamos por crear un
                ambiente acogedor, brindando un servicio amable, cercano y
                personalizado que haga sentir a nuestros huéspedes como en casa.
              </Elemento>
              <Elemento>
                {" "}
                <b>Innovación y Mejora Continua: </b>Buscamos constantemente
                nuevas formas de innovar y mejorar nuestros servicios para
                adaptarnos a las necesidades y expectativas de nuestros
                clientes.
              </Elemento>
            </Lista>
          </CajaInterna>
          <CajaInterna className="cajaImg">
            <Img src={ImgbilderClip} className="vertical" />
            <CajaHover className="hover">
              Tu refugio perfecto, Punta Cana.
            </CajaHover>
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
  color: ${theme.secondary.coral};
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
  background-color: #dc143c8c;
  padding: 10px;
  left: 0;
  top: 0;
  transform: translateX(100%);
  transition: transform ease-in-out 0.3s;
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
  color: ${theme.secondary.coral};
`;
const Lista = styled.ul`
  padding-left: 20px;
`;
const Elemento = styled.li`
  margin-bottom: 15px;
`;
