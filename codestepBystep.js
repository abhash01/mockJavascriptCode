// 1.
// function fruit() {
//   console.log(name);
//   console.log(price);

//   var name = "apple";
//   let price = 20;
// }
// fruit();

// ANS :
// undefined
// codestepBystep.js:3 Uncaught ReferenceError: Cannot access 'price' before initialization
//     at fruit (codestepBystep.js:3:15)
//     at codestepBystep.js:8:1

// 2.
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 5000);
// }

//ANS
// 3 because var is global scope , loop completed before setTimeout

// 3.
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), i * 1000);
// }

//ANS
// 0
// 1
// 2

// 4.
// console.warn(+true);         //=> 1 becoz adding symbole convert to no
// console.warn(+"true");       //=> NaN convert to no but string is NaN
// console.warn(-true);         //=> -1 becoz adding symbole convert to no
// console.warn(typeof -true);  //=> number symbol convert to number
// console.warn(typeof +true);  //=> number symbol convert to number

// 5.
// console.warn(!"abhash");         //=> false
// console.warn(!!"abhash");        //=> true
// console.warn(typeof "abhash");   //=> string

// 6.
// let data = "size";
// const bird = {
//   size: "small",
// };
// console.warn(bird[data]);   //=> small
// console.warn(bird["size"]); //=> small
// console.warn(bird.size);    //=> small
// console.warn(bird.data);    //=> undefined

// 7.
// let c = { name: "abhash" };
// let d;

// d = c;
// c.name = "rahul";
// console.log(d.name);

//ANS
// rahul , bcoz in case of object when you copied object it using the same reference i.e same memory location.

// 8.
// var x;
// var x =10;
// console.log(x)

//ANS
//10

// 9.
// var x;
// let x = 10;
// console.log(x);

//ANS
// Uncaught SyntaxError: Identifier 'x' has already been declared

// 11.
// let a = 3;
// let b = new Number(3); // with new keyword it will give you new object and typeof b is object

// console.log(a == b);
// console.log(a === b);

//ANS
// true
// false

// 12.
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, "2"));

//ANS
// 12

// 13.
// let number = 0;
// console.log(number++); // => 0
// console.log(++number); // => 2
// console.log(number); // => 2

// 14.
// const obj = { 1: "a", 2: "b", 3: "c" };

// console.log(obj.hasOwnProperty("1")); //=> true
// console.log(obj.hasOwnProperty(1)); //=> true

// 15.
// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);

//ANS
// {a: 'three', b: 'two'}  => position remain same but value override

// 16.
// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

//ANS
// 1
// 2
// 4

// 17.
// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("second"));
// const baz = () => console.log("third");

// bar();
// foo();
// baz();
// function declaration is noit important function call is important
//ANS
// First;
// third;
// second;

// 18.

// const person = { name: "abhash" };
// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21)); //=> it return fn , to print call the fn() console.log(sayHi.bind(person, 21)())

//ANS
// abhash is 21
// ƒ sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// 19.
// function sayHi() {
//   return (() => 0)();  // number
// }
// console.log(typeof sayHi());

// function sayHi() {
//   return (() => "Hello")();  // string
// }
// console.log(typeof sayHi());
//ANS
//number //=>  becoz arrow function call immediate after retun

// 20.
// console.log(typeof 1); // number
// console.log(typeof typeof 1); // string

// 21.
// console.log(!!null); //=> false
// console.log(!!""); //=> false
// console.log(!!1); //=> true

// 22.
// console.log([..."abhash"]); //=> ['a', 'b', 'h', 'a', 's', 'h']
// console.log([...[1, 2, 3, 5]]); //=> [1, 2, 3, 5]

// 23.
// let data = 3 + 4 + "5";
// console.log(typeof data);  //=> String
// console.log(typeof 3 + 4 + "5"); //=> number45
// console.log(typeof (3 + 4 + +"5")) //=> number bcoz we add plus symbol before string 5
// console.log(typeof []) //=> object;
// console.log([] == []) //=> false bcoz both using the different memory location.
