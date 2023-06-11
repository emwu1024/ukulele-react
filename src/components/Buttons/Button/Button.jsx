import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  return (
    <>
      <NavLink className="btn" to={props.route}>
        {props.name}
      </NavLink>
      {/* Pass in route through props as well?? */}
    </>
  );
};

export default Button;
