import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import InfoForm from "./InfoForm";
import "./info.css";

const Info = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="info-container">
          <InfoForm />
        </div>
      </div>
    </div>
  );
};

export default Info;
