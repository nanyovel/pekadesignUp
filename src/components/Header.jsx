import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Theme, theme } from "../config/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import ImgLogo from "./../../public/img/logo.png";
import { Link, NavLink } from "react-router";
import { IconoAngleV } from "./ConjuntoIconos";
import ImgSpain from "./../../public/img/spain.png";
import ImgInglaterra from "./../../public/img/inglaterra.png";
import ImgFrancia from "./../../public/img/francia.png";

export default function Header({ userMaster, absolute }) {
  const [hasIdioma, setHasIdioma] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica si el clic ocurrió fuera del menú
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setHasIdioma(false); // Cierra el menú
      }
    };

    // Agrega el listener al documento
    document.addEventListener("mousedown", handleClickOutside);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isMovil, setIsMovil] = useState(false);

  useEffect(() => {
    const hasMovil = window.screen.width < 620 ? true : false;
    console.log(hasMovil);
    setIsMovil(hasMovil);
  }, [window.screen.width]);

  const datosContacto = {
    tel1: "809-777-3423",
    tel2: "829-111-0000",
    linkWhta1:
      "https://api.whatsapp.com/send?phone=+18097773423&text=Hola%20equipo%20de%20Peka%20Design,%20quisiera%20por%20favor%20ser%20asistido.",
    linkWhta2:
      "https://api.whatsapp.com/send?phone=+18097773423&text=Hola%20equipo%20de%20Peka%20Design,%20quisiera%20por%20favor%20ser%20asistido.",
  };
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <ContenedorHeader className={absolute ? "absolute" : ""}>
        <NavBar>
          <CajaInternaHeader>
            <CajaLogo>
              <Enlaces to={"/"} className={"logo"}>
                <Img src={ImgLogo} />
              </Enlaces>
            </CajaLogo>
            <WrapTel>
              <TextoTel className="tel">
                <Ancla target="_blank" href={datosContacto.linkWhta1}>
                  <Icono icon={faWhatsapp} />
                  <SpanTel>Tel:</SpanTel>
                  {datosContacto.tel1}
                </Ancla>
              </TextoTel>
              {/* <TextoTel className="tel">
                <Ancla target="_blank" href={datosContacto.linkWhta2}>
                  <Icono icon={faWhatsapp} />
                  <SpanTel>Tel:</SpanTel>
                  {datosContacto.tel2}
                </Ancla>
              </TextoTel> */}
            </WrapTel>
          </CajaInternaHeader>
          <CajaInternaHeader className={menuOpen ? "nav open" : "nav"}>
            {menuOpen && (
              <BoxBarsMenu
                onClick={() => setMenuOpen(false)}
                className="dentro"
              >
                <Linea1
                  className={`${menuOpen ? " activeline1" : ""}`}
                ></Linea1>
                <Linea3
                  className={`${menuOpen ? " activeline3" : ""}`}
                ></Linea3>
              </BoxBarsMenu>
            )}
            <NavList>
              <NavItem>
                <Enlaces to={"/"} className={"menu"}>
                  Home
                </Enlaces>
              </NavItem>

              {/* <NavItem>
                <Enlaces className={"menu"} to={"/contactos"}>
                  Contactos
                </Enlaces>
              </NavItem> */}
              {/* <NavItem>
                <Enlaces className={"menu"} to={"/nosotros"}>
                  Sobre nosotros
                </Enlaces>
              </NavItem> */}
            </NavList>
            {
              // !userMaster && (
              //   <CajaLog>
              //     <Enlaces className={"menu login"} to={"/login"}>
              //       <Icono className="user" icon={faUser} />
              //       <TextRegistrarse>Iniciar Sesion</TextRegistrarse>
              //     </Enlaces>
              //     {/* <TextoSingle>Login</TextoSingle> */}
              //   </CajaLog>
              // )
            }
            {
              // userMaster && (
              //   <Enlaces className={"perfil"} to={"/perfil"}>
              //     <CajaPerfil>
              //       {userMaster.urlFotoPerfil ? (
              //         <CajaAvatar>
              //           <ImgAvatar src={userMaster.urlFotoPerfil} />
              //         </CajaAvatar>
              //       ) : (
              //         <CajaAvatar>
              //           <ImgAvatar
              //             className="icon"
              //             src={
              //               userMaster.genero == "Femenino"
              //                 ? theme.config.userFemale
              //                 : theme.config.userMale
              //             }
              //           />
              //         </CajaAvatar>
              //       )}
              //       <CajaNombrePerfil>
              //         <NombrePerfil>{userMaster.nombre}</NombrePerfil>
              //       </CajaNombrePerfil>
              //     </CajaPerfil>
              //   </Enlaces>
              // )
            }
          </CajaInternaHeader>
        </NavBar>
        {!menuOpen && (
          <BoxBarsMenu onClick={() => setMenuOpen(true)}>
            <Linea1></Linea1>
            <Linea2></Linea2>
            <Linea3></Linea3>
          </BoxBarsMenu>
        )}
      </ContenedorHeader>
    </>
  );
}

