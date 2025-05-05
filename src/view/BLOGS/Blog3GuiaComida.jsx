import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { TituloH1 } from "../../components/ElementosGenerales";
import ImgVilla1 from "./../../assets/store/villa1.jpg";
import ImgGirl from "./../../../public/img/girlSand.jpg";
import SideBarBlog from "../../components/Blog/SideBarBlog";
import { fetchGetDocs, obtenerDocPorId } from "../../libs/FetchFirebase";
import { useAuth } from "../../context/AuthContext";
import BotonQuery from "../../components/BotonQuery";
import ImgMangu from "./../../../public/img/blog/mangu.png";
import ImgSancocho from "./../../../public/img/blog/sancocho.jpg";
import ImgPezcado from "./../../../public/img/blog/pezcadoFrito.jpg";
import ImgTostones from "./../../../public/img/blog/tostones.jpg";
import SoyXSideBar from "../../components/Blog/SoyXSideBar";
import OfertaSideBar from "../../components/Blog/OfertaSideBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContenedorFinal from "./ContenedorFinal";

export default function Blog3GuiaComida({
  relacionados,
  currentPost,
  setCurrentPost,
  width,
  userMaster,
}) {
  const idPost = "ucL69OSMNVjjq8aUMfj1";

  useEffect(() => {
    (async () => {
      const post = await obtenerDocPorId("post", idPost);
      console.log(post);
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
                  <Parrafo className="introductorio">
                    Aqui te mostramos un listado que te invita a disfrutar las
                    delicias y el sabor del segundo destino mas visitado de
                    America; <b>Punta Cana</b>
                  </Parrafo>
                  <Parrafo>
                    Punta Cana no solo es famosa por sus hermosas playas y
                    resorts de lujo, sino también por su vibrante cultura
                    gastronómica que captura la esencia del Caribe. Desde platos
                    frescos con ingredientes locales hasta deliciosas recetas
                    tradicionales, la comida de Punta Cana es una verdadera
                    aventura para los sentidos. Si estás planeando tu próxima
                    visita a este paraíso tropical, aquí te dejamos algunas
                    delicias que no puedes dejar de probar:
                  </Parrafo>
                  <br />
                </BloqueParrafos>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>1-Mangu con Los Tres Golpes</TituloRazon>
                  </CajaEncabezado>
                  <CajaImgElemento>
                    <Img className="elemento" src={ImgMangu} />
                  </CajaImgElemento>
                  <Parrafo>
                    Uno de los platos más tradicionales de la República
                    Dominicana es el mangú, un puré de plátano verde acompañado
                    de los tres golpes: queso frito, salami y huevos. Es un
                    desayuno típico, pero también se disfruta a cualquier hora
                    del día. ¡Es un plato lleno de sabor y energía!
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>2-Mofongo</TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    Este delicioso platillo se elabora con plátano verde frito y
                    machacado, combinado con ajo, aceite de oliva y caldo. Se
                    sirve generalmente con mariscos, pollo o cerdo. Es una
                    receta que fusiona ingredientes locales con influencias
                    africanas y españolas, creando una experiencia única.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>3-Pescado Frito</TituloRazon>
                  </CajaEncabezado>
                  <CajaImgElemento>
                    <Img className="elemento" src={ImgPezcado} />
                  </CajaImgElemento>
                  <Parrafo>
                    Punta Cana está rodeada de mar, por lo que el pescado fresco
                    es una de las principales ofertas gastronómicas. El{" "}
                    <b> pescado frito</b> es un platillo popular que se sirve
                    con arroz, tostones y ensalada. Disfruta de una gran
                    variedad de especies locales, como el pargo o la corvina,
                    que capturan el verdadero sabor del océano.
                  </Parrafo>
                </CajaRazon>
                {width <= 680 && <OfertaSideBar single={true} />}
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>4-Sancocho</TituloRazon>
                  </CajaEncabezado>
                  <CajaImgElemento>
                    <Img className="elemento" src={ImgSancocho} />
                  </CajaImgElemento>
                  <Parrafo>
                    Este es uno de los platos más emblemáticos de la cocina
                    dominicana. El sancocho es un guiso de carne, tubérculos y
                    vegetales, preparado con especias y hierbas locales. Se
                    considera un plato reconfortante, perfecto para disfrutar
                    con amigos y familia en las tardes tropicales.
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>5-Tostones y Maduros</TituloRazon>
                  </CajaEncabezado>
                  <CajaImgElemento>
                    <Img className="elemento" src={ImgTostones} />
                  </CajaImgElemento>
                  <Parrafo>
                    Los tostones son plátanos verdes fritos y crujientes,
                    mientras que los maduros son plátanos dulces fritos. Ambos
                    son acompañantes ideales de cualquier comida y ofrecen una
                    textura y sabor inigualables. ¡No olvides probarlos!
                  </Parrafo>
                </CajaRazon>
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>5-Dulces Dominicanos</TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    No puedes irte de Punta Cana sin probar algunos de los
                    deliciosos postres dominicanos. El dulce de leche y las
                    habichuelas con dulce (un postre a base de frijoles rojos,
                    azúcar, leche de coco y canela) son solo algunas opciones
                    irresistibles que te dejarán con ganas de más.
                  </Parrafo>
                </CajaRazon>
                {/* <CajaImgCuerpo>
                <Img src={ImgGirl} />
              </CajaImgCuerpo> */}
                <CajaRazon>
                  <CajaEncabezado>
                    <TituloRazon>¡Disfruta el Sabor del Caribe!</TituloRazon>
                  </CajaEncabezado>
                  <Parrafo>
                    La comida en Punta Cana es una invitación a explorar la
                    riqueza cultural de la isla. Con sabores vibrantes y
                    combinaciones únicas, cada bocado te conecta más con la
                    tradición y la vida local. No olvides visitar los mercados
                    locales, donde puedes disfrutar de la frescura de los
                    ingredientes y la calidez de la gente.
                  </Parrafo>
                  <br />
                  <Parrafo>
                    Si estás buscando una experiencia única de hospedaje en
                    Punta Cana, nuestras villas están listas para ofrecerte no
                    solo confort y lujo, sino también una inmersión en la
                    cultura local. ¡Ven a disfrutar de la belleza de la isla y
                    el sabor del Caribe en su máxima expresión!
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

const CajaImgElemento = styled.div`
  width: 40%;
  @media screen and (max-width: 890px) {
    width: 50%;
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
`;
const CajaImgCuerpo = styled.div`
  margin-bottom: 25px;
`;
