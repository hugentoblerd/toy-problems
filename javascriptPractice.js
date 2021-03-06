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

// Write a function that accepts a multi dimensional array and returns a flattened version.

var flattenedArr = function (arr, arrB) {
  if (!arrB) {arrB = []};
  var newArr = arrB;
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArr(arr[i], newArr);
    }else {
      newArr.push(arr[i]);
    };
  };
  console.log(newArr);
  return newArr;
};

// given an object, write a function that returns an object whose keys are the fields found in the object and whose values are objects containing all the values as keys and a count for how many times that value occurs

var breakDown = function (items) {
  var groupedProperties = {};
  for (var i = 0; i < items.length; i++) {
    for(var prop in items[i]) {
      if (!groupedProperties[prop]) {
        groupedProperties[prop] = {};
      };
      if (!groupedProperties[prop][items[i][prop]]) {
        groupedProperties[prop][items[i][prop]] = 1;
      }else {
      groupedProperties[prop][items[i][prop]]++;
      };
    };
  };
  return groupedProperties;
};

// given the below array, create a function that determines whether the array contains TWO numbers whose sum is equal to 0

var numbers = [6, -2, 5, 3, 9, -5, -1, 0, -4, 4];

var sumZero2 = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return alert('There is! There is 2 numbers whose sum is 0')
      };
    };
  };
  return alert('Zero is not found...');
};

// given the above array(numbers), create a function that determines whether the array contains THREE numbers whose sum is equal to 0

var sumZero3 = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      for (var k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          return alert('There is! There is 3 numbers whose sum is 0')
        };
      };
    };
  };
  return alert('Zero is not found...');
};

// Given an integer array, one element occurs even number of times and all others have odd occurences. Finde the element with even occurrences.

var intArr = [4, 6, 1, 3, 2, 3, 6, 2, 3, 2, 9];

var evenOccur = function (arr) {
  var arrObj = {};
  for (var i = 0; i < arr.length; i++) {
    if (!arrObj[arr[i]]) {
      arrObj[arr[i]] = 1;
    }else {
      arrObj[arr[i]] = ++arrObj[arr[i]];
    };
  };
  for (var prop in arrObj) {
    if (arrObj[prop] % 2 === 0) {
      return prop;
    };
  };
  return "There are no even occurences..."
};

var evenOccur1 = function (arr) {
  var arrObj = {};
  for (var i = 0; i < arr.length; i++) {
    arrObj[arr[i]] = arrObj[arr[i]] ? arrObj[arr[i]]+= 1 : 1
  };
  for (var prop in arrObj) {
    if(arrObj[prop] % 2 === 0) {
      return prop;
    }
  }
  return 'There are no even occurences...'
};

// We are given 3 strings: str1, str2 and str3. Str3 is said to be a shuffle of str1 and str2 if it can be formed by interleaving the characters of str1 and str2 in a way that maintains the left to right ordering of the characters from each string. For example, given str1='abc' and str2='def', str3='dabecf' is a valid shuffle since it preserves the character ordering of the two strings. So, given these 3 strings write a function that detects whether str3 is a valid shuffle of str1 and str2.

var interweave = function (str1, str2, str3) {
  for (var i = 0; i < str3.length; i++) {
    if (str1.indexOf(str3[i]) === -1 && str2.indexOf(str3[i]) === -1) {
      return false;
    }else if (str1.indexOf(str3[i]) !== -1) {
      if (firstIndex && firstIndex > str1.indexOf(str3[i])) {
        return false;
      };
      var firstIndex = str1.indexOf(str3[i]);
    }else if (str2.indexOf(str3[i]) !== -1) {
      if (secondIndex && secondIndex > str2.indexOf(str3[i])) {
        return false;
      };
      var secondIndex = str2.indexOf(str3[i]);
    };
  };
  return true;
};

