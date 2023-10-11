import React, { useContext } from "react";
import "./toggleswitch.css";
import FormContext from "../../FormContext";

const ToggleSwitch = ({ label1, label2, onClick }) => {
  const { yearly } = useContext(FormContext);
  return (
    <div className="container">
      <span
        className={
          !yearly
            ? "toggle-label toggle-label-active"
            : "toggle-label toggle-label-default"
        }
      >
        {label1}
      </span>
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label1}
          id={label1}
          onClick={(e) => {
            onClick(e);
          }}
          checked={yearly}
        />
        <label className="label" htmlFor={label1}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
      <span
        className={
          yearly
            ? "toggle-label toggle-label-active"
            : "toggle-label toggle-label-default"
        }
      >
        {label2}
      </span>
    </div>
  );
};

export default ToggleSwitch;
