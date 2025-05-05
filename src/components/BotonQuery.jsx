import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { BtnGeneral } from "./ElementosGenerales";

export default function BotonQuery(props) {
  const consulta = () => {
    console.log(props);
  };
  return (
    <BtnSimple
      className={theme.config.modoDev ? "modoDev" : ""}
      onClick={() => consulta()}
    >
      Consulta
    </BtnSimple>
  );
}
const BtnSimple = styled(BtnGeneral)`
  display: none;
  &.modoDev {
    display: inline-block;
  }
`;
