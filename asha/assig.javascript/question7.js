// Function to calculate factorial using a loop
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

// Input: You can change these numbers
let num1 = 5;
let num2 = 4;

// Check for valid input (non-negative integers)
if (num1 < 0 || num2 < 0) {
  console.log("Please enter non-negative numbers.");
} else {
  let fact1 = factorial(num1);
  let fact2 = factorial(num2);

  console.log("Factorial of", num1, "is", fact1);
  console.log("Factorial of", num2, "is", fact2);
}
