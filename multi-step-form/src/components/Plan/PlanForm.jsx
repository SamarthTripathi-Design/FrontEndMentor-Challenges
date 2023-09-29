import React, { useContext, useState } from "react";
import FormContext from "../../FormContext";
import { useNavigate } from "react-router-dom";

const InfoForm = () => {
  const navigate = useNavigate();
  const { activeTab, setActiveTab } = useContext(FormContext);
  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    PhoneNum: "",
  });
  const [error, setError] = useState({
    UserName: false,
    Email: false,
    PhoneNum: false,
  });

  const handleBackclick = () => {
    navigate("/PersonalInfo");
  };

  const handleSubmitClick = () => {};

  return (
    <div className="form-container">
      <div className="header-container">
        <h1 className="primary-heading">Select your plan</h1>
        <p className="page-info">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="body-container"></div>
      <div className="footer-container">
        <button className="seconday-btn" onClick={handleBackclick}>
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

export default InfoForm;
