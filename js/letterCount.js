const textareaInputTag = document.querySelector("textarea.toDo-input");
let maxWords = textareaInputTag.getAttribute("maxlength");
let wordCountTag = document.querySelector("p.wordCount");

let count = 0;

// a function that counts how many words the user has left
function wordCount() {
  // if count is less than maxWords add one.
  if (count < maxWords) {
    count = count + 1;
    wordCountTag.innerHTML = count;
  } 
}

// when the input tag is active
if (textareaInputTag) textareaInputTag.addEventListener("keyup", wordCount);