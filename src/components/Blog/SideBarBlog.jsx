import React from "react";
import styled from "styled-components";
import OfertaSideBar from "./OfertaSideBar";
import SoyXSideBar from "./SoyXSideBar";
import MasVistoSideBar from "./MasVistoSideBar";

export default function SideBarBlog({ relacionados }) {
  return (
    <Container>
      <OfertaSideBar />
      <SoyXSideBar />
      <MasVistoSideBar relacionados={relacionados} />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  @media screen and (max-width: 700px) {
    padding: 15px;
  }
`;
