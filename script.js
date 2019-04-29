const addBtn = document.querySelector("div.add-button span");
const inputTag = document.querySelector(`input.index-toDo-input[type="text"]`);

// This function creates the new toDo list item
function createElement() {
  // creating the html elements for the toDo list item
  let toDoItem = document.createElement("div");
  let toDoText = document.createElement("p");
  let toDoIcon = document.createElement("div");
  let toDoIconMinus = document.createElement("span");

  // styling up the html for the toDo list item
  toDoItem.classList.add("toDo__list-item");
  toDoIcon.classList.add("toDo__list-item__icon", "minus");

  // add text to the list itme
  toDoText.textContent = inputTag.value;

  // toDo item delet button
  toDoIconMinus.textContent = "-";

  toDoItem.appendChild(toDoText);
  toDoItem.appendChild(toDoIcon);
  toDoIcon.appendChild(toDoIconMinus);

  //adds the toDo list item to the toDo list
  document.getElementById("index-toDo__list").appendChild(toDoItem);
}

// when addBtn is clicked it ads an todo list item
addBtn.addEventListener("click", function() {
  createElement();
});

//delet event listener event buble
document
  .getElementById("index-toDo__list")
  .addEventListener("click", function(e) {
    if (e.target && e.target.matches("div.minus")) {
      console.log("close btn was clicked");
    }
  });
