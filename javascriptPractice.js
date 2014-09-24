// toy problems to practice fundamentals of JavaScript

// write a function that reverses a string without using .reverse() method

var string = 'this is a string'

var revStr = function (str, newStr) {
    str = str.split('');
    var newStr = newStr.split('');
    for (var i = 0; i < str.length; i++) {
      newStr.unshift(str[i]);
    };
    str = str.join('');
    newStr = newStr.join('');
    console.log(str);
    console.log(newStr);
}

// write a function called factorial that takes in a number and returns the factorial (!) of that number. Example: factorial(5) should return 120 because 5 * 4 * 3 * 2 * 1 === 120

// using for loop
var factorial = function (num) {
  var newNum = num;
  for (num; num > 1 ; num--) {
    newNum = newNum * (num - 1);
  };
  console.log(newNum);
  return newNum;
}

// using recursion
var factorial1 = function (num) {
  if (num < 0) {
    return -1;
  }else if (num == 0) {
    return 1;
  }
  var newNum = num;
  while (num-- > 2) {
    newNum *= num;
  }
  return newNum;
};

// Write a function called simpleSymbols that takes in a string parameter and determines if it is an acceptable sequence by either returing the string true or false. The str parameter will be composed of + and = symbos with several letters between them (ie. ++d+===+c++==a) and for the string to bbe true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

var simpleSymbols = function (str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var truthy = false;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (str[i] ===alphabet[j]) {
        if (str[i - 1] === '+' && str[i + 1] === '+') {
          truthy = true;
        }else {
          truthy = false;
          return truthy;
        }
      };
    };
  };
  return truthy;
}




