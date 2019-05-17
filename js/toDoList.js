const addBtn = document.querySelector("div.add-button p");
const textareaTag = document.querySelector("textarea.toDo-input");

//this function creates the new toDo list item
function createElement() {
  //creating the html elements for the toDo list item
  let toDoItem = document.createElement("div");
  let toDoText = document.createElement("p");
  let toDoIcon = document.createElement("div");
  let toDoIconMinus = document.createElement("p");

  //styling up the html for the toDo list item
  toDoItem.classList.add("toDo__list-item");
  toDoIcon.classList.add("toDo-item__icon", "minus");
  toDoIconMinus.classList.add("btn");

  //add text to the list itme
  toDoText.textContent = textareaTag.value;

  //toDo item remove button
  toDoIconMinus.textContent = "-";
  toDoIconMinus.style.marginBottom = "6px";

  //puts the new toDo list item together
  toDoItem.appendChild(toDoText);
  toDoItem.appendChild(toDoIcon);
  toDoIcon.appendChild(toDoIconMinus);

  //adds the toDo list item to the toDo list
  document.getElementById("toDo__list").appendChild(toDoItem);
}

//when the key enter key is pressed it runs a function enter that checks if
//the enter AND the shift key have ben pressed, then it makes a new line in the teaxarea
//or if it was just the enter key and then it adds the toDo list item to the to do list.
function enter(e) {
  if (e.key == "Enter") {
    createElement();
  }
}

//when I click the deletBtn remove the element
//this event listener uses event bubeling
function removeItem(e) {
  if (e.target.classList.contains("btn")) {
    const element = e.target.parentElement.parentElement;
    element.classList.add("fade-out");
    setTimeout(() => element.remove() && element.children.remove() && this.textContent.remove(),
      200);
  }
}

addBtn.addEventListener("click", createElement);
document.addEventListener("keyup", enter);
document.addEventListener("click", removeItem);

