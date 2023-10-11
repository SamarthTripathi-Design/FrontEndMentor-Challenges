import React, { useContext, useState } from "react";
import FormContext from "../../FormContext";
import { useNavigate } from "react-router-dom";

const AddOnsForm = () => {
  const navigate = useNavigate();
  const { yearly, setAddOnsData } = useContext(FormContext);
  const [activeAddonsCard, setactiveAddonsCard] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleSubmitClick = () => {
    if (yearly) {
      if (activeAddonsCard.checkbox1) {
        setAddOnsData((prevState) => [
          ...prevState,
          { addonName: "Online service", addonPrice: "+$10/yr" },
        ]);
      }
      if (activeAddonsCard.checkbox2) {
        setAddOnsData((prevState) => [
          ...prevState,
          { addonName: "Larger storage", addonPrice: "+$20/yr" },
        ]);
      }
      if (activeAddonsCard.checkbox3) {
        setAddOnsData((prevState) => [
          ...prevState,
          {
            addonName: "Customizable Profile",
            addonPrice: "+$20/yr",
          },
        ]);
      }
    } else {
      if (activeAddonsCard.checkbox1) {
        setAddOnsData((prevState) => [
          ...prevState,
          { addonName: "Online service", addonPrice: "+$1/mo" },
        ]);
      }
      if (activeAddonsCard.checkbox2) {
        setAddOnsData((prevState) => [
          ...prevState,
          { addonName: "Larger storage", addonPrice: "+$2/mo" },
        ]);
      }
      if (activeAddonsCard.checkbox3) {
        setAddOnsData((prevState) => [
          ...prevState,
          {
            addonName: "Customizable Profile",
            addonPrice: "+$2/mo",
          },
        ]);
      }
    }
    navigate("/Summary");
  };

  const handleBackClick = () => {
    navigate("/Plan");
  };

  const handleCheckboxClick = (e) => {
    if (e.target.name === "checkbox1") {
      setactiveAddonsCard((prevState) => ({
        ...prevState,
        checkbox1: e.target.checked,
      }));
    }
    if (e.target.name === "checkbox2") {
      setactiveAddonsCard((prevState) => ({
        ...prevState,
        checkbox2: e.target.checked,
      }));
    }
    if (e.target.name === "checkbox3") {
      setactiveAddonsCard((prevState) => ({
        ...prevState,
        checkbox3: e.target.checked,
      }));
    }
  };

  return (
    <div className="form-container">
      <div className="header-container">
        <h1 className="primary-heading">Pick add-ons</h1>
        <p className="page-info">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="body-addon-container">
        <div className="addon-card-container">
          <div
            className={
              activeAddonsCard.checkbox1
                ? "addon-card addon-active"
                : "addon-card"
            }
          >
            <input
              type="checkbox"
              className="addon-checkbox"
              name="checkbox1"
              onClick={handleCheckboxClick}
            />
            <div className="addon-info-container">
              <div className="addon-heading">Online service</div>
              <div className="addon-info">Access to multiplayer games</div>
            </div>
            {yearly ? (
              <div className="addon-price">+$10/yr</div>
            ) : (
              <div className="addon-price">+$1/mo</div>
            )}
          </div>
          <div
            className={
              activeAddonsCard.checkbox2
                ? "addon-card addon-active"
                : "addon-card"
            }
          >
            <input
              type="checkbox"
              className="addon-checkbox"
              name="checkbox2"
              onClick={handleCheckboxClick}
            />
            <div className="addon-info-container">
              <div className="addon-heading">Larger storage</div>
              <div className="addon-info">Extra 1TB of cloud save</div>
            </div>
            {yearly ? (
              <div className="addon-price">+$20/yr</div>
            ) : (
              <div className="addon-price">+$2/mo</div>
            )}
          </div>
          <div
            className={
              activeAddonsCard.checkbox3
                ? "addon-card addon-active"
                : "addon-card"
            }
          >
            <input
              type="checkbox"
              className="addon-checkbox"
              name="checkbox3"
              onClick={handleCheckboxClick}
            />
            <div className="addon-info-container">
              <div className="addon-heading">Customizable Profile</div>
              <div className="addon-info">Custom theme on your profile</div>
            </div>
            {yearly ? (
              <div className="addon-price">+$20/yr</div>
            ) : (
              <div className="addon-price">+$2/mo</div>
            )}
          </div>
        </div>
      </div>
      <div className="footer-container">
        <button className="seconday-btn" onClick={handleBackClick}>
          Go Back
        </button>
        <button
          type="submit"
          className="primary-btn"
          onClick={handleSubmitClick}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default AddOnsForm;
