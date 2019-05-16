const addBtn = document.querySelector("div.add-button span");
const textareaTag = document.querySelector("textarea.toDo-input");

// This function creates the new toDo list item
function createElement() {
  // creating the html elements for the toDo list item
  let toDoItem = document.createElement("div");
  let toDoText = document.createElement("p");
  let toDoIcon = document.createElement("div");
  let toDoIconMinus = document.createElement("span");

  // styling up the html for the toDo list item
  toDoItem.classList.add("toDo__list-item");
  toDoIcon.classList.add("toDo-item__icon", "minus");
  toDoIconMinus.classList.add("btn");

  // add text to the list itme
  toDoText.textContent = textareaTag.value;

  // toDo item delet button
  toDoIconMinus.textContent = "-";

  toDoItem.appendChild(toDoText);
  toDoItem.appendChild(toDoIcon);
  toDoIcon.appendChild(toDoIconMinus);

  //adds the toDo list item to the toDo list
  document.getElementById("toDo__list").appendChild(toDoItem);
}

addBtn.addEventListener("click", createElement);

// document.addEventListener("keyup", function (e) {
//   if (e.key == "Enter") {
//     createElement();
//   }
// });

function remove(e) {
  if (e.target.classList.contains("btn")) {
    const element = e.target.parentElement.parentElement;
    element.remove() && element.children.remove() && this.textContent.remove();
  }
}
//when I click the deletBtn remove the element
document.addEventListener("click", remove, false);