import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import "./ToDoList.css";

const ToDoItem = (props) => {
  const [isElementVisible, setElementVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(props.isChecked);

  const removeItem = () => {
    setElementVisible(false);
  };

  const checkItem = () => {
    setIsChecked(!isChecked);
  };

  if (isChecked) {
    return (
      <>
        {isElementVisible && (
          <div className="todoitem-container">
            <li className="todo-li checked" onClick={checkItem}>
              {props.task}
            </li>
            <span className="remove" onClick={removeItem}>
              <FontAwesomeIcon icon={faX} style={{ color: "#fae7cd" }} />
            </span>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <div></div>
        {isElementVisible && (
          <div className="todoitem-container">
            <li className="todo-li" onClick={checkItem}>
              {props.task}
            </li>
            <span className="remove" onClick={removeItem}>
              <FontAwesomeIcon icon={faX} style={{ color: "#fae7cd" }} />
            </span>
          </div>
        )}
      </>
    );
  }
};

export default ToDoItem;
