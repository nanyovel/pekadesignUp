import React from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import CajaComentario from "../../components/Blog/CajaComentario";
import CajaFinal from "../../components/Blog/CajaFinal";

export default function ContenedorFinal({
  currentPost,
  userMaster,
  relacionados,
  width,
}) {
  console.log(relacionados);
  return (
    relacionados && (
      <>
        <WrapFinal>
          <CajaComentario
            currentPost={currentPost}
            userMaster={userMaster}
            width={width}
          />
        </WrapFinal>
        {relacionados.length > 0 && (
          <WrapFinal className="comentarios">
            <CajaFinal relacionados={relacionados} />
          </WrapFinal>
        )}
      </>
    )
  );
}
const WrapFinal = styled.div`
  padding: 0 ${theme.config.paddingLateral};
  @media screen and (max-width: 900px) {
    padding: 0 40px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;
