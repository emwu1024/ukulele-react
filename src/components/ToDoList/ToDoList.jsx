import React from "react";
import Carousel, { CarouselItem } from "../Carousel/Carousel";
import "./ToDoList.css";

const ToDoList = () => {
  return (
    <>
      <div className="todo-container">
        <div className="todo-header">
          <h1>Notes + Song List</h1>
          <div className="search-container">
            <input
              className="todo-input"
              type="text"
              id="inputToDo"
              placeholder="Task Name"
            ></input>
            <span onClick="newElement()" className="addBtn">
              Add
            </span>
          </div>
        </div>
        <div className="list-container">
          <ul id="ulToDo" className="todo-ul">
            <li className="todo-li">Go to gym</li>
            <li className="todo-li checked">Pay bills</li>
            <li className="todo-li">Check emails</li>
            <li className="todo-li">Buy eggs</li>
            <li className="todo-li">Read a book</li>
            <li className="todo-li">Finish making this to do list</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
