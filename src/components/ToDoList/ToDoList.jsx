import React from "react";
import { useState, useEffect, useRef } from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

const ToDoList = () => {
  // initialise the to do list at the beginning (maybe with local storage down the line)
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const newElement = () => {
    // If user input isnt empty create a new ToDoItem, if it is empty alert the user
    if (inputValue === "") {
      alert("Please enter a name for your task!");
    } else {
      <ToDoItem task="userInput"></ToDoItem>;
    }
    console.log("CLICKED");
  };

  // Create a new list item when clicking on the "Add" button
  //   function newElement() {
  //     var li = document.createElement("li");
  //     var inputValue = document.getElementById("inputToDo").value;
  //     var t = document.createTextNode(inputValue);
  //     li.appendChild(t);
  //     if (inputValue === "") {
  //       alert("Please enter a name for your task!");
  //     } else {
  //       document.getElementById("ulToDo").appendChild(li);
  //     }

  //     document.getElementById("inputToDo").value = "";
  //     var span = document.createElement("SPAN");
  //     var txt = document.createTextNode("\u00D7");
  //     span.className = "remove";
  //     span.appendChild(txt);
  //     li.appendChild(span);

  //     for (i = 0; i < remove.length; i++) {
  //       remove[i].onclick = function () {
  //         var div = this.parentElement;
  //         div.style.display = "none";
  //       };
  //     }
  //   }

  return (
    <>
      <div className="todo-container">
        <section className="todo-header">
          <h1>Notes + Song List</h1>
          <div className="search-container">
            <input
              className="todo-input"
              value={inputValue}
              onInput={(e) => setInputValue(e.target.value)}
              type="text"
              id="inputToDo"
              placeholder="Task Name"
            ></input>
            <span onClick={() => newElement()} className="addBtn">
              Add
            </span>
          </div>
        </section>
        <section className="list-container">
          <ul id="ulToDo" className="todo-ul">
            <ToDoItem task="Go To Gym"></ToDoItem>
            <ToDoItem task="Taxes"></ToDoItem>
            <ToDoItem isChecked={true} task="Buy Eggs"></ToDoItem>
            <ToDoItem task="Finish Making To Do List"></ToDoItem>
          </ul>
        </section>
      </div>
    </>
  );
};

export default ToDoList;
