import { useEffect } from "react";
import { useLocation } from "react-router";

// ******* AL CAMBIAR DE PAGINA RECORDABA EL SCROLL ANTERIO, RAZON DESCONOCIDA ******

// ********* SOLUCION 1 *********
// Reconocer el evento de cambio de pagina y lleva el scroll al inicio
// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;

// ********* SOLUCION 2 *********
// Es casi igual y fue proporcionada por chatgpt
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Fuerza el scroll al inicio antes de que la página sea visible
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
