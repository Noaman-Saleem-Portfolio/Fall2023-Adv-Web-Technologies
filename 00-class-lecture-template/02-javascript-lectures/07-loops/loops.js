//print first 10 natural numbers
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

const student = ["Noaman", 22, 3.45, "lahore"];

// for (let i = 0; i < student.length; i++) {
//   console.log(student[i]);
// }

// for (let std of student) {
//   console.log(std);
// }

const students = [
  ["Noaman", 22, 3.45, "lahore"],
  ["Ali", 21, 3.21, "Faisalabad"],
  ["Talha", 19, 2.45, "Karachi"],
  ["Hamza", 24, 3.9, "Chiniot"],
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// for (let std of students) {
//   console.log(std);
// }

// for (let i = 0; i < students.length; i++) {
//   //   console.log(students[i]);
//   for (let j = 0; j < students[i].length; j++) {
//     console.log(students[i][j]);
//   }
// }

// for (let std of students) {
//   console.log(std);
//     for (let stdDetails of std) {
//       console.log(stdDetails);
//     }
// }

const magicSquare = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// for (let row of magicSquare) {
//   let sum = 0;
//   for (let col of row) {
//     sum = sum + col;
//   }
//   console.log(`Sum of ${row} is = ${sum}`);
// }
