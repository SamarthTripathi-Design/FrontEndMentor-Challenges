import React, { useState, createContext } from "react";

export const FormContext = createContext({});

export const FormContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <FormContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
