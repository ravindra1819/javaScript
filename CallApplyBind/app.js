const P1 = {
  userName : 'Ravindara',
}

const P2 = {
  userName : 'Manivtha',
}

function greet(city, country) {
 console.log(`Hi , I am ${this.userName} from ${city} ${country}`)
};

greet.call(P1, "Hyderabad", "India");
greet.call(P2, "Bangalore", "India");
console.log("---- CALL() ----");


greet.apply(P2, ["Hyderabad", "India"]);
console.log("---- APPLY() ----");


console.log("----BIND() ----");
const boundg1 = greet.bind(P1);
const boundg2 = greet.bind(P2);

boundg1("Chennai", "India");
// console.log(boundg1);
boundg1("Goa", "Ind");
// console.log(boundg1)
boundg2("Hyd", "India");
// console.log(boundg2)


// ======================================================================
// SUMMARY TABLE (REFERENCE)
// ======================================================================
//
// | Method | Executes Immediately? | Arguments Format | Returns a New Function? | Common Use Case |
// |---------|------------------------|------------------|--------------------------|----------------|
// | call()  | Yes                    | Individual args  | No                       | Borrow and execute immediately |
// | apply() | Yes                    | Array            | No                       | Borrow when args are in array |
// | bind()  | No                     | Individual args  | Yes                      | Store function for later execution |

// ======================================================================
// KEY TAKEAWAYS
// ======================================================================
//
// 1. call() and apply() execute functions immediately with controlled 'this'.
// 2. bind() creates a new function with permanently fixed 'this'.
// 3. These are mainly used for method borrowing, event handling, and code reuse.