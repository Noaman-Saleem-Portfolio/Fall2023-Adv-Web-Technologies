const student = {
  name: "Ali",
  age: 13,
};

const address = {
  city: "Lahore",
  degree: "BSCS",
};

//spread operator
const studentInfo = { ...student, ...address };

// console.log(studentInfo);

//object destructring

const { city, degree } = address;

console.log(degree);

// https://api.github.com/users/Noaman-Saleem-Portfolio

// https://randomuser.me/
