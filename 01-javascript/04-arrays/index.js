const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const newArray1 = numbers.slice(1, 3);

// console.log(newArray1);
// console.log(numbers);

const newArray2 = numbers.splice(1, 3);

// console.log(newArray2);
// console.log(numbers);

const team = ["Fakhir", "Babar", "Rizwan"];
const bowlers = ["Shaheen", "Haris", "Naseem"];

// team.push(bowlers);

// console.log(team);

// const newTeam = team.concat(bowlers);
// console.log(newTeam);

//Spread operator
const newTeam2 = [...team, ...bowlers];
// console.log(newTeam2);

//Destructring elements from array
// const vehicles = ["mustang", "f-150", "expedition"];

// const [car, truck, suv] = vehicles;
// const [car,suv] = vehicles;

console.log(truck);

// When destructuring arrays, the order that variables are declared is important.

// If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehicles = ["mustang", "f-150", "expedition"];

const [car, , suv] = vehicles;

// Destructuring comes in handy when a function returns an array:

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

//Array.of()    .......    Array.from()
