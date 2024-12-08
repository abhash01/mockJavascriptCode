// // 1. Write a function that reverse return the reverse of a string ?
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("i love you javaScript"));

//for using loop
function revStr(str) {
  let recerse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    recerse += str[i];
  }
  return recerse;
}
console.log(revStr("i love you javaScript"));

// // 2. Write a function that return the longestword in the sentense;

function longestWords(str) {
  let words = str.split(" ");
  let longestword = "";
  for (let word of words) {
    if (word.length > longestword.length) {
      longestword = word;
    }
  }
  return longestword;
}

console.log(longestWords("abhash is a goodandhandsome"));

// // 3. write a function that check wheather a given string is palindrone or not ?

function palindrone(str) {
  const palim = str.split("").reverse().join("");
  return str === palim;
}

console.log(palindrone("aca"));

// 4. write a function to remove the duplicate element from array

function removeDuplicate(arr) {
  let uniquearr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniquearr.indexOf(arr[i]) === -1) {
      uniquearr.push(arr[i]);
    }
  }
  return uniquearr;
}

console.log(removeDuplicate([1, 2, 3, 4, 5, 5, 6, 6]));

// 2nd way

function removeDuplicate(arr) {
  arr.sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[index]) {
      index++;
      arr[index] = arr[i];
    }
  }
  arr.length = index + 1;
  return arr;
}
const res = removeDuplicate([1, 2, 3, 4, 5, 5, 6, 6]);
console.log(res);

// 3rd way

function removedup(str) {
  return [...new Set(str)];
}
console.log(removedup([1, 2, 3, 4, 5, 5, 6, 6]));

// // 5. write a function that check wheater two string is anagrams or not ?
// first way
function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let obj = {};
  for (let item of str1) {
    obj[item] = (obj[item] || 0) + 1;
  }
  for (let key of str2) {
    if (!obj[key]) return false;
    else {
      obj[key] = obj[key] - 1;
    }
  }
  return true;
}
const rescheckAnagram = checkAnagram("listen", "silent");
console.log(rescheckAnagram);

// second way

function checkAnagram(str1, str2) {
  const strfirst = str1.split("").sort().join("");
  const strsecond = str2.split("").sort().join("");
  return strfirst === strsecond;
}
console.log(checkAnagram("listen", "silent"));

// // 6. write a function that return the number of vowels in a string.

function countVowel(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowel("hello Abhash"));

// // 7. write a function to find the largest number in the an array

function largestArr(arr) {
  let largestElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}
console.log(largestArr([1, 5, 6, 7, 8, 32, 9]));

// // 8. write a function to find the number is prime or not

function isPrime(number) {
  for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(8));

// // 9. write a function to calculate the factorial of a number
// // factorial(5) = 1*2*3*4*5 = 120

function factorial(number) {
  if (number === 0) {
    return 1;
  }
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(5));

// 10. write a function to remove all whitespace characters from a string;

function removeWhiteSpace(str) {
  // use the regular expression
  // including space , tabs, and line break
  // the g flag is used to perform a global search

  const result = str.replace(/\s/g, "");
  return result;
}

console.log(removeWhiteSpace("happy abhash ypu completerd "));

// const user = [
//   { firstName: "abhash", lastName: "ranjanð", age: 32 },
//   { firstName: "test2", lastName: "test21", age: 26 },
//   { firstName: "test3", lastName: "test31", age: 32 },
//   { firstName: "test4", lastName: "test41", age: 64 },
// ];

// const output = user.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(output);

// // missing the ODD number
// const input =[5,7,9,11,15,17]
// //output = 13
let n = 3;
function firstOdd(input, n) {
  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    let next = current + n;
    if (input[i + 1] !== next) return next;
  }
}
console.log(firstOdd(input, n));

// // if it was multiplier of 3 the what we need t change
// // let next = current + n;

// console.log(reverseString("i love you abhash")); // 1. Write a function that reverse return the reverse of a string ?
// console.log(longestWords("abhash is a goodandhandsome")); // 2. Write a function that return the longestword in the sentense;
// console.log(palindrone("aca")); //// 3. write a function that check wheather a given string is palindrone or not ?
// console.log(removeDuplicate([1, 2, 3, 4, 5, 5, 6, 6])); // 4. write a function to remove the duplicate element from array
// console.log(checkAnagram("listen", "silent")); // 5. write a function that check wheater two string is anagrams or not ?
// console.log(countVowel("hello Abhash")); // 6. write a function that return the number of vowels in a string.
// console.log(largestArr([1, 5, 6, 7, 8, 32, 9])); // 7. write a function to find the largest number in the an array
// console.log(isPrime(8)); // 8. write a function to find the number is prime or not
// console.log(factorial(5)); // 9. write a function to calculate the factorial of a number // factorial(5) = 1*2*3*4*5 = 120
// console.log(removeWhiteSpace("happy abhash ypu completerd "));
// console.log(firstOdd(input,n));// missing the ODD number // const input =[5,7,9,11,15,17] //output = 13
