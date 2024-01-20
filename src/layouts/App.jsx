import { Head } from "@router";
import { Outlet } from "react-router-dom";
import LanguageProvider from "../context/LanguageContext";
import LanguageButton from "../components/LanguageButton";
export default () => {
  return (
    <>
      <LanguageProvider>
        <LanguageButton />
        <Outlet />
      </LanguageProvider>
    </>
  );
};
