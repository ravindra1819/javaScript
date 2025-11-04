// Spread Operator

const X = [1, 3, 5];
const Y = [2, 4, 6];

const final = [...X, ...Y, ...X];
console.log(final);


const a = {
  name: "Ravindra",
  age: 31,
  height: 180
};

const b = {
  ...a,
  company: "ABB",
  city: "Hyb",
  area: "nnm"
};

console.log(b);

function multiplyNums(a, b, c) {
  return a * b * c;
}


// Rest Operator

const num = [2, 3, 4];
console.log(...num);
console.log('Multiply nums:', multiplyNums(...num));

const products = ["Laptop", "Mouse", "Keyboard", "Charger"];
const [mainProduct, ...relatedProducts] = products;

console.log("Main Product:", mainProduct);
console.log("Related Products:", relatedProducts);


// Array Destructuring

const colors = ["red", "green", "blue"];
const [primary, secondary, tertiary] = colors;

console.log("Primary:", primary);
console.log("Secondary:", secondary);
console.log("Tertiary:", tertiary);


const [first, , third] = ["a", "b", "c"];
console.log("Skipped Example:", first, third); // a c

const [p1, p2 = "black"] = ["white"];
console.log("Default Example:", p1, p2);

// Object Destructuring

const student = {
  id: 1,
  name: "Nikhil",
  address: {
    city: "Hyderabad",
    pincode: 500001
  },
  scores: {
    math: 95,
    science: 90
  }
};

const {
  name: studentName,
  address: { city, pincode },
  scores: { math, science }
} = student;

console.log("Student Name:", studentName);
console.log("City:", city);
console.log("Pincode:", pincode);
console.log("Math:", math);
console.log("Science:", science);