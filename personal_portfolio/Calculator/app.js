const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let expression = "";

// Handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnValue = e.target.innerText;

    if (btnValue === "=") {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }
      inputBox.value = expression;
    } else if (btnValue === "AC") {
      expression = "";
      inputBox.value = "0";
    } else if (btnValue === "DEL") {
      expression = expression.slice(0, -1);
      inputBox.value = expression || "0";
    } else {
      expression += btnValue;
      inputBox.value = expression;
    }
  });
});

// Handle keyboard events
document.addEventListener("keydown", (event) => {
  if (
    (event.key >= "0" && event.key <= "9") ||
    ["+", "-", "*", "/", "%", "."].includes(event.key)
  ) {
    expression += event.key;
    inputBox.value = expression;
  } else if (event.key === "Enter") {
    try {
      expression = eval(expression).toString();
    } catch {
      expression = "Error";
    }
    inputBox.value = expression;
  } else if (event.key === "Backspace") {
    expression = expression.slice(0, -1);
    inputBox.value = expression || "0";
  } else if (event.key === "Escape") {
    expression = "";
    inputBox.value = "0";
  }
});
