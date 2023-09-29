import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="img-container">
      <div className="img">
        <div className="tabs-container">
          <div className="tab-1">
            <div className="number">1</div>
            <div className="step-container">
              <div className="step">STEP 1</div>
              <div className="tab">YOUR INFO </div>
            </div>
          </div>
          <div className="tab-2">
            <div className="number">2</div>
            <div className="step-container">
              <div className="step">STEP 2</div>
              <div className="tab">SELECT PLAN </div>
            </div>
          </div>
          <div className="tab-3">
            <div className="number">3</div>
            <div className="step-container">
              <div className="step">STEP 3</div>
              <div className="tab">ADD ON</div>
            </div>
          </div>
          <div className="tab-4">
            <div className="number">4</div>
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
