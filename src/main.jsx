import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavbarComponent from "./assets/shared_component/navbar/NavbarComponent.jsx";
import FooterComponent from "./assets/shared_component/Footer/FooterComponent.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavbarComponent />
      <App />
      <FooterComponent />
    </BrowserRouter>
  </React.StrictMode>
);
