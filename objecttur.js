// object in Javscript

const user = {
  name: "abhash",
  age: 28,
  "time to": "walk",
};

console.log(user.name);
console.log(user["name"]);
console.log(user["time to"]);

user.name = "neha";
user["time to"] = "no walk";
console.log(user["time to"]); // "no walk"
console.log(user["name"]); // "neha"

delete user.age;
console.log(user); // {name: "abhash",time to: "walk"}

// Q1
const func = (function (a) {
  delete a;
  return a;
})(5);

console.log(func); // 5
// NOTE : delete keyword is used to delete the only the property
// from object not for loacl variable

// How to add the dynamic value in a object

const property = "first-name";
const name = "Abhash";
const user = {
  property: name,
};
console.log(user); // {property: "Abhash"}
const user = {
  [property]: name,
};
console.log(user); // {first-name: "Abhash"}

// How to excess the value
const user = {
  name: "abhash",
  age: 28,
  TimeTo: true,
};
for (key in user) {
  console.log(key); // acess the key
}
// "name";
// "age";
// "TimeTo";
for (key in user) {
  console.log(user[key]); // acess the value
}
// "abhash";
// 28;
// true;

// Q2 what is the output

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

console.log(obj); // {a: "three",b: "two"}

//Q3 create a fn multiplyByTwo(obj) that multiplie all the numeric value
let num = {
  a: 200,
  b: 400,
  title: "my num",
};

function multiplyByTwo(num) {
  for (let key in num) {
    if (typeof num[key] === "number") {
      num[key] = num[key] * 2;
    }
  }
  return num;
}

console.log(multiplyByTwo(num)); // {a: 400,b: 800,title: "my num"}

// Q4 what is the output

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;
console.log(a[b]); // 456

// yeah issliye beahave kar raha hai kyunki
console.log(a); // {[object Object]: 456}
a["[object Object]"] = 123;
a["[object Object]"] = 456;

// Q5 what is the output
console.log([..."abhash"]); // ["a", "b", "h", "a", "s", "h"]

// Q6 what is the output
const user = { name: "abhash", age: 21 };
const admin = { admin: true, ...user };

console.log(admin); // {admin: true,age: 21,name: "abhash"}

// Q7 what is the output

const setting = {
  name: "abhash",
  level: "high",
  health: 90,
};

const data = JSON.stringify(setting, ["level", "health"]);
console.log(data);
console.log(JSON.parse(data)); // {health: 90,level: "high"}

// Q8 what is the output

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  parameter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.parameter()); // NaN
// NOTE : in case of diameter this reference to shape object
// while in case of parameter this reference to global(window) object;

// Q8 what is the output
// what is destructuring in object ?
// destruturing mean takeing out the specific property from a object

let user = {
  name: "abhash",
  age: 29,
  fullName: {
    first: "neha",
    last: "chauhan",
  },
};

const { name, age } = user;
console.log(name); // "abhash"
console.log(age); // 29

const {
  fullName: { first },
} = user;
console.log(first); // "neha"

// Q9 what is the output

let c = { greeting: "Hey" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting); // "Hello"
// Note : yaha pr hum refernce provide kar rahe hai object ka

// Q10 what is the output

console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false
// This condition will always return 'false' since JavaScript compares objects by reference, not value

// Q11 what is the output

const value = {number:10};

const multiyly = (x= {...value}) => {
    console.log((x*number *= 2));
}

multiyly(); // 20 {...value} clone the vale
multiyly(); // 20 same here
multiyly(value); // 20 this time yeah value se lega jiske wajah se yah const update kare ga
multiyly(value); // 40 update value 20 hai 

// Q12 what is the output

function changeAgeAndReference(person){
    person.age=25;
    person = {
        name:"john",
        age:50,
    };
    return person;
}

const personObj1 = {
    name:"Abhash",
    age:30,
}

const personObj2 = changeAgeAndReference(personObj1)

console.log(personObj1)  // {age: 25,name: "Abhash"}
console.log(personObj2)  // {age: 50,name: "john"}

// Q13 
// what is deep copy ? how to clone it

let user = {
    name:"abhash",
    age:28,
}

// const objClone = Object.assign({},user);
// const objClone = JSON.parse(JSON.stringify(user));
// const objClone = {...user};