// Navbar

// BrekPoints a considerar en ancho pixeles
// 1200
// 1000
// 980
// 620
const ContenedorHeader = styled.header`
  /* background-color: ${theme.primary.turquoise}; */
  background-color: rgba(26, 188, 156, 0.8);
  background-color: ${Theme.primary.azulPeka};
  width: 100vw;
  color: ${theme.primary.white};
  /* padding: 16px; */
  height: 60px;
  padding: 0 150px;
  z-index: 150;
  &.absolute {
    position: absolute;
  }

  @media screen and (max-width: 1200px) {
    padding: 0 80px;
  }
  @media screen and (max-width: 1000px) {
    padding: 0 60px;
  }
  @media screen and (max-width: 980px) {
    height: 100px;
  }
  @media screen and (max-width: 620px) {
    padding: 10px 0;
    height: auto;
  }
  @media screen and (max-width: 480px) {
    padding: 4px 0;
  }
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 980px) {
    flex-direction: column;
  }
`;
const CajaInternaHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  &.nav {
    padding: 8px;
    @media screen and (max-width: 620px) {
      transition: ease all 0.2s;
      flex-direction: column-reverse;
      position: fixed;
      height: 500px;
      top: 0;
      right: 0;
      transform: translate(100%);
      overflow-x: scroll;
      background-color: ${theme.primary.turquoise};
      border: 1px solid black;
      padding: 0 10px;
      z-index: 20;
      /* min-width: 50vw; */
      min-width: 300px;
      &.open {
        transform: translate(0);
      }
    }
    @media screen and (max-width: 720px) {
      /* padding-left: 45px; */
    }
  }
