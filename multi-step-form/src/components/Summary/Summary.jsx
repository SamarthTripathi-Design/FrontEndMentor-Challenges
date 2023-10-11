import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SummaryForm from "./SummaryForm";
import "./summary.css";

const Summary = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="info-container">
          <SummaryForm />
        </div>
      </div>
    </div>
  );
};

export default Summary;
