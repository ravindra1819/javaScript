// ==============================
// 🌟 JavaScript Functions - Complete Notes
// ==============================

// 🔹 Definition:
// A function in JavaScript is a **block of reusable code** that performs a specific task
// when it is invoked or called. You define it once and reuse it many times throughout your code.

// 🔹 Why Functions?
// - ✅ Avoid Repetition → Follow the DRY principle (Don’t Repeat Yourself).
// - ✅ Modular Structure → Split code into logical blocks.
// - ✅ Maintainability → Easier to debug, test, and scale up.
// - ✅ Reusability → Used across files and modules.

// ======================================================
// 🚗 Real-time Example: Car Object with Methods (Functions)
// ======================================================

const car = {
    // Properties (Data about the car)
    brand: "Tesla",
    model: "Model S",
    color: "Red",
    speed: 0,
    isEngineOn: false,

    // Methods (Actions the car can perform)
    startEngine: function() {
        if (!this.isEngineOn) {
            this.isEngineOn = true;
            console.log(`${this.brand} ${this.model} engine started!`);
        } else {
            console.log("Engine is already running.");
        }
    },

    accelerate: function(increaseBy) {
        if (this.isEngineOn) {
            this.speed += increaseBy;
            console.log(`Accelerated to ${this.speed} km/h.`);
        } else {
            console.log("Start the engine before accelerating!");
        }
    },

    stopCar: function() {
        if (this.speed > 0) {
            this.speed = 0;
            console.log("Car has stopped.");
        } else {
            console.log("Car is already stationary.");
        }
    }
};

// ✅ Using the object and methods
console.log(car.brand); // Access property
car.startEngine();      // Engine starts
car.accelerate(60);     // Accelerate the car
car.stopCar();          // Stop the car

// ======================================================
// 🧩 Function Declarations
// ======================================================

// Syntax:
function functionName() {
    console.log(`This task will be completed`);
}

functionName(); // ✅ Function call

// ======================================================
// 🧩 Function Expressions
// ======================================================

// Syntax:
const variableName = function() {
    console.log(`This is a function expression`);
};

variableName(); // ✅ Function call

// ======================================================
// 🧩 Functions with Parameters
// ======================================================

function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Vamsee");
greet("Ravindra");

// Function with static values
function sum() {
    const num1 = 2000;
    const num2 = 5000;
    console.log(num1 + num2);
}

sum();
sum();

// Function with dynamic parameters
function add(num1, num2) {
    console.log(num1 + num2);
}

add(3000, 2000);
add(3000, 3000);

// ======================================================
// 🧩 Functions with Default Parameters
// ======================================================

function greetUser(user = "Guest") {
    console.log(`Hello ${user}`);
}

greetUser();           // Output: Hello Guest
greetUser("Vamsee");   // Output: Hello Vamsee

// ======================================================
// ⚡ IIFE (Immediately Invoked Function Expression)
// ======================================================

// Definition:
// Runs immediately after being defined. Used for initialization or private scopes.

// Syntax: (function(params){ ... })(args);

(function() {
    console.log(`Invoked Immediately after defining`);
})();

// ======================================================
// 🔁 Callback Functions
// ======================================================

// Definition:
// A function passed as an argument to another function is called a callback.

function greet(name, callback) {
    console.log('Hi ' + name);
    callback();
}

function callMe() {
    console.log('I am a callback function');
}

// ✅ Passing function as an argument
greet('Peter', callMe);

// ======================================================
// 🏹 Arrow Functions (ES6)
// ======================================================

// Syntax: () => { ... }

const sayGoodMorning = () => console.log(`Good Morning`);
sayGoodMorning();

// ======================================================
// ⏳ setTimeout() - Delayed Execution
// ======================================================

// Definition:
// Executes a function once after a specified delay (in milliseconds).

// Syntax:
// setTimeout(callback, delayInMilliseconds, arg1, arg2, ...);

console.log(`Start`);

setTimeout(() => {
    console.log(`Executes after 3 seconds`);
}, 3000);

console.log(`End`);

// ======================================================
// ⏲️ setInterval() - Repeated Execution
// ======================================================

// Definition:
// Repeatedly executes a function at fixed time intervals until stopped using clearInterval().

const intervalId = setInterval(() => {
    console.log(`Executes every 2 seconds`);
}, 2000);

// ======================================================
// 🕒 Example: Countdown Timer for 60 seconds
// ======================================================

let counter = 60;

const timer = setInterval(() => {
    if (counter >= 0) {
        console.log(counter);
        counter--;
    } else {
        clearInterval(timer);
        console.log("Timer stopped!");
    }
}, 1000);

// ======================================================
// ✅ Summary
// ======================================================
// 1. Function Declaration → function keyword with name.
// 2. Function Expression → Function stored in a variable.
// 3. Default Parameters → Assign fallback values.
// 4. IIFE → Runs instantly after definition.
// 5. Callback Function → Passed as argument.
// 6. Arrow Function → Shorter ES6 syntax.
// 7. setTimeout → Executes once after delay.
// 8. setInterval → Repeats at fixed intervals.