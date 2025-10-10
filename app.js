// Self-invoking or IIFE functions

// (function () {
//   const API_URL = "https://api.server.com";
//   console.log(`configured : ${API_URL}`);
// })();

// (function (page, limit) {
// const URL1 = `https://www.google.com/${page}/${limit}`;
// console.log(`congigured :${URL1}`)
// }
// )(1,20);

// Callback functions

// function greet (name, callback){
// console.log('Hi'+ ' ' + name);
// callback();
// }

// function callme(){
//   console.log("Good Morning")
// }

// greet("Ravindra",callme);

// another example based on registration and sendemail

// function registerUser(user1, cb) {
//   console.log(`Registering user...`);
//   cb(user1);
// }

// function sendemail(user) {
//   console.log(`Welcome ${user.name}`);
//   console.log(`Email sent successfully ${user.email}`);
// }

// registerUser({ name: "Ravindra", email: "test@gmail.com" }, sendemail);

// // Arrow Functions

// const calcGST = amount => console.log(amount * 0.18);

// calcGST(5000);

// // set timeout function

// console.log("start");

// setTimeout(()=>{
//   console.log(`Executes after 3seconds`);
// }
// ,3000);

// console.log("End");

// setinterval function

// setInterval(()=>{
//   console.log(`Executes after 2seconds`);
// }
// ,2000);

// let counter = 60;

// setInterval(() => {
//   if(counter >= 0){
//     console.log(counter);
//     counter --;
//   }else{
//     clearInterval();
//   }
// }, 1000);

let testvar = "    My girl is beautiful and very very beautiful.   ";

// String Props
console.log(testvar.length);

// String Methods
console.log(testvar.toUpperCase())
console.log(testvar.toLowerCase())
console.log(testvar.slice(4,14)) 
console.log(testvar.trim())
console.log(testvar.replace("girl","Women"))
console.log(testvar.replaceAll("beautiful","gorgeous"))
console.log(testvar.trim().split(''))
console.log(testvar.trim().concat(" and always angry"))
console.log(testvar.includes("very"))
console.log(testvar.indexOf("very"))
console.log(testvar.lastIndexOf("very"))
console.log(testvar.charAt(8))
console.log(testvar.charCodeAt(8))
console.log(testvar.trim().startsWith("My"))
console.log(testvar.trimEnd().endsWith("beautiful."))
console.log(testvar.trim().slice(8,16).repeat(4))
console.log(testvar.search("very"))

// Difference b/w Indexof and Search

