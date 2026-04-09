// Change greeting text
function greetUser() {
  let name = document.getElementById("nameInput").value;
  let greeting = document.getElementById("greeting");

  if (name.trim() === "") {
    greeting.textContent = "Hello";
  } else {
    greeting.textContent = "Hello, " + name;
  }
}
 

// Change box color
function changeColor(element) {
    
  let color = element.textContent.toLowerCase();
  element.style.backgroundColor = color;
  element.style.color = "white";

  if (color === "yellow") {
    element.style.color = "black";
  } else {
    element.style.color = "white";
  }
}
 
