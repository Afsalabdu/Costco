import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FirstAppStartPage from "./FirstAppStartPage.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FirstAppStartPage />
  </StrictMode>
);