var interweave2 = function (str1, str2, str3) {
  var newStr1 = '';
  var newStr2 = '';
  for (var i = 0; i < str3.length; i++) {
    if (str1.indexOf(str3[i]) !== -1) {
      newStr1 += str3[i];
    }else {
      newStr2 += str3[i];
    }
  };
  if (newStr1 === str1 && newStr2 === str2) {
    return true;
  }else {
    return false;
  }
};

//given the following array, randomize it.
var students = ["PJ", "Brock", "Erin", "Daniel", "Jacob", "Aaron", "Jason", "Schuyler", "Kory", "Corey", "Zac", "Jonathan", "Skyler", "Jess", "Krissy", "Mark", "David", "Bryson", "Larry", "Fernanda", "Jennifer"];

var randomize = function (arr) {
  var remaining = arr.length, swap, index;
  // while there are remaining elements to shuffle
  while (remaining) {
    // randomly pick a remaining element
    index = Math.floor(Math.random() * remaining--);
    // and swap it with the current element
    swap = arr[remaining];
    arr[remaining] = arr[index];
    arr[index] = swap;
  };
  return arr;
};

// Write a function that returns the longest word(s) from a sentance. The function should not return any duplicate words (case-insensitive).

var longestWords = function (str) {
  str = str.toLowerCase().split(' ');
  var longest = '';
  var longestWord = [];
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].trim();
    if (str[i].length > longest) {
      longestWord.splice(0, longest - 1, str[i]);
      longest = str[i].length;
    }else {
      if (str[i].length === longest && longestWord.indexOf(str[i]) === -1 && str[i] !== '') {
        longestWord.push(str[i]);
      };
    }
  };
  return longestWord;
};

var longestWords2 = function(str){
  str = str.split(' ');
  var longest = '';
  var longestWords = [];
  var hash = {};
  for(var i = 0; i < str.length; i++){
    if(!hash.hasOwnProperty(str[i].toLowerCase())){
      if(str[i].length > longest.length){
        longestWords = [];
        hash = {};
        hash[str[i].toLowerCase()] = true;
        longestWords.push(str[i]);
        longest = str[i];
      } else if(str[i].length >= longest.length){
        hash[str[i].toLowerCase()] = true;
        longestWords.push(str[i]);
      };
    };
  };
  return longestWords;
};

// Write a function that takes a string and replace every letter 'x' with the letter 'y'.

var replaceX = function (str) {
  var newStr = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      newStr.push('y');
    }else {
      newStr.push(str[i]);
    }
  };
  return newStr.join('');
};

// Given a standard clock face write a function that will return the inner angle between the hour and the minute hands.

var innerAngle = function (hr, m) {
  if (hr > 12 || hr < 1 || m > 59 || m < 0) {
    console.log('Invalid time...')
    return false
  }else {
    hrAngle = 0.5 * (hr * 60 + m);
    mAngle = 6 * m;
    angle = Math.abs(hrAngle - mAngle);
    angle = Math.min(angle, 360 - angle);
  }
  return angle;
};

// Write a function that counts up to 5 then adds 10 and counts from 15 to 20 then adds 10 and counts from 30 to 35 then adds 10 and so on and so forth

var count = function () {
  var num = 0;
  var bool;
  return function () {
    if (num !== 0 && !bool && num % 5 === 0) {
      num += 10;
      bool = true;
    }else {
      num += 1;
      bool = false;
    }
    return num;
  };
};

var counter = count();

// 

function delegate (child) {
  return function anon() {
    var mathObj = this[child];
    for (var key in this) {
      if (this[key] === anon) {
        return mathObj[key].apply(mathObj, arguments);
      };
    };
  }
};
// DON'T TOUCH ANY CODE BELOW THIS
var obj = {
  math: {
    x: 2,
    add: function (y) {
      return this.x + y;
    },
    multiply: function (y) {
      return this.x * y;
    }
  },
  add: delegate('math');
  multiply: delegate('math');
};




