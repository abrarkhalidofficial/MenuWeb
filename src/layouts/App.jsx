import LanguageButton from "../components/LanguageButton";
import LanguageProvider from "../context/LanguageContext";
import { Outlet } from "react-router-dom";

export default () => {
  return (
    <LanguageProvider>
      <LanguageButton />
      <Outlet />
    </LanguageProvider>
  );
};
