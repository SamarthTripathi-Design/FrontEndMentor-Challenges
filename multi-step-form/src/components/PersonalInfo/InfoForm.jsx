import React, { useContext } from "react";
import FormContext from "../../FormContext";

const InfoForm = () => {
  const { activeTab, setActiveTab } = useContext(FormContext);

  return (
    <div className="form-container">
      <div className="header-container">
        <h1 className="primary-heading">Personal info</h1>
        <p className="page-info">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="body-container">
        <label htmlFor="Username" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="Username"
          name="Username"
          placeholder="e.g. Stephen King"
          className="form-input"
        />
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          className="form-input"
        />
        <label htmlFor="PhoneNum" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          id="PhoneNum"
          name="PhoneNum"
          placeholder="e.g. +1 234 567 890"
          className="form-input"
        />
      </div>
      <div className="footer-container">
        <div></div>
        <button type="submit" className="primary-btn">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default InfoForm;
