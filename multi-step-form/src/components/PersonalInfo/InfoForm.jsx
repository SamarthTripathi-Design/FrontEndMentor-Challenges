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

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitClick = () => {
    if (formData.UserName === "") {
      setError((prevFormData) => ({
        ...prevFormData,
        UserName: true,
      }));
    } else if (formData.Email === "") {
      setError((prevFormData) => ({
        ...prevFormData,
        UserName: false,
        Email: true,
      }));
    } else if (formData.PhoneNum === "") {
      setError((prevFormData) => ({
        ...prevFormData,
        Email: false,
        PhoneNum: true,
      }));
    } else {
      setError((prevFormData) => ({
        ...prevFormData,
        PhoneNum: false,
      }));
      navigate("/Plan");
    }
  };

  return (
    <div className="form-container">
      <div className="header-container">
        <h1 className="primary-heading">Personal info</h1>
        <p className="page-info">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="body-info-container">
        <div className="label-container">
          <label htmlFor="Username" className="form-label">
            Name
          </label>
          {error.UserName && (
            <p className="error-message">This Field is required</p>
          )}
        </div>
        <input
          type="text"
          id="Username"
          name="UserName"
          placeholder="e.g. Stephen King"
          className={
            error.UserName
              ? "form-input  form-input-error"
              : "form-input form-input-default"
          }
          onChange={handleInputChange}
          value={formData.UserName}
        />
        <div className="label-container">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          {error.Email && (
            <p className="error-message">This Field is required</p>
          )}
        </div>
        <input
          type="email"
          id="email"
          name="Email"
          placeholder="e.g. stephenking@lorem.com"
          className={
            error.Email
              ? "form-input  form-input-error"
              : "form-input form-input-default"
          }
          onChange={handleInputChange}
          value={formData.Email}
        />
        <div className="label-container">
          <label htmlFor="PhoneNum" className="form-label">
            Phone Number
          </label>
          {error.PhoneNum && (
            <p className="error-message">This Field is required</p>
          )}
        </div>
        <input
          type="text"
          id="PhoneNum"
          name="PhoneNum"
          placeholder="e.g. +1 234 567 890"
          className={
            error.PhoneNum
              ? "form-input  form-input-error"
              : "form-input form-input-default"
          }
          onChange={handleInputChange}
          value={formData.PhoneNum}
        />
      </div>
      <div className="footer-container">
        <div></div>
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
