//Exercise 1
//The following function returns true if the parameter age is greater than 18.

const checkAge = (age) => (age >= 18 ? true : false);

let age = console.log(checkAge(15));
console.log(checkAge(20));

//Exercise 2
//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
  return x ** n;
}

console.log(pow(6, 3));

//Exercise 3
//Replace Function Expressions with arrow functions in the code:

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(checkAge(20));

//arrow function

const checkAge = (age) => (age >= 18 ? true : false);

//Exercise 4
//Create an object calculator with three methods:
//read() prompts for two values and saves them as object properties.
//sum() returns the sum of saved values.
//mul() multiplies saved values and returns the result.

let calculator = {
  read() {
    (this.num1 = 20), (this.num2 = 30);
  },

  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//Exercise 5
//Write a function min(a,b) which returns the least of two numbers a and b. Use the arrow function along with the question mark operator ?

const leastOfTwo = (a, b) => (a < b ? a : b);

console.log(leastOfTwo(10, 20));
