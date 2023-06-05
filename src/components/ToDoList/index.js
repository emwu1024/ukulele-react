// Create a "remove" button and append it to each list item
var nodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < nodeList.length; i++) {
  var span = document.createElement("span");
  var text = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(text);
  nodeList[i].appendChild(span);
}

// Click on a remove button to hide the current list item
var remove = document.getElementsByClassName("remove");
var i;
for (i = 0; i < remove.length; i++) {
  remove[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    // LI needs to be capitalised otherwise it doesn't work
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputToDo").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Please enter a name for your task!");
  } else {
    document.getElementById("ulToDo").appendChild(li);
  }

  document.getElementById("inputToDo").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputToDo").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("ulToDo").appendChild(li);
  }
  document.getElementById("inputToDo").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
