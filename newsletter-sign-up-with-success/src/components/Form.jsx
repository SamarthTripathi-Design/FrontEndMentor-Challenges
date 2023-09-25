import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [active, setActive] = useState("first");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    if (validateEmail(email)) {
      setActive("second");
      setError(false);
    } else {
      setActive("first");
      setError(true);
    }
  };

  function validateEmail(emailId) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(emailId);
  }

  return active === "first" ? (
    <>
      <div className="form__container">
        <div className="form__card">
          <div className="form__card-info">
            <h3 className="primary-heading">Stay updated!</h3>
            <p className="heading-info">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="info-list">
              <div className="list">
                <img
                  src="../../assets/images/icon-list.svg"
                  className="image"
                  alt=""
                />
                <li>Product discovery and building what matters</li>
              </div>
              <div className="list">
                <img
                  src="../../assets/images/icon-list.svg"
                  className="image"
                  alt=""
                />
                <li>Measuring to ensure updates are a success</li>
              </div>
              <div className="list">
                <img
                  src="../../assets/images/icon-list.svg"
                  className="image"
                  alt=""
                />
                <li>And much more!</li>
              </div>
            </ul>
            <div className="inputbox-container">
              <div className="label-container">
                <label
                  htmlFor="email"
                  className={error ? "email-label error-label" : "email-label"}
                >
                  Email address
                </label>
                {error && (
                  <p className="email-label error-label">
                    Valid email required
                  </p>
                )}
              </div>
              <input
                type="email"
                name="email"
                className={error ? "email-input error-input" : "email-input"}
                onChange={handleInputChange}
                value={email}
                placeholder="email@company.com"
              />
            </div>
            <div className="btn-container">
              <button className="btn-submit" onClick={handleClick}>
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
          <div className="form__card-hero"></div>
        </div>
      </div>
      <div>
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Form;

// Stay updated! Join 60,000+ product managers receiving monthly updates on:
// Product discovery and building what matters Measuring to ensure updates are
// a success And much more! Email address email@company.com Subscribe to
// monthly newsletter

// <!-- Sign-up form end -->

// <!-- Success message start -->

// Thanks for subscribing! A confirmation email has been sent to
// ash@loremcompany.com. Please open it and click the button inside to confirm
// your subscription. Dismiss message
