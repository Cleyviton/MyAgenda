import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { App } from "./App.tsx";
import Providers from "./contexts/Providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
