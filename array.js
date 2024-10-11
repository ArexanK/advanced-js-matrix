//Exercise 1
//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

function filterRange(arr, a, b) {
  arr.filter((num) => num >= a && num <= b);
}

let arr = [1, 2, 3, 4, 5];
let filterArray = filterRange(arr, 1, 4);

console.log(filterArray);

//Exercises 2
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Peter", age: 30 },
];

let names = users.map((user) => user.name);
console.log(names);

//Exercises 3
//Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

let users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Peter", age: 30 },
];

function getAverageAge(users) {
  let sum = users.reduce((sum, user) => sum + user.age, 0);
  return sum / users.length;
}

console.log(getAverageAge(users));
