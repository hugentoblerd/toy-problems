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