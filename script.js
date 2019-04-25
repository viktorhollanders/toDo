const addBtn = document.querySelector("div.add-button span");
const removeBtn = document.querySelectorAll("div.minus-button")

addBtn.addEventListener("click", function() {
  let newLi = document.createElement("li");
  let newContnet = document.createTextNode("hey im a new node");
  

  newLi.appendChild(newContnet);

  let currentLi = document.querySelector("div.toDo__list-item");
  document.body.insertBefore(newLi, currentLi);
});
