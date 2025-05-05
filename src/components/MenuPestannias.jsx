import React from "react";
import { theme } from "../config/theme";

import styled from "styled-components";

import { Fragment } from "react";

export default function MenuPestannias({
  arrayOpciones,
  handlePestannias,
  tab,
  dashboard,
}) {
  return (
    <CajaBarraOpciones
      className={`
      
     ${tab ? " tab " : ""}
     ${dashboard ? " dashboard " : ""}
      
      `}
    >
      <ListaOpciones className={tab ? "tab" : ""}>
        {arrayOpciones.map((opciones, index) => {
          return (
            <WrapOpcion key={index} className={tab ? "tab" : ""}>
              <OpcionLI
                key={index}
                name={opciones.nombre}
                className={`
                  ${opciones.select ? " selected " : ""}
                  ${tab ? " tab " : ""}
                `}
              >
                <AnchorText
                  data-id={index}
                  onClick={(e) => handlePestannias(e)}
                  className={tab ? "tab" : ""}
                >
                  {opciones.nombre}
                </AnchorText>
              </OpcionLI>
            </WrapOpcion>
          );
        })}
      </ListaOpciones>
    </CajaBarraOpciones>
  );
}

const CajaBarraOpciones = styled.div`
  color: ${theme.textoBlancoEdtem};
  border-bottom: 1px solid ${theme.primary.neutral200};

  &.tab {
    background-color: ${theme.secondary.coral};
  }
  &.dashboard {
    overflow-x: scroll;
  }
`;
const ListaOpciones = styled.ul`
  display: flex;
  list-style: none;
`;
const WrapOpcion = styled.div`
  height: 40px;
`;
const OpcionLI = styled.li`
  font-size: 1.1rem;
  margin-right: 3px;
  /* margin: 5px; */
  padding: 6px;
  border-bottom: 4px solid transparent;
  transition: 0.2s ease all;
  &.selected {
    border-bottom-color: white;
    color: ${theme.primary.turquoise};
    color: white;
  }
  &.tab {
    border-bottom: none;
    background-color: ${theme.primary.neutral200};
    color: black;
    &.selected {
      background-color: ${theme.secondary.coral};
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
  /* background-color: ${theme.primary.neutral600}; */
`;
const AnchorText = styled.a`
  cursor: pointer;

  padding: 4px;
  &:hover {
    color: ${theme.primary.sand};
    &.tab {
      color: ${theme.primary.neutral500};
      color: white;
    }
  }
`;
