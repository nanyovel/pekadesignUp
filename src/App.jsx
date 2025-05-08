import { useEffect, useState } from "react";
import "./app.css";
import { theme } from "./config/theme";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./page/Home";
import Footer from "./components/Footer";
import MasterRoutes from "./routes/MasterRoutes";
import ScrollToTop from "./components/ScrollTop";
import { doc, onSnapshot } from "firebase/firestore";
import db from "./firebase/firebaseConfig";
import BotonQuery from "./components/BotonQuery";
import { useDocById } from "./libs/FetchFirebase";

function App() {
  // ******************** RECURSOS GENERALES ******************** //
  // ******************** RECURSOS GENERALES ******************** //

  const [dbUsuarios, setDBUsuarios] = useState([]);
  return (
    <>
      <ScrollToTop />
      <MasterRoutes setDBUsuarios={setDBUsuarios} dbUsuarios={dbUsuarios} />
    </>
  );
}

export default App;
const H2 = styled.h1`
  background-color: red;
  color: white;
`;
// Hero Section
const HeroSection = styled.section`
  background-color: ${theme.primary.turquoise};
  color: ${theme.primary.white};
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const HeroButton = styled.button`
  background-color: ${theme.secondary.coral};
  color: ${theme.primary.white};
  padding: 12px 24px;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.secondary.palmGreen};
  }
`;

// Villas Section
const VillasSection = styled.section`
  padding: 60px 0;
  background-color: ${theme.primary.sand};
`;

const VillasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 32px;
  justify-items: center;
`;

const VillaCard = styled.div`
  background-color: ${theme.primary.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`;

const VillaImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const VillaContent = styled.div`
  padding: 24px;
`;

const VillaTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

const VillaDescription = styled.p`
  color: ${theme.complementary.midnightBlue};
  margin-bottom: 16px;
`;

const VillaButton = styled.button`
  background-color: ${theme.secondary.coral};
  color: ${theme.primary.white};
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.secondary.palmGreen};
  }
`;

// Contact Section
const ContactSection = styled.section`
  padding: 60px 0;
  background-color: ${theme.primary.white};
  text-align: center;
`;

const ContactButton = styled.button`
  background-color: ${theme.secondary.gold};
  color: ${theme.primary.white};
  padding: 12px 24px;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.secondary.palmGreen};
  }
`;

// Footer
// const Footer = styled.footer`
//   background-color: ${theme.complementary.midnightBlue};
//   color: ${theme.primary.white};
//   padding: 16px;
//   text-align: center;
// `;
