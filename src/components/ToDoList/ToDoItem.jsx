import React from "react";
import "./ToDoList.css";

const ToDoItem = (props) => {
  // add section that shows the x button to remove tasks
  if (props.isChecked) {
    return (
      <>
        <li className="todo-li checked">{props.task}</li>
      </>
    );
  } else {
    return (
      <>
        <li className="todo-li">{props.task}</li>
      </>
    );
  }
};

export default ToDoItem;
