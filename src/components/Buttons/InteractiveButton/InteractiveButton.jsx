import React from "react";
import { NavLink } from "react-router-dom";
import "./InteractiveButton.css";

const InteractiveButton = (props) => {
  return (
    <>
      <button className="interactive-btn">
        <NavLink className="button" to={props.route}>
          {props.name}
        </NavLink>
        {/* Pass in route through props as well?? */}
      </button>
    </>
  );
};

export default InteractiveButton;
