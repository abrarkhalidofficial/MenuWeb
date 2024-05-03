import "./style.scss";

import App from "./App";
import LanguageProvider from "./context/LanguageContext";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
