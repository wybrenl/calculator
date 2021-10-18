const add = function(a, b) {
    return a + b;	
  };
  
  const subtract = function(a, b) {
      return a - b;
  };
  
  const sum = function(a) {
    return a.reduce((acc, nextVal) => {
    return acc + nextVal}, 0)
  };
  
  const multiply = function(a) {
    return a.reduce((acc, nextVal) => {
      return acc * nextVal}, 1)
    };
  
  const power = function(base, exp) {
      return base ** exp;
  };
  
  
  const factorial = function(a) {
  if (a == 0) {
    return 1;
    } else {return a * factorial(a-1)};
  };