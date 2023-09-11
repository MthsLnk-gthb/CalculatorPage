let numberOne = document.getElementById("numberOne");
let numberTwo = document.getElementById("numberTwo");
let numberThree = document.getElementById("numberThree");
let numberFour = document.getElementById("numberFour");
let numberFive = document.getElementById("numberFive");
let numberSix = document.getElementById("numberSix");
let numberSeven = document.getElementById("numberSeven");
let numberEight = document.getElementById("numberEight");
let numberNine = document.getElementById("numberNine");
let numberZero = document.getElementById("numberZero");

let plusOperator = document.getElementById("plusOperator");
let lessOperator = document.getElementById("lessOperator");
let multiplyOperator = document.getElementById("multiplyOperator");
let divisionOperator = document.getElementById("divisionOperator");

let cleanOperator = document.getElementById("cleanOperator");
let equalOperator = document.getElementById("equalOperator");

let operationResultBox = document.querySelector(".operationBox");
let operationRenderScreen = document.querySelector(".operationScreen");

let currentOperand = "";
let currentOperator = "";
let previousOperand = "";


function updateScreen() {
  operationRenderScreen.textContent = `${previousOperand} ${currentOperator} ${currentOperand}`;
}

function updateScreen() {
  operationRenderScreen.textContent = `${previousOperand} ${currentOperator} ${currentOperand}`;
}

function appendDigit(digit) {
  if (currentOperand.length < 12) {
    currentOperand += digit;
    updateScreen();
  }
}

numberOne.addEventListener("click", () => {
  appendDigit("1");
});

numberTwo.addEventListener("click", () => {
  appendDigit("2");
});

numberThree.addEventListener("click", () => {
  appendDigit("3");
});

numberFour.addEventListener("click", () => {
  appendDigit("4");
});

numberFive.addEventListener("click", () => {
  appendDigit("5");
});

numberSix.addEventListener("click", () => {
  appendDigit("6");
});

numberSeven.addEventListener("click", () => {
  appendDigit("7");
});

numberEight.addEventListener("click", () => {
  appendDigit("8");
});

numberNine.addEventListener("click", () => {
  appendDigit("9");
});

numberZero.addEventListener("click", () => {
  appendDigit("0");
});


  plusOperator.addEventListener("click", () => {
    if (currentOperand !== "") {
      currentOperator = "+";
      previousOperand = currentOperand;
      currentOperand = "";
      updateScreen();
    }
  });

lessOperator.addEventListener("click", () => {
  if (currentOperand !== "") {
    currentOperator = "-";
    previousOperand = currentOperand;
    currentOperand = "";
    updateScreen();
  }
});

multiplyOperator.addEventListener("click", () => {
  if (currentOperand !== "") {
    currentOperator = "x";
    previousOperand = currentOperand;
    currentOperand = "";
    updateScreen();
  }
});

divisionOperator.addEventListener("click", () => {
  if (currentOperand !== "") {
    currentOperator = "/";
    previousOperand = currentOperand;
    currentOperand = "";
    updateScreen();
  }
});


equalOperator.addEventListener("click", () => {
  if (currentOperand !== "") {
    if (currentOperator === "+") {
      currentOperand = (
        parseFloat(previousOperand) + parseFloat(currentOperand)
      ).toString();
    }

    if (currentOperator === "-") {
      currentOperand = (
        parseFloat(previousOperand) - parseFloat(currentOperand)
      ).toString();
    }

    if (currentOperator === "x") {
      currentOperand = (
        parseFloat(previousOperand) * parseFloat(currentOperand)
      ).toString();
    }

    if (currentOperator === "/") {
      currentOperand = (
        parseFloat(previousOperand) / parseFloat(currentOperand)
      ).toString();
    }

    currentOperator = "";
    previousOperand = "";
    updateScreen();
  }
});


cleanOperator.addEventListener("click", () => {
  currentOperand = "";
  currentOperator = "";
  previousOperand = "";
  updateScreen();
});
