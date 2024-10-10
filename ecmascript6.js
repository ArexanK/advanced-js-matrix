//exercise 1
//Write the destructuring assignment that reads:
//name property into the variable name.
//years property into the variable age.
//isAdmin property into the variable isAdmin (false if absent)

let user = {
  name: "John",
  years: 30,
};

let name = user.name;
let age = user.years;

let isAdmin = user.idAdmin !== undefined ? user.isAdmin : false;

console.log(isAdmin)

//exercise 2
//Give the right name:
//Create the variable with the name of our planet. How would you name such a variable?
//Create the variable to store the name of the current visitor. How would you name that variable?

let planetEarth;

let currentVisitor;

//exercise 3
//Look at the code. What will be the result of the call at the last line and why?
// let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi()

//output would be error, there cause the function sayHi()is inside th if block

//exercise 4
//Write the code, one line for each action:

//create an empty object user.
//Add the property name with the value John.
//Add the property surname with the value Smith.
//Change the value of the name to Pete.
//Remove the property name from the object.

let user = {
  name: "john",
  surname: "smith",
};

let str = user.name.replace("john", "pete");

delete user.name;

console.log(user);

//Exercise 5
//Is it possible to change an object declared with const, how do you think and why?

const user = {
    name: "John"
  }

// does it work?
  user.name = "Pete"

// yes this will work, cause you are changing the object inside the variable

//Exercise 6
//We have an object storing the salaries of our team:
//Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130,
};

//   let sum= salaries.Fred + salaries.Ted + salaries.Ghaith

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

//exercise 7
//Rewrite this if using the ternary operator '?':

if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}


let result = a + b < 4 ? "below" : "over";

console.log(result);

//exercise 8
//Rewrite if..else using multiple ternary operators '?'.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
      ? "Greetings"
      : login == ""
        ? "No login"
        : "";
console.log(message);
