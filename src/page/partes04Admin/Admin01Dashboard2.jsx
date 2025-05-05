import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import StatsCard from "../../components/StatsCard";
import ImgDate from "./../../../public/icon/stats/recordatorio.png";
import ImgCasa from "./../../../public/icon/stats/casa.png";
import ImgCama from "./../../../public/icon/stats/cama.png";
import ImgPost from "./../../../public/icon/stats/post.png";
import ImgUser from "./../../../public/icon/stats/usuario.png";
import { NavLink } from "react-router";

export default function Admin01Dashboard2({ stats }) {
  const [arrayElement, setArrayElements] = useState([]);
  useEffect(() => {
    setArrayElements([
      {
        icono: ImgDate,
        qty: stats.diasReservados,
        titulo: "Dias reservados",
        link: "/admin/hospedajes",
      },
      {
        icono: ImgCama,
        qty: stats.hospedajes,
        titulo: "Hospedajes",
        link: "/admin/hospedajes",
      },
      {
        icono: ImgCasa,
        qty: stats.propiedades,
        titulo: "Propiedades",
        link: "/admin/propiedades",
      },
      {
        icono: ImgPost,
        qty: stats.qtyPost,
        titulo: "Posts",
        link: "/blog",
      },
      {
        icono: ImgUser,
        qty: stats.usuarios,
        titulo: "Usuarios",
        link: "/admin/usuarios",
      },
    ]);
  }, [stats]);

  return (
    <Container>
      {arrayElement.map((stat, index) => {
        return (
          <Enlace key={index} to={stat.link}>
            <StatsCard icono={stat.icono} qty={stat.qty} titulo={stat.titulo} />
          </Enlace>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  gap: 15px;
  padding: 15px;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 920px) {
    gap: 10px;
    padding: 10px;
  }
`;
const Enlace = styled(NavLink)`
  width: 28%;
  border: 1px solid black;
  border-radius: 5px;
  /* height: 100px; */
  text-decoration: none;
  transition: ease 0.2s all;
  &:hover {
    box-shadow: ${theme.config.sombra};
  }
  @media screen and (max-width: 920px) {
    width: 25%;
  }
  @media screen and (max-width: 650px) {
    width: 30%;
  }
  @media screen and (max-width: 560px) {
    width: 45%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
