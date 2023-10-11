import React from "react";
import "./sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="img-container">
      <div className="img">
        <div className="tabs-container">
          <div className="tab-1">
            <div
              className={
                props.step === "step1" ? "number tab-active " : "number"
              }
            >
              1
            </div>
            <div className="step-container ">
              <div className="step">STEP 1</div>
              <div className="tab">YOUR INFO </div>
            </div>
          </div>
          <div className="tab-2">
            <div
              className={
                props.step === "step2" ? "number tab-active" : "number"
              }
            >
              2
            </div>
            <div className="step-container">
              <div className="step">STEP 2</div>
              <div className="tab">SELECT PLAN </div>
            </div>
          </div>
          <div className="tab-3">
            <div
              className={
                props.step === "step3" ? "number tab-active" : "number"
              }
            >
              3
            </div>
            <div className="step-container">
              <div className="step">STEP 3</div>
              <div className="tab">ADD ON</div>
            </div>
          </div>
          <div className="tab-4">
            <div
              className={
                props.step === "step4" ? "number tab-active" : "number"
              }
            >
              4
            </div>
            <div className="step-container">
              <div className="step">STEP 4</div>
              <div className="tab">SUMMARY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
