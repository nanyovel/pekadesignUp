import styled from "styled-components";
import { theme } from "../config/theme";

export const CSSLoader = () => {
  return <Loader className="loader"></Loader>;
};

const Loader = styled.div`
  &.loader {
    width: 50px;
    aspect-ratio: 1;
    --_c: no-repeat
      radial-gradient(farthest-side, ${theme.primary.turquoise} 92%, #0000);
    background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
    background-size: 12px 12px;
    animation: l7 1s infinite;
  }
  @keyframes l7 {
    to {
      transform: rotate(0.5turn);
    }
  }
`;
