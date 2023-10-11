import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import AddOnsForm from "./AddOnsForm";
import "./addons.css";

const AddOns = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="sidebar-container">
          <Sidebar step="step3" />
        </div>
        <div className="info-container">
          <AddOnsForm />
        </div>
      </div>
    </div>
  );
};

export default AddOns;