`;
const WrapTel = styled.div`
  @media screen and (max-width: 620px) {
    display: flex;
    gap: 15px;
  }
  @media screen and (max-width: 380px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const TextoTel = styled.h2`
  font-size: 1.1rem;
  font-weight: normal;
  &:hover {
    color: ${theme.primary.sand};
    text-decoration: underline;
  }
  @media screen and (max-width: 980px) {
    display: flex;
    gap: 15px;
  }
  @media screen and (max-width: 620px) {
    font-size: 14px;
  }
`;
const Ancla = styled.a`
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${theme.sand};
    text-decoration: underline;
  }
`;

const SpanTel = styled.span``;
const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  align-items: center;
  @media screen and (max-width: 620px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 10px;
  }
`;

const NavItem = styled.li`
  margin-right: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  &.idioma {
    display: flex;
    gap: 3px;
    position: relative;
    border-bottom: 3px solid transparent;
    z-index: 50;
    &:hover {
      color: ${theme.primary.sand};
      color: white;
      border-bottom: 3px solid;
    }
    @media screen and (max-width: 620px) {
      display: flex;
      justify-content: center;
      text-align: center;
      border-bottom: 1px solid black;
      /* border-color: black; */
    }
  }
  @media screen and (max-width: 620px) {
    height: 40px;
    border: 1px solid black;
    width: 100%;
    text-align: center;
  }
`;
const CajaLog = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 5px;
  border-bottom: 1px solid ${theme.primary.neutral200};
`;
const TextRegistrarse = styled.h3`
  display: none;
  @media screen and (max-width: 620px) {
    display: block;
    font-weight: normal;
    margin: 6px;
  }
`;
const Icono = styled(FontAwesomeIcon)`
  margin-right: 5px;
  &.user {
    margin-right: 0;
    &:hover {
      color: ${theme.primary.sand};
      cursor: pointer;
    }
  }
  @media screen and (max-width: 620px) {
    font-size: 1.4rem;
  }
`;
const Img = styled.img`
  height: 75%;
  margin-right: 10px;
  cursor: pointer;
`;

const Enlaces = styled(NavLink)`
  &.menu {
    color: white;
    display: block;
    transition: color 25ms;
    border-bottom: 3px solid transparent;
    &:hover {
      color: ${theme.primary.sand};
      border-bottom: 3px solid;
    }
    text-decoration: none;
    &.active {
      color: white;
    }
    @media screen and (max-width: 620px) {
      white-space: nowrap;
      width: 100%;
      text-align: center;
    }
  }
  &.logo {
    height: 100%;
    display: block;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.perfil {
    color: white;
    text-decoration: none;
    @media screen and (max-width: 620px) {
      position: absolute;
      top: 0;
    }
    &:hover {
      color: ${theme.primary.sand};
    }
    &.active {
      color: white;
    }
  }
  &.login {
    display: flex;
    justify-content: center;
    padding: 4px;
    gap: 5px;
    align-items: center;
  }
`;
const CajaLogo = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CajaArrowVIcon = styled.div`
  display: flex;
  align-items: end;
`;
const CajaIdiomas = styled.div`
  width: 200px;
  min-height: 100px;
  background-color: ${theme.secondary.coral};
  position: absolute;
  top: 25px;
`;
const Lista = styled.ul`
  list-style: none;
`;
const Item = styled.li`
  padding: 5px;
  height: 40px;
  border-bottom: 1px solid black;
  align-content: center;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
    color: ${theme.secondary.coral};
    background-color: ${theme.primary.sand};
    background-color: white;
  }
`;
const ImgFlag = styled.img`
  width: 30px;
`;
const CajaPerfil = styled.div`
  min-width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  transition: ease 0.2s all;

  @media screen and (max-width: 620px) {
    display: flex;
    /* flex-direction: row; */
    border: 1px solid black;
    margin: 5px;
    border-radius: 4px;
    padding: 3px;
  }

  &:hover {
    /* border: 1px solid ${theme.secondary.coral}; */
    border-radius: 4px;
    box-shadow: ${theme.config.sombra};
  }
`;

const CajaAvatar = styled.div`
  width: 40px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
`;
const ImgAvatar = styled.img`
  width: 80%;
  border-radius: 50%;
`;
const CajaNombrePerfil = styled.div``;
const NombrePerfil = styled.h3`
  /* text-overflow: ; */
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  /* border-bottom: 3px transparent; */
`;
const CajaTopCelMovil = styled.div`
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  background-color: ${theme.primary.turquoise};
  /* min-height: 60px; */
`;

const NamePage = styled.div`
  padding: 0 30px 0 30px;
  display: flex;

  width: 100%;
  border-bottom: 3px solid ${theme.primary.turquoiseBrillante};
  height: 60px;
  h2 {
    margin-bottom: 7px;
    font-weight: 200;
  }
  @media screen and (max-width: 620px) {
    background-color: transparent;
  }
`;

const BoxBarsMenu = styled.div`
  width: 30px;
  height: 0px;
  position: absolute;
  left: 18px;
  margin-top: 10px;
  margin-right: 5px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
  display: none;
  @media screen and (max-width: 620px) {
    display: inline-block;
    border: 1px solid ${theme.azul2};
    /* background-color: ${theme.primary.turquoise}; */
    background-color: ${theme.primary.neutral200};
    border-radius: 3px;
    padding: 2px;
    width: 40px;
    height: 35px;
    left: auto;
    right: 10px;
    top: 40px;
    position: absolute;
  }
`;

const Linea = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background: #000;
  margin-top: 5px;
  transform-origin: 0px 100%;
  transition: all 300ms;
  &.activeline1 {
    transform: rotate(42deg) translate(-4px, -3px);
    margin-left: 5px;
  }

  &.activeline2 {
    opacity: 0;
    margin-left: -30px;
  }

  &.activeline3 {
    margin-left: 5px;
    transform: rotate(-45deg) translate(-5px, 10px);
  }
`;
const Linea1 = styled(Linea)``;
const Linea2 = styled(Linea)``;
const Linea3 = styled(Linea)``;
