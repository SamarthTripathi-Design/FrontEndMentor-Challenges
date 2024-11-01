import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { CommentProvider } from "./context/CommentContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CommentProvider>
      <App />
    </CommentProvider>
  </StrictMode>
);
