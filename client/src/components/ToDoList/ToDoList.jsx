import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

const ToDoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodoItem = () => {
    if (inputValue === "") {
      alert("Please enter a name for your task!");
    } else {
      setTodoList([...todoList, { task: inputValue, isChecked: false }]);
      setInputValue("");
    }
  };

  return (
    <div className="todo-container">
      <section className="todo-header">
        <h1 className="page-title">Notes + Song List</h1>
        <div className="search-container">
          <input
            className="todo-input"
            value={inputValue}
            onInput={(e) => setInputValue(e.target.value)}
            type="text"
            id="inputToDo"
            placeholder="Task Name"
          />
          <span onClick={addTodoItem} className="addBtn">
            Add
          </span>
        </div>
      </section>
      <section className="list-container">
        <ul id="ulToDo" className="todo-ul">
          {todoList.map(({ task, isChecked }, index) => (
            <ToDoItem key={index} task={task} isChecked={isChecked} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ToDoList;
