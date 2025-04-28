import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ThirdAppStartPage from "./ThirdAppStartPage.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
    <ThirdAppStartPage />
  // </StrictMode>
);
