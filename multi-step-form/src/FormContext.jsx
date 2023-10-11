import React, { useState, createContext } from "react";

export const FormContext = createContext({});

export const FormContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("first");
  const [yearly, setYearly] = useState(false);
  const [activeCardData, setActiveCardData] = useState({
    // imgInfo: "Arcade",
    // price: "$9/Mo",
    imgInfo: "",
    price: "",
  });
  const [addOnsData, setAddOnsData] = useState([
    // { addonName: "Online service", addonPrice: "+$1/mo" },
    // { addonName: "Larger storage", addonPrice: "+$2/mo" },
    // {
    //   addonName: "Customizable Profile",
    //   addonPrice: "+$2/mo",
    // },
  ]);

  return (
    <FormContext.Provider
      value={{
        activeTab,
        setActiveTab,
        yearly,
        setYearly,
        activeCardData,
        setActiveCardData,
        addOnsData,
        setAddOnsData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
