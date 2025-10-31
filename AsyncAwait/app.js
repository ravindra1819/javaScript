// Promises Syntax

// const promise = new promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Data fetched successfully");
//   } else {
//     reject("Error fecthing data!..");
//   }
// });

// promise.then((message) => { console.log(message) }).catch((error) => { console.log(error) });

// function orderFood(Food, callback) {
//   console.log("Your order is in Progress");
//   setTimeout(() => {
//     console.log(`Your ${Food} is on the way`);
//     callback();
//   }, 2000);
// }

// function serveFood() {
//   console.log(`Your order is delivered successfully`);
// }

// orderFood("Pizza", serveFood);

// // callback hell

// orderFood("Burger", () => {
//   orderFood("Coke", () => {
//     orderFood("Fries", () => {
//       console.log("All items are delivered");
//     });
//   });
// });

// Promise chaining example

function order(food) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering ${food} from restaurant......`);
    setTimeout(() => {
      if (food === "Fries") {
        reject('Sorry, Fries are out of stock..');
      } else {
        console.log(`${food} has been served!..`)
        resolve(food);
      }
      resolve(food);
    }, 1000);
  });
}

order("Pizza")
  .then(food => order("Fries"))
  .then(food => order("Coke"))
  .then(() => {
    console.log("All food items are served!");
  }).catch((error) => {
    console.log(`Error: ${error}`)
  });

// Callback vs Promise - Summary :

// Feature                     callback                    Promise
// Syntax                       Nested                      Chain
// Error Handling               Difficult                   Easy with .catch()
// Readability                  Poor                        Clean
// Control Flow                 CallbackHell                Sequential Flow

// Fetch real time usage

const apiEndPoint = "https://dummyjson.com/users";

fetch(apiEndPoint)
  .then(response => response.json())
  .then((data) => {
    const container = document.getElementById("teamContainer");
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

  // closures

  // function tokenManager (){
  //   let token = null;

  //   function setToken (newToken){
  //     token = newToken;
  //   }

  //   function getToken (){
  //     return token ? token : "No token set";
  //   }

  //   return{
  //     setToken,
  //     getToken
  //   };
  // }

  // const userTokenManager = tokenManager();

  // userTokenManager.setToken("abcXyZ123");
  // console.log(userTokenManager.getToken());
