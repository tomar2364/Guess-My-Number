"use strict";
/**
 * Add two numbers together
 * @param  {Number} num1 The first number
 * @param  {Number} num2 The second number
 * @return {Number}      The total of the two numbers
 */
var addTwoNumbers = function (num1, num2) {
  return num1 + num2;
};
/**
 * call addtwonumber after 5sec
 
 */
setTimeout(function () {
  console.log(addTwoNumbers(10, 20));
}, 5000);

/** @constant
    @type {int}
    @default
*/
var seconds = 0;

function incrementSeconds() {
  //increment the second by 1
  seconds += 1;
  //print seconds
  console.log("You have been here for " + seconds + " seconds.");
  //if second equal to 7sec the break the setinterval
  if (seconds == 7) {
    clearInterval(cancel);
  }
}

var cancel = setInterval(incrementSeconds, 1000);
