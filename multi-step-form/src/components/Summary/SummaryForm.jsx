import React, { useContext, useEffect, useState } from "react";
import FormContext from "../../FormContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SummaryForm = () => {
  const navigate = useNavigate();
  const { yearly, activeCardData, addOnsData } = useContext(FormContext);
  const [total, setTotal] = useState("");

  useEffect(() => {
    calculateTotal();
  }, []);

  const handleSubmitClick = () => {};
  const handleBackClick = () => {
    navigate("/AddOns");
  };

  const calculateTotal = () => {
    let totalprice = 0;
    let addprice = 0;
    let planprice = activeCardData.price.split(/[$/]/);
    totalprice += parseInt(planprice[1]);
    if (addOnsData.length > 0) {
      addOnsData.forEach((addon) => {
        let price = addon.addonPrice.split(/[$/]/);
        addprice += parseInt(price[1]);
      });
    }
    totalprice += parseInt(addprice);
    setTotal(totalprice);
  };

  return (
    <div className="form-container">
      {console.log(addOnsData)}
      <div className="header-container">
        <h1 className="primary-heading">Finishing up</h1>
        <p className="page-info">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="body-summary-container">
        <div className="summary-card-container">
          <div className="summary-card">
            <div className="summary-line1">
              <div className="plan-container">
                <p className="plan-chosen">
                  {activeCardData.imgInfo}
                  {yearly ? "(Yearly)" : "(Monthly)"}
                </p>
                <Link className="change">change</Link>
              </div>
              <span className="plan-price">{activeCardData.price}</span>
            </div>
            <div className="line"></div>
            {addOnsData.map((addon, index) => {
              return (
                <div className="addon-line-container" key={index}>
                  <div className="nameaddon">{addon?.addonName}</div>
                  <div className="priceaddon">{addon?.addonPrice}</div>
                </div>
              );
            })}
          </div>
          <div className="total-container">
            <div className="totalname">
              Total{yearly ? " (per year)" : " (per month)"}
            </div>
            {yearly ? (
              <div className="totalprice">{`+$${total}/yr`}</div>
            ) : (
              <div className="totalprice">{`+$${total}/mo`}</div>
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
          className="primary-btn-confirm"
          onClick={handleSubmitClick}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SummaryForm;
