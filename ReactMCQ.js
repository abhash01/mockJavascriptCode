(function () {
  var a = (b = 3);
})();
console.log(typeof b); // "number"
console.log(typeof a); // "undefined"

// Answer: C. "number"
// Explanation: b is assigned without var, let, or const, making it a global variable.
// Thus, it exists outside the function scope.

const obj = { a: 1 };
const newObj = Object.assign(obj, { b: 2 });
console.log((obj.a = 4));
console.log(newObj); //{ a: 4, b: 2 }
console.log(newObj); //{ a: 4, b: 2 }

// Answer: C. { a: 1, b: 2 }
// Explanation: Object.assign modifies the original object and returns the target object.

const arr = [1, 2, 3];
const newArr = [...arr, 4];
console.log(newArr); // [1,2,3,4]
console.log(arr); // [1,2,3]

// Answer: C. [1, 2, 3, 4]
// Explanation: The spread operator creates a new array that includes all elements from arr followed by 4.

// What does the setTimeout function return?

// A. A number representing the timer ID
// B. A string indicating the timer status
// C. A Promise
// D. A function
// Answer: A. A number representing the timer ID
// Explanation: setTimeout returns a timer ID that can be used to cancel the timeout using clearTimeout.

// What will happen if you try to reassign a const variable?

// A. The variable will be updated
// B. It will throw a TypeError
// C. The variable will be ignored
// D. It will throw a ReferenceError
// Answer: B. It will throw a TypeError
// Explanation: Variables declared with const cannot be reassigned after their initial assignment.

console.log(1 + "1"); // 11
console.log("1" + 1); // 11
console.log(1 + "1" + 1); // 111

let a = 2;
let b = {
  a: 3,
  func: function () {
    console.log(this.a);
  },
};
b.func(); // 3

let a = 2;
let b = {
  a: 3,
  func: () => {
    console.log(this.a);
  },
};
b.func(); // undefined

const foo = () => {
  return;
  {
    bar: 1;
  }
};
console.log(foo());

// Answer: B. undefined
// Explanation: The return statement is followed by a line break, which causes an implicit return of undefined.

const foo1 = () => {
  return { bar: 1 };
};
console.log(foo1()); //{bar : 1}

let x = 5;
function test() {
  x = 10;
  return;
  function x() {}
}
test();
console.log(x);

// Answer: A. 5
// Explanation: The inner function x is hoisted, shadowing the outer variable x,
//  so the assignment to x does not affect the outer variable.

console.log(0.1 + 0.2 === 0.3);

// Answer: B. false
// Explanation: Due to floating-point precision errors, 0.1 + 0.2  = 0.30004 does not exactly equal 0.3.

console.log(typeof [] == "object");

// Answer: A. true
// Explanation: In JavaScript, arrays are considered objects, so typeof [] returns "object".

let counter = 0;
const incrementCounter = () => {
  counter++;
  console.log(counter);
};
incrementCounter();
incrementCounter();

// Answer: B. 1, 2
// Explanation: The incrementCounter function increases the counter variable each time it's called and logs its new value.

const obj1 = { a: 1 };
Object.freeze(obj1);
obj.a = 2;
console.log(obj1.a);

// Answer: A. 1
// Explanation: Object.freeze prevents modifications to the object, so obj.a remains 1.

console.log(2 + "2" - 1); // 21

//Explanation: The expression 2 + '2' results in '22', and then '22' - 1 converts '22' back to a number and subtracts 1, yielding 21.

console.log(null == undefined); // true
console.log(null === undefined); // false

// In JavaScript, null and undefined are considered equal when using the loose equality operator (==).

let a = 1;
let b = a++;
console.log(b); // 1

// Explanation: The post-increment operator (a++) returns the value before incrementing, so b gets 1.

let a = 1;
let b = a + 1;
console.log(b); // 2

let x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x); // 20,10

//Answer: B. 20, 10
//Explanation: The first console.log(x) logs the block-scoped x (which is 20),
//and the second console.log(x) logs the outer x (which is 10).

var x = 10;
if (true) {
  var x = 20;
  console.log(x);
}
console.log(x); // 20,20

const MyComponent = React.memo(function MyComponent({ value }) {
  console.log("Rendering:", value);
  return <div>{value}</div>;
});

// A. It renders every time its parent re-renders.
// B. It only re-renders when value changes.
// C. It throws an error because React.memo cannot be used with functional components.
// D. It does not render anything.
// Answer: B. It only re-renders when value changes.
// Explanation: React.memo prevents unnecessary re-renders by doing a shallow comparison of props.

const [state, setState] = useState({ count: 0 });

const increment = () => {
  state.count += 1; // Direct modification
  setState(state); // Updating the state
};

// A. The state updates correctly.
// B. It throws an error.
// C. The component does not re-render.
// D. It creates a new state variable.
// Answer: C. The component does not re-render.
// Explanation: Directly modifying the state does not trigger a re-render. State should always be updated using the setter function.
