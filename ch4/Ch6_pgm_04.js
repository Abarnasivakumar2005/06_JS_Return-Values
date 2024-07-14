// Returning the sum of two numbers

var add;

add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

// 1) Find and display the sum of a different pair of numbers
var newSum = add(30, 45);
console.log("The sum of 30 and 45 is " + newSum);

// 2) Change the console.log to include a message
var num1 = 50;
var num2 = 23;
var sum = add(num1, num2);
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

// 3) Using add function to add more than two numbers
var totalSum = add(num1, add(10, 15)); // Adding 50, 10, and 15
console.log("The total sum of " + num1 + ", 10, and 15 is " + totalSum);

// 4) Create a function to return the sum of three numbers
var addThree = function (num1, num2, num3) {
    return add(num1, add(num2, num3));
};

// Example usage of addThree
var sumOfThree = addThree(5, 10, 15);
console.log("The sum of 5, 10, and 15 is " + sumOfThree);



/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */