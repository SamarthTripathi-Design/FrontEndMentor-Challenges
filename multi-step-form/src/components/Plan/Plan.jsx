import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import PlanForm from "./PlanForm";
import "./plan.css";

const Plan = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="sidebar-container">
          <Sidebar step="step2" />
        </div>
        <div className="info-container">
          <PlanForm />
        </div>
      </div>
    </div>
  );
};

export default Plan;
