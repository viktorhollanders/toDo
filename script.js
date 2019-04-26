const addBtn = document.querySelector("div.add-button span");
const input = document.querySelector("input.ndex-toDo-input");

// This function creates the new toDo list item
function createElement() {
  // creating the html elements for the toDo list item
  let toDoItem = document.createElement("div");
  let toDoText = document.createElement("p");
  let toDoIcon = document.createElement("div");
  let toDoIconMinus = document.createElement("span");

  //styling up the html for the toDo list item
  toDoItem.classList.add("toDo__list-item");
  toDoIcon.classList.add("toDo__list-item__icon");

  toDoText.textContent = input.textContent;
  toDoIconMinus.textContent = "-";

  toDoItem.appendChild(toDoText);
  toDoItem.appendChild(toDoIcon);
  toDoIcon.appendChild(toDoIconMinus);

  //adds the toDo list item to the toDo list
  document.getElementById("index-toDo__list").appendChild(toDoItem);
}

addBtn.addEventListener("click", function() {
  createElement();
});
