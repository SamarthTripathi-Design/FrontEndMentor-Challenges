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
  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    PhoneNum: "",
  });
  const [addOnsData, setAddOnsData] = useState([
    // { addonName: "Online service", addonPrice: "+$1/mo" },
    // { addonName: "Larger storage", addonPrice: "+$2/mo" },
    // {
    //   addonName: "Customizable Profile",
    //   addonPrice: "+$2/mo",
    // },
  ]);
  const [activeAddonsCard, setactiveAddonsCard] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const [activeCard, setActiveCard] = useState("");

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
        activeAddonsCard,
        setactiveAddonsCard,
        formData,
        setFormData,
        activeCard,
        setActiveCard,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
