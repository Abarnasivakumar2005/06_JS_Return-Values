// A collection of functions that return values

var getMessage;
var getHelloTo;
var sum;
var totalCost;

getMessage = function () {
    return "I’m going on an adventure!"; 
};

getHelloTo = function (name) {
    return "Hello to " + name;
};

sum = function (number1, number2) {
    return number1 + number2;
};

totalCost = function (callOutCharge, costPerHour, numberOfHours) {
    return callOutCharge + costPerHour * numberOfHours;
};

// Note: There is nothing logged to the console initially.

// You can test the functions in the console as follows:

// 2) Call the getMessage function
console.log(getMessage()); // Outputs: I’m going on an adventure!

// 3) Call the getHelloTo function
console.log(getHelloTo("Dax")); // Outputs: Hello to Dax

// 4) Test with different names
console.log(getHelloTo("Alice")); // Outputs: Hello to Alice
console.log(getHelloTo("Bob"));   // Outputs: Hello to Bob

// 5) Call the sum function
console.log(sum(10, 20)); // Outputs: 30
console.log(sum(5, 15));  // Outputs: 20

// Call the totalCost function with different arguments
console.log(totalCost(30, 40, 3)); // Outputs: 150
console.log(totalCost(50, 20, 5)); // Outputs: 150
