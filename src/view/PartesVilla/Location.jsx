import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";

export default function Location({ urlMapa }) {
  return (
    <CajaInterna>
      <MapaGoogle src={urlMapa}></MapaGoogle>
    </CajaInterna>
  );
}

const CajaInterna = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 11px -1px -1px 5px #eeeeee5c;
  -webkit-box-shadow: -4px 0px 10px -3px #eeeeee5c;
  -moz-box-shadow: -4px 0px 10px -3px #eeeeee5c;
  box-shadow: -4px 0px 10px -3px #eeeeee5c;
`;
const MapaGoogle = styled.iframe`
  width: 95%;
  display: block;
  margin: auto;
  height: 400px;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.43);
  border: 1px solid ${theme.primary.neutral500};
`;
