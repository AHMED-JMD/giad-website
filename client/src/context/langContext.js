import React, { createContext, useState } from "react";

export const LangContext = createContext();

const LangContextProvider = (props) => {
  let lang = localStorage.getItem("lang");

  const [language, setLanguage] = useState(lang);

  const ArFunc = () => {
    setLanguage("Ar");
    localStorage.setItem("lang", "Ar");
  };

  const EnFunc = () => {
    setLanguage("En");
    localStorage.setItem("lang", "En");
  };

  return (
    <LangContext.Provider value={{ language, ArFunc, EnFunc }}>
      {props.children}
    </LangContext.Provider>
  );
};
export default LangContextProvider;
