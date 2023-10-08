import React, { useState, createContext } from "react";

export const FormContext = createContext({});

export const FormContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("first");
  const [yearly, setYearly] = useState(false);
  const [activeCardData, setActiveCardData] = useState({
    imgInfo: "",
    price: "",
  });

  return (
    <FormContext.Provider
      value={{
        activeTab,
        setActiveTab,
        yearly,
        setYearly,
        activeCardData,
        setActiveCardData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
