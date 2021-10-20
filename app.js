// store values for calculation
let oper = []; // store operator
let firstVal = []; //stores first operand
let secVal = []; //stores second operand

//operators
function add (a, b) {
    return Number(a) + Number(b);	
  };

function subtract (a, b) {
      return Number(a) - Number(b);
  };

function multiply (a, b) {
    return Number(a) * Number(b);
    };
    
function divide (a, b) {
    return Number(a) / Number(b)
    };
  
function power (base, exp) {
      return Number(base) ** Number(exp);
  };  
  
function factorial(a) {
  if (Number(a) == 0) {
    return 1;
    } else {return Number(a) * factorial(Number(a)-1)};
  };


//selector for display
const display = document.querySelector('.display');
display.textContent = 0;

function operate(operator, a, b) {
  if (operator == 'add') {return add (a, b)
  } else if (operator == 'subtract') {return subtract (a, b)
  } else if (operator == 'multiply') {return multiply (a, b)
  } else if (operator == 'divide') {if (b == 0) {return "Error div by 0"} else {return divide (a, b)}
  } else if (operator == 'power') {return power (a, b)
  } else return NaN
};

//selectors for numbers;
const numbers = document.querySelectorAll('.number');

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const dots = document.querySelector('#dot');

const backspaces = document.querySelector('#backspace');

//selectors for operators
const operators = document.querySelectorAll('.operator');

const adds = document.querySelector('#add');
const substracts = document.querySelector('#subtract');
const divides = document.querySelector('#divide');
const multiplies = document.querySelector('#multiply');
const powers = document.querySelector('#power');
const factorials = document.querySelector('#factorial');

//selector for answer and clear
const answer = document.querySelector('#equals');
const clears = document.querySelector('#AC');

//make number scientific if longer than 10 digits
function science (num) {
  if (num.toString().length > 10) {
    return num.toExponential(3);
  } else {return num};
}

// evenlisteners for numbers
Array.from(numbers).forEach((number) => {
  number.addEventListener('click', function(e) {
    if (oper.length == 0) {//if there is no operator then user enters first value, else the second value
      if (firstVal.includes(".")) {
        dots.disabled = true;
        firstVal.push(e.target.innerHTML);
        document.querySelector('.display').textContent = firstVal.join('');
      } else {
        dots.disabled = false;
        firstVal.push(e.target.innerHTML);
        document.querySelector('.display').textContent = firstVal.join(''); }
    } else {
      if (secVal.includes(".")) {
        dots.disabled = true;
        secVal.push(e.target.innerHTML);
        document.querySelector('.display').textContent = secVal.join('');
      } else {
        dots.disabled = false;
        secVal.push(e.target.innerHTML);
        document.querySelector('.display').textContent = secVal.join('');
      }
    }
  });
});

//eventlisteners for operators + - / * ^ 
Array.from(operators).forEach((operator) => {
  operator.addEventListener('click', function(e) {
    oper = []; // allows user to overwrite previous operator if that was incorrectly selected
    oper.push(e.target.id);
  });
});

//eventlistener for equals sign
answer.addEventListener('click', function(e) {
  if (oper.length == 1) {//user can only click equals sign if 1 operator key has been hit
    let answer = operate(oper[0], Number(firstVal.join('')), Number(secVal.join('')));
    if (typeof answer !== 'string') {//checks for divide by zero error
      display.textContent =  science(Math.round(answer * 100) / 100);
    } else {
      display.textContent = answer;
    };  
    oper = []; 
    firstVal = [answer]; //enables user to continue with current answer
    secVal = [];
    dots.disabled = false;
  };
});

//eventlistener for AC
clears.addEventListener('click', function(e) {
  display.textContent = 0;
  firstVal = [];
  secVal = [];
  oper = [];
});

//eventlistener for factorial
factorials.addEventListener('click', function(e) {
  let answer = factorial(firstVal);
  display.textContent = answer
  firstVal = [answer]
});

//eventlistener for backspace
backspaces.addEventListener('click', function(e) {
  if (oper.length == 0) {
    firstVal.splice(-1);
    document.querySelector('.display').textContent = firstVal.join('');
  } else {
    secVal.splice(-1)
    document.querySelector('.display').textContent = secVal.join('');}
});
