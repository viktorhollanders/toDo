const textareaInputTag = document.querySelector("textarea.toDo-input");
let maxWords = textareaInputTag.getAttribute("maxlength");
let countTag = document.querySelector("p.wordCount");

let count = 0;

// a function that counts how many letters the user has left
function wordCount(e) {
  if (e.key === "Backspace") {
    count = count - 1;
    countTag.style.display = "inline";
    updateCount();
  } else {
    count = count + 1;
    if (count > maxWords) {
      countTag.style.display = "none";
    }
    updateCount();
  }
}

function updateCount() {
  countTag.innerHTML = count;
}

// when the input tag is active
if (textareaInputTag) textareaInputTag.addEventListener("keyup", wordCount);
