import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FormContextProvider } from "./FormContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormContextProvider>
  </React.StrictMode>
);
