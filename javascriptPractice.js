// toy problems to practice fundamentals of JavaScript

// write a function that reverses a string without using .reverse() method

var string = 'this is a string';

var revStr = function (str, newStr) {
    str = str.split('');
    var newStr = newStr.split('');
    for (var i = 0; i < str.length; i++) {
      newStr.unshift(str[i]);
    }
    str = str.join('');
    newStr = newStr.join('');
};

// write a function called factorial that takes in a number and returns the factorial (!) of that number. Example: factorial(5) should return 120 because 5 * 4 * 3 * 2 * 1 === 120

// using for loop
var factorial = function (num) {
  var newNum = num;
  for (num; num > 1 ; num--) {
    newNum = newNum * (num - 1);
  }
  return newNum;
};

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
      }
    }
  }
  return truthy;
};

// Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters 'a' and 'b' are seperated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between 'a' and 'b'). Otherwise return the string false.

var ABCheck = function (string) {
    str = string.toLowerCase();
    for (var i = 0; i < str.length; i++) {
      if (str[i] === 'a') {
        if (str[i + 4] === 'b' || str[i - 4] === 'b') {
          return true;
        }
      }
    }
  return false;
};

// write a function that creates a Fibonacci Sequence(0, 1, 1, 2, 3, 4, 8, 13, 21, 34, etc) with 100 numbers

var fibonacci = function () {
  var arr = [0, 1];
  for (var i = 0; i < 98; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }
  return arr;
};

// write a function that takes a number as a parameter and searches the Fibonacci function for that number

  // with for loop
var searchFibonacci = function (num) {
  var arr = fibonacci();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      alert('They found me, I don`t know but they found me!');
      return true;
    }
  }
  return false;
};

 // with indexOf
 var searchFibonacci1 = function (num) {
   return fibonacci().indexOf(num) > -1;
 };

 // write a function that accepts a number n, and teturns the nth Fibonacci number. for example, the first five Fibonacci numbers are: 0, 1, 1, 2, 3. If n were 4, your function should return 2; for 5, it should return 3.

// using the fibonacci function already created
 var nthOfFibonacci = function (num) {
   var arr = fibonacci();
   return arr[num - 1];
 };

 // creating a fibonacci sequence within the function
var nthOfFibonacci1 = function (num) {
  var arr = [0, 1];
  for (var i = 0; i < 98; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }
  return arr[num - 1];
};

// Find the only item that occurs an even number of times in an array. If there is more than one item that occurs an even number of times, just return the first one. if there are no items that occur an even numbers of times, return null

var evenOccurence = function (numArr) {
  var occurences = {};
  for (var i = 0; i < numArr.length; i++) {
    var temp = numArr[i];
    if (temp in occurences) {
      occurences[temp]++;
    }else {
      occurences[temp] = 1;
    };
  };
  for (var temp in occurences) {
    if (occurences[temp] % 2 == 0) {
      return temp;
    };
  };
  return null;
};

// Given a string that contains a single pair of parentheses, compute a new string made only of the parenthesis and their contents, so "xyz(abc)123" yields "(abc)".

var parens = function (str) {
  var open = str.indexOf('(');
  var close = str.indexOf(')');
  var newStr = str.slice(open, close + 1);
  return newStr;
};




