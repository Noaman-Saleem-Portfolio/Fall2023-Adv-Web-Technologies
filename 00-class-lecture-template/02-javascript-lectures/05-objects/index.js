const student = {
  name: "Ali",
  age: 13,
  cgpa: 3.44,
  city: "Lahore",
};

const students = [
  {
    name: "Ali",
    age: 13,
    cgpa: 3.44,
    city: "Lahore",
  },
  {
    name: "Umair",
    age: 24,
    cgpa: 2.44,
    city: "Lahore",
  },
  {
    name: "Talha",
    age: 22,
    cgpa: 1.44,
    city: "Lahore",
  },
];

//Class assignments
//  A student has following properties
//    Name = Ali
//    age = 22
//    Hobbies = "Traveling", "Music", "Book Reading"
//    Exam Marks :
//        Midterm = 77
//        Final   = 85

// //Shoping Cart Example
//   You are developing a Ecommerce website feature Shopping Cart
//   A Cart can contain multiple Products that user wants to purchase
//   A Product is consist of following properties
//     Product Name, Price, Quantity

//   Suppose your Cart has 3 following products in it
//   Product 1:
//     productName = "LUX",
//     price = 800,
//     quantity= 12
//   Product 2:
//     productName = "Dairy Milk",
//     price = 60,
//     quantity= 1
//   Product 1:
//     productName = "PEPSI",
//     price = 400,
//     quantity= 2

//   Use the most appropriate Data Structure to save above CART data in JS

const address = {
  city: "Lahore",
  degree: "BSCS",
};

//spread operator
const studentInfo = { ...student, ...address };

// console.log(studentInfo);

//object destructring

const { city, degree } = address;

// console.log(degree);

// https://api.github.com/users/Noaman-Saleem-Portfolio

// https://randomuser.me/
