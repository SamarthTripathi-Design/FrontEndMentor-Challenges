import React, { useContext } from "react";
import FormContext from "../../FormContext";
import { useNavigate } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const InfoForm = () => {
  const navigate = useNavigate();
  const {
    yearly,
    setYearly,
    activeCardData,
    setActiveCardData,
    activeCard,
    setActiveCard,
  } = useContext(FormContext);

  const handleBackClick = () => {
    navigate("/PersonalInfo");
  };

  const handleSubmitClick = () => {
    if (activeCardData.price !== "") {
      navigate("/AddOns");
    }
  };

  const handleToggle = (e) => {
    setYearly(e.target.checked);
  };

  const handleCardClick = (e) => {
    setActiveCardData({
      imgInfo: e.target.childNodes[1].childNodes[0].innerText,
      price: e.target.childNodes[1].childNodes[1].innerText,
    });
    setActiveCard(e.target.childNodes[1].childNodes[0].innerText);
  };

  return (
    <div className="form-container">
      <div className="header-container">
        <h1 className="primary-heading">Select your plan</h1>
        <p className="page-info">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="body-plan-container">
        <div className="subs-cards-container">
          <div
            className={
              activeCard === "Arcade" ? "subs-card  active" : "subs-card"
            }
            onClick={handleCardClick}
          >
            <div className="subs-card-img-1"></div>
            <div className="sub-info-container">
              <div className="img-heading">Arcade</div>
              {yearly ? (
                <>
                  <div className="price">$90/yr</div>
                  <div className="subs-free">2 months free</div>
                </>
              ) : (
                <div className="price">$9/mo</div>
              )}
            </div>
          </div>
          <div
            className={
              activeCard === "Advanced" ? "subs-card  active" : "subs-card"
            }
            onClick={handleCardClick}
          >
            <div className="subs-card-img-2"></div>
            <div className="sub-info-container">
              <div className="img-heading">Advanced</div>
              {yearly ? (
                <>
                  <div className="price">$120/yr</div>
                  <div className="subs-free">2 months free</div>
                </>
              ) : (
                <div className="price">$12/mo</div>
              )}
            </div>
          </div>
          <div
            className={activeCard === "Pro" ? "subs-card  active" : "subs-card"}
            onClick={handleCardClick}
          >
            <div className="subs-card-img-3"></div>
            <div className="sub-info-container">
              <div className="img-heading">Pro</div>
              {yearly ? (
                <>
                  <div className="price">$150/yr</div>
                  <div className="subs-free">2 months free</div>
                </>
              ) : (
                <div className="price">$15/mo</div>
              )}
            </div>
          </div>
        </div>
        <div className="toggle">
          <ToggleSwitch
            label1="Monthly"
            label2="Yearly"
            onClick={handleToggle}
          />
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

export default InfoForm;
