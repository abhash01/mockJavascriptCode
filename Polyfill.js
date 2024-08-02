// A polyfill in JavaScript is a piece of code (usually JavaScript) used to provide modern functionality
//on older browsers that do not natively support it. Essentially, polyfills are used to "fill in"
// the gaps of missing features, ensuring that code can run consistently across different environments.

//Polyfills are commonly used to:

// 1. Add support for newer JavaScript features that are not available in older browsers.
//    For example, ES6 introduced many new features such as Promise, Array.from, and Object.assign, which older browsers do not support.
// 2. Implement web APIs that are not available in all browsers. For instance,
//    the Fetch API or the Intersection Observer API may need polyfills to work in older versions of Internet Explorer.

// map, filter and reduce
// Polyfill for map()
// Array.map((num,i,arr) => { })

let arr1 = [1, 3, 5, 7, 8];
// deatail
// this pointing toward the arr
Array.prototype.MyMapmethod = function (callback) {
  if (typeof callback !== "function") {
    throw Error("undefined is not a function");
  }
  const newarr = [];
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    newarr.push(result);
  }
  return newarr;
};

const multi = arr1.MyMapmethod((num) => {
  return (num = num * 2);
});

console.log(multi);

// Polyfill for filter()
//  Array.filter

console.log(moreThanFive);
// Another way Filter
Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw Error("undefined is not function");
  }
  const arr = this;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    if (result) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const resfilt = arr.myFilter((item) => {
  return item > 2;
});
console.log(resfilt);

// Polyfill for map()
// Array.reduce((acc,num,i,arr) => { },initialValue)

let arr3 = [1, 3, 5, 7, 8];

// easy way
Array.prototype.MyReduceMethod = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw Error("undefined is not a funtion");
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    const ans = callback(initialValue, arr[i], i, arr);
    initialValue = ans;
  }
  return initialValue;
};

const resultSum = arr.MyReduceMethod((acc, curr) => {
  return (acc = acc + curr);
}, 0);

console.log(resultSum);

// Array.prototype.forEach
let arr = [1, 2, 3, 4];

//const res = arr.forEach((item,i,arr) => {
//console.log(item,i,arr)
//})
Array.prototype.myfoEach = function (callback) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

const res = arr.myfoEach((item, i, arr) => {
  console.log(item, i, arr);
});
