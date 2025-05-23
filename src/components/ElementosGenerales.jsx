import { styled } from "styled-components";
import React from "react";
import { Theme, theme } from "../config/theme";

import { Link } from "react-router";

export const BtnGeneral = styled.button`
  margin: 5px;
  cursor: pointer;

  border-radius: 5px;
  height: 35px;
  padding: 5px;
  outline: none;
  border: 1px solid ${theme.primary.neutral200};
  font-size: 1rem;
  background-color: white;
  color: ${theme.primary.neutral650};
  box-shadow: 3px 3px 3px -1px rgba(0, 0, 0, 0.43);
  display: inline-block;
  border: 1px solid black;
  transition: all 0.2s ease;
  &:hover {
    border: 1px solid ${theme.primary.turquoise};

    background-color: ${Theme.secondary.azulBrillante};
    text-decoration: underline;
  }

  &:active {
    background-color: ${theme.primary.turquoiseTenue};
    color: #fff;
  }

  &.danger {
    background-color: red;
    color: ${theme.primary.neutral650};
    &:hover {
      color: red;
      background-color: white;
    }
    &:active {
      background-color: #f74a4a;
      color: #fff;
    }
  }
  @media screen and (max-width: 800px) {
    height: 30px;
    min-width: 80px;
    padding: 4px;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 600px) {
    min-width: 70px;
  }
`;
export const TituloSeccion = styled.h2`
  color: ${Theme.primary.azulPeka};
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  text-decoration: underline;
  margin-bottom: 40px;
  font-weight: normal;
`;
export const TituloH1 = styled.h1`
  color: ${theme.primary.turquoiseTenue};
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  text-decoration: underline;
  margin-bottom: 40px;
  font-weight: normal;
`;

export const InputGeneral = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  color: ${theme.primary.turquoiseBrillante};
  background-color: ${theme.complementary.midnightBlue};
  &:focus {
    border: 1px solid ${theme.primary.turquoiseBrillante};
  }
`;
export const TextAreaGeneral = styled.textarea`
  width: 100%;
  min-height: 60px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  color: ${theme.primary.turquoiseBrillante};
  background-color: ${theme.complementary.midnightBlue};
  &:focus {
    border: 1px solid ${theme.primary.turquoiseBrillante};
  }
`;

export const OpciongGneral = styled.option``;
export const DataList = styled.datalist``;

const CajaInput = styled.div`
  width: 100%;
  margin-bottom: 10px;
  &.btn {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  &.links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  &.checkbox {
    min-height: 25px;
    /* border: 1px solid red; */
    padding: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
  }
`;

const TituloInput = styled.p`
  color: ${theme.complementary.midnightBlue};
`;
const Input = styled(InputGeneral)`
  &.checkbox {
    background-color: red;
    width: 20px;
  }
  &.danger {
    color: ${theme.secondary.coral};
    border: 1px solid red;
  }
  &.none {
    display: none;
  }
  &.radio {
    width: 15px;
    &:focus {
      border: 1px solid black;
      width: 25px;
    }
  }
`;

export const MenuDesplegable = styled.select`
  outline: none;
  border: none;
  color: ${theme.primary.turquoiseBrillante};
  background-color: ${theme.complementary.midnightBlue};
  height: 35px;
  min-width: 180px;
  padding: 5px;
  border-radius: 4px;
  &.cabecera {
    border: 1px solid ${theme.azulOscuro1Sbetav2};
  }

  &:focus {
    border: 1px solid ${theme.primary.turquoiseBrillante};
  }

  &.altoDetalle {
    height: 20px;
    border-radius: 0;
  }
  &.disabled {
    background-color: ${theme.fondo};
    color: black;
  }
`;

export const Opciones = styled.option`
  border: none;
  background-color: ${theme.azulOscuro1Sbetav};
`;

<CajaInput>
  <TituloInput>Perfil de instagram</TituloInput>

  <Input
    value={""}
    name="instagram"
    onChange={""}
    type="email"
    placeholder="Perfil de instagram"
    autoComplete="off"
  />
</CajaInput>;

export const Enlace2 = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  border-radius: 5px;
  min-width: 100px;
  padding: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
  box-shadow: 3px 3px 3px -1px rgba(0, 0, 0, 0.43);
  display: inline-block;
  min-height: 30px;

  background-color: white;
  color: black;
  &:focus {
    background-color: ${Theme.primary.rojoCalido};
    color: black;
  }

  &:hover {
    background-color: ${Theme.secondary.azulBrillante};
  }
  &:active {
    background-color: ${Theme.secondary.coralCalido};
    color: black;
  }
`;
