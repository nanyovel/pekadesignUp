import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthContext.jsx";
// import { SpeedInsights } from "@vercel/speed-insights/next";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
