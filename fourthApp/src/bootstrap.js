import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { TerminalContextProvider } from "react-terminal";
const rootElement = document.getElementById("terminal");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <TerminalContextProvider>
    <App />
     </TerminalContextProvider>
  // </StrictMode>
);
