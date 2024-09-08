import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LocalizationProvider } from "./providers";
import GlobalContextProvider from "./utils/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalContextProvider>
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  </GlobalContextProvider>
);
