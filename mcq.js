1.Q What is the default value of the position property in CSS?
a) static   => correct
b) relative
c) absolute
d) fixed

2.Q Which HTML5 element is used to define navigation links?

a) <navigation>
b) <nav>   = > correct
c) <navigator>
d) <link></link>

3.Q How do you apply a CSS rule only to elements with a specific class within a specific id?

a) #id .class  => correct
b) .class #id
c) .id .class
d) #class .id

4.Q Which CSS property is used to create space between the element's border and its content?

a) margin
b) padding   => correct
c) border-spacing
d) spacing

5.Q What does the z-index property in CSS control?

a) The visibility of an element.
b) The stacking order of elements. => correct 
c) The font size of text.
d) The opacity of an element.

6.Q Which CSS property is used to control the flow and alignment of flex items within a flex container?

a) align-content 
b) justify-content => correct
c) align-items
d) flex-direction

7.Q What does the box-sizing: border-box; CSS property do?

a) It includes only the content's width and height.
b) It adds the padding and border to the width and height of the element. => correct
c) It sets the element's width and height to zero.
d) It resets the element's margin and padding to zero.

8.Q What is the output of the following code?

console.log(typeof null);

a) "null"
b) "object" => correct
c) "undefined"
d) "string"

9.QWhat is the result of the following code?

function foo() {
    return {
        bar: "hello"
    };
}
console.log(foo().bar);

a) "hello" => correct
b) undefined
c) null
d) SyntaxError

10.Q What will be the output of this code?

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

a) 0 1 2
b) 0 0 0
c) 3 3 3  => correct
d) undefined undefined undefined

11.Q What is the output of the following code?

let a = 10;
(function() {
    console.log(a);
    let a = 20;
    console.log(a);
})();

a) 10 20
b) undefined 20
c) ReferenceError  => correct 
d) undefined undefined

12.Q What will be the output of the following code?

const foo = { n: 1 };
const bar = foo;
foo.x = foo = { n: 2 };

console.log(foo);
console.log(bar);

a) { n: 1, x: { n: 2 } } and { n: 2 }
b) { n: 2 } and { n: 1, x: { n: 2 } } => correct
c) { n: 2 } and { n: 1 }
d) { n: 2, x: { n: 2 } } and { n: 1, x: { n: 2 } }

13.Q What is the output of the following code snippet?

let arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);
a) 3
b) 10
c) 11  => correct
d) 99

14.Q What will be the output of this code?

const x = 1;

function foo() {
    console.log(x);
    const x = 2;
}

foo();

a) 1
b) 2
c) undefined
d) ReferenceError  => correct 

15.Q What does the following code output?

function Car(make) {
    this.make = make;
    return { make: "default" };
}

const myCar = new Car("Toyota");
console.log(myCar.make);

a) "Toyota"
b) "default" => correct 
c) undefined
d) TypeError

16.Q What will be the output of the following code?

function outer() {
    var a = 10;
    function inner() {
        console.log(a);
        a = 20;
    }
    return inner;
}

var fn = outer();
fn();
console.log(a);

a) 10 and undefined
b) 10 and 20
c) 20 and undefined
d) ReferenceError and undefined => correct

17.Q What is the result of the following code?

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a);
console.log(b);

a) 5 and 10
b) 10 and 5 => correct
c) undefined and undefined
d) SyntaxError

18.Q What will be the output of this code snippet?

let a = 10;
let b = 20;

(function(a) {
    console.log(a); 
    a = 30;
    console.log(a);
})(a);

console.log(a);
 
a) 10, 30, 10   => correct
b) 10, 30, 30
c) 10, 10, 10
d) undefined, 30, 10

19.Q What will be the output of the following code?

let arr = [10, 20, 30];
let [a, , b] = arr;

console.log(a);
console.log(b);

a) 10 and 20
b) 10 and 30  => correct
c) 20 and 30
d) undefined and undefined

20.Q What will be the output of this code?

async function asyncFunc() {
    console.log('Async function start');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Async function end');
}

console.log('Before async call');
asyncFunc();
console.log('After async call');

a) 'Before async call', 'Async function start', 'After async call', 'Async function end'
b) 'Before async call', 'After async call', 'Async function start', 'Async function end' => correct
c) 'Async function start', 'Before async call', 'After async call', 'Async function end'
d) 'Before async call', 'Async function start', 'Async function end', 'After async call'
