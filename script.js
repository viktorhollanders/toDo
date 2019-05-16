const addBtn = document.querySelector("div.add-button span");
const textareaTag = document.querySelector("textarea.toDo-input");

//this function creates the new toDo list item
function createElement() {
  //creating the html elements for the toDo list item
  let toDoItem = document.createElement("div");
  let toDoText = document.createElement("p");
  let toDoIcon = document.createElement("div");
  let toDoIconMinus = document.createElement("span");

  //styling up the html for the toDo list item
  toDoItem.classList.add("toDo__list-item");
  toDoIcon.classList.add("toDo-item__icon", "minus");
  toDoIconMinus.classList.add("btn");

  //add text to the list itme
  toDoText.textContent = textareaTag.value;

  //toDo item remove button
  toDoIconMinus.textContent = "-";

  //puts the new toDo list item together
  toDoItem.appendChild(toDoText);
  toDoItem.appendChild(toDoIcon);
  toDoIcon.appendChild(toDoIconMinus);

  //adds the toDo list item to the toDo list
  document.getElementById("toDo__list").appendChild(toDoItem);
}

function enter(e) {
  if (e.shiftKey && e.key == "Enter") {
    document.createElement("br");
  } else if (e.key == "Enter") {
    createElement();
  }
}

function removeItem(e) {
  if (e.target.classList.contains("btn")) {
    const element = e.target.parentElement.parentElement;
    element.remove() && element.children.remove() && this.textContent.remove();

  }
}

//creates the new to do list item and appends it to the end of the toDo list
addBtn.addEventListener("click", createElement);

//when the key enter key is pressed it runsa function enter that checks if
//the enter AND the shift key have ben pressed, then it makes a new line in the teaxarea
//or if it was just the enter key and then it adds the toDo list item to the to do list.
document.addEventListener("keyup", enter);

//when I click the deletBtn remove the element
//this event listener uses event bubeling
document.addEventListener("click", removeItem, false);

