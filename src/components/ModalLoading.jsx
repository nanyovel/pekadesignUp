import styled from "styled-components";
import { CSSLoader } from "./CSSLoader";

export const ModalLoading = () => {
  return (
    <Container>
      <CSSLoader />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000af;
  z-index: 100;
  /* background-color: red; */
  backdrop-filter: blur(1px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &.imcompleta {
    background-color: transparent;
    height: 100%;
    backdrop-filter: blur(0px);
  }
`;
