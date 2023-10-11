import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ConfirmationForm from "./ConfirmationForm";
import "./confirmation.css";

const Confirmation = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="sidebar-container">
          <Sidebar step="step4" />
        </div>
        <div className="info-container">
          <ConfirmationForm />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
