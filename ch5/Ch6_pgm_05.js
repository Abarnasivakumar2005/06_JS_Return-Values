// A function with three arguments

var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount = 0) {
    return callOutCharge + costPerHour * numberOfHours - discount;
};

// Original call
console.log("$" + totalCost(30, 40, 3)); // Output: $150

// 1) Cost for 12 hours work
console.log("$" + totalCost(30, 40, 12)); // Output for 12 hours

// 2) Updated function with discount parameter
// 3) The function now subtracts the discount
// This is already done in the current implementation

// 4) Update the call with a $20 off coupon
var discount = 20;
console.log("$" + totalCost(30, 40, 3, discount)); // Output: $130
