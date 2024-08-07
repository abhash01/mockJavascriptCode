// 1. count the number of vowels

var str = "i am Abhash";
function vowelCount(str) {
  var count = 0;
  var vowel = "aeiou";

  for (let i = 0; i < str.length; i++) {
    //if(vowel.indexOf(str[i]))
    if (vowel.indexOf(str[i].toLowerCase()) > -1) {
      count++;
    }
  }
  return count;
}
console.log(vowelCount(str));

// 2. #1 - DS & Algorithms Course | Sum Zero Problem
// Checking Sum ZERO
// [-5,-4,-3,-2,0,2,4,6,8]
// OUTPUT [-4,4]
// Complexity 0(n)sqaure

function getSumPairZero(array) {
  for (let num of array) {
    for (let i = 1; i < array.length; i++) {
      if (num + array[i] === 0) {
        return [num, array[i]];
      }
    }
  }
}
const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

// Checking Sum ZERO
// [-5,-4,-3,-2,0,2,4,6,8]
// OUTPUT [-4,4]
// Complexity 0(n) ==> yeah sirf sorted array ke case mai kar kare ga
// yaha pr hum sorted array liye ,
//phir phala aur last ko add kiya agr 0 se jaada hai toh right mai ek index -- kar diye
//agar kum hai toh left se ++ kar diye

function getSumPairZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
const result1 = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

//#3 - DS & Algorithms Course | String Anagram Problem
// String Anagram
// 'hello'= 'llheo'
// 'abhash' = 'ashhba'

// condition
// length check(both the string) dono ka length check kar lege
// string 'hello'
// {e: 1,h: 1,l: 2,o: 1}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let counter = {};
  for (let word of str1) {
    counter[word] = (counter[word] || 0) + 1;
  }
  //console.log(counter) {e: 1,h: 1,l: 2,o: 1} // str2 mai check kar ke counter se minus kar rahe hai
  for (let item of str2) {
    if (!counter[item]) return false;
    else {
      counter[item] = counter[item] - 1;
    }
  }
  return true;
}
const check = isAnagram("hello", "llhee");
console.log(check);
// Linear time complexity

//#4 - DS & Algorithms Course | Counting Unique Numbers Problem
// Count Unique Numbers
//[1,1,2,2,3,4,4,5,6,7,8,8]
// output 8  // 1 do bar hai count 1 bar hoga same 2 do baar hai but count 1 bar hoga

//Condition
// i =0;j = 1
// array[i] !== array[j]
// 1. i++
// 2. array[i] = array[j]

function UniqueCount(array) {
  if (array.length) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    // if(array.length = 0)
    throw new Error("Array is empty");
  }
}

const output = UniqueCount([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(output);

// o(n) linear time Complexity

//#5 - DS & Algorithms Course | Largest Sum of Consecutive Digits
// [1,2,3,4,3,5,4,6,7,8] => total element => 10;
// Count largest sum of consecutive Digit
// num = 4 // kitne consecutive no ko add karega
// sum => 25 // e.g => 4,6,7,8

// condition
// num > array => throw error message
// 10 - 4 + 1 => formula for loop kitne bar chalega

function findlargest(array, num) {
  if (num > array.length) {
    throw new Error("array should be grater than num");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp = temp + array[i + j]; // important
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}
const largest = findlargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(largest);

//#6 - DS & Algorithms Course | Divide & Conquerer Technique | Binary Search
// Divide and Conquerer Technique
// Find the index of given no in a sorted array 7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//min = 0   // 0  // element = 1
//max = array.length - 1;  // 14  // element = 15
//midIndex = (min + max) / 2;  (0 + 14 ) / 2 => 7(index) // element = 8
// if array[midIndex] < number e.g(7)
// min = midIndex + 1;
// if array[midIndex] > number
// max = midIndex - 1;    // max = 6 , min = 0, midImndex = 3  // {1,2,3,4,5,6,7}
// min = 3 + 1 = 4, max = 6 ,  midImndex = 3  // {5,6,7}
// (min + max ) / 2  => 5
// min = midIndex + 1 = > min 6 ; max 6

function searchAlgo(array, number) {
  let min = 0;
  let max = array.length - 1;
  //midIndex = (min + max) / 2
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    if (array[midIndex] < number) {
      min = midIndex + 1;
    } else if (array[midIndex] > number) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

const resultS = searchAlgo(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  7
);
console.log(resultS);

//Time Complexity binary 0(log(n))

//#7 - DS & Algorithms Course | Check Square Elements of Another Array
// arr1 = [1,2,3,4] , arr2 = [1,9,4,16] case1
// arr1 = [1,2,4,2] , arr2 = [1,4,4,16] case2

//condition
//map1={1:1,2:2,4:1}
//map2={1:1,4:2,16:1}

function checkSquare(arr1, arr2) {
  let map1 = {};
  let map2 = {};

  for (let item of arr1) {
    map1[item] = (map1[item] || 0) + 1;
  }
  console.log(map1);
  for (let item1 of arr2) {
    map2[item1] = (map2[item1] || 0) + 1;
  }
  console.log(map2);
  for (let key in map1) {
    if (!map2[key * key]) {
      // obj keys compare in term of square
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      // value compare
      return false;
    }
  }
  return true;
}

const res = checkSquare([1, 2, 4, 2], [1, 4, 4, 16]);
console.log(res);

// #9 - DS & Algorithms Course | Recursive function in Simplest way
// Recursive: when function call itself
// otherwise it will get called for infinite time
// If a function call itself then there must be an end point

let counter = 0;
function demo(number) {
  if (counter > number) {
    return;
  }
  console.log("counter", counter);
  counter++;
  demo(number);
}
demo(10);

// #10 - DS & Algorithms Course | Advance Recursive function | Sorting |
// Sorting using Recursive Function
// [2,3,1,4] => By Default case
// [2,1,3,4] => case 1
// [1,2,3,4] => final output

let myArray = [2, 3, 1, 4];
let newArrayList = [];
let i = 0;
let j = 1;
function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}
function sorted(array) {
  if (isSorted(array)) {
    newArrayList = array;
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    sorted(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    sorted(array);
  }
}

sorted(myArray);
console.log(newArrayList);

// #12 - DS & Algorithms Course | Helper Recursive function

// SLICE METHOD
// let result = [1,2,3,4,5,6,7,8,10]
// console.log(result.slice(1))    => [2, 3, 4, 5, 6, 7, 8, 10]
// console.log(result.slice(2))    => [ 3, 4, 5, 6, 7, 8, 10]
// console.log(result.slice(3))    => [ 4, 5, 6, 7, 8, 10]

// Helper Recursive function
// [1,2,3,4,5,6,7,8,9,10]
// [1,3,5,7,9] => output
// number % 2 !== 0 => odd

function findOdd(array) {
  let output = [];
  function helperRecursive(array) {
    if (array.length === 0) {
      return;
    }
    if (array[0] % 2 !== 0) {
      output.push(array[0]);
    }
    helperRecursive(array.slice(1)); // recursivly call
  }
  helperRecursive(array); // 1st time call
  return output;
}
const result3 = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result3);

// #13 - DS & Algorithms Course | Introduction to Search Algorithms
// Searching
// let names = ["abhash","aman","dee","smriti"];
// console.log(names.indexOf("abhash"))    => 0
// console.log(names.indexOf("aman"))    => 1
// console.log(names.indexOf("Raj"))    =>  -1

// console.log(names.includes("abhash"));  => true
// console.log(names.includes("raj"));  => false

// #14 - DS & Algorithms Course | linear search Algorithm
// Linear Search Alogorithm

const user = [
  { username: "abhash", email: "abhash@gmail.com" },
  { username: "rahul", email: "rahul@gmail.com" },
  { username: "raj", email: "raj@gmail.com" },
];

function findUser(user, val) {
  for (let item of user) {
    if (item["username"] === val) {
      return true;
    }
  }
  return false;
}
const findsearch = findUser(user, "raj");
console.log(findsearch);

// #15 - DS & Algorithms Course | Sorting algorithms | Bubble Sort Implementation 🔥
// Bubble Sort (Sorting..)
// A sorting Algorithum where the largest values bubble up at the top

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

const resultBubblesort = bubbleSort([5, 3, 4, 1, 2, 8, 6, 7]);
console.log(resultBubblesort);

// [5,3,4,1,2,8,6,7]
// [3,5,4,1,2,8,6,7]
// [3,4,5,1,2,8,6,7]
// [3,4,1,5,2,8,6,7]
// [3,4,1,2,5,8,6,7]
// [3,4,1,2,5,6,8,7]
// [3,4,1,2,5,6,7,8]
// next time it will run for 7 time as 8 is largest and move up

// #19 - Find the Maximum Occurring Character in String ? DS & Algorithms Course 🔥
// Find the maximum occuring character in given string ?
// Hello World

function maxOccurChar(str) {
  let charObj = {};
  for (let k of str) {
    charObj[k] = (charObj[k] || 0) + 1;
    //console.log(charObj);
  }
  let max = 1;
  let char = str[0];
  for (let key in charObj) {
    if (charObj[key] > max) {
      max = charObj[key];
      char = key;
    }
  }
  return char;
}

const resultOcc = maxOccurChar("Hello World");
console.log(resultOcc);

// onther way

function getCharString(str) {
  const map = {};
  str.split("").forEach((element) => {
    map[element] = map[element] ? map[element] + 1 : 1;
  });
  let max = 1;
  char = str[0];
  for (let k in map) {
    if (map[k] > max) {
      max = map[k];
      char = k;
    }
  }
  return char;
}

const result33 = getCharString("Hello World");
console.log(result33);

// #20 - Check if Given String is Palindrome or not ? DS & Algorithms Course 🔥

// 1st way
function isPal(str) {
  let reverse = str.split("").reverse().join("");
  return str.toLowerCase() === reverse.toLowerCase();
}

console.log(isPal("noon"));

function isPal2(str) {
  let reverse = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(isPal2("noon"));

//insertion sort
// phale hum 1st index se start karge aur compare kare ge wah phiche wale se chpta toh nhi
// agare chota hai toh swap kare ge
// current value ko baad mai replcae kare ge

const sorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]; // 8
    let j = i - 1; // [0] // 6
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
};

console.log(sorted([6, 8, 2, 12, 9, 15, 4]));
// 1st iterartion [6, 8, 2, 12, 9, 15, 4]
// 2nd iteration [6, 2, 8, 12, 9, 15, 4]

// Flatten the arr with recussion

var arr = [1, [2, 3, 4], [5, 6, 7, [8, 9]]];

//const newArr = arr.flat(Infinity)
//console.log(newArr);
const flattedArr = (arr) => {
  const someArr = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flattedArr(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return someArr;
};

console.log(flattedArr(arr));
// Another way
const flatted = (arr, flattedend) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatted(arr[i], flattedend); //here we calling flatted again as recursive
    } else {
      flattedend.push(arr[i]);
    }
  }
  return flattedend;
};

console.log(flatted(arr, [])); // NOTE
/// we are passing arr and empty arr

// Important for recusiion

let arr = [2, 3, 1, 4, 6, 9, 8, 5, 45, 3];
let newarr = [];
let i = 0;
let j = 1;
function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
function sortedArr(arr) {
  if (isSorted(arr)) {
    newarr = arr;
    return;
  } else if (arr[i] < arr[j]) {
    i++;
    j++;
    sortedArr(arr);
  } else {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i = 0;
    j = 1;
    sortedArr(arr);
  }
}
sortedArr(arr);
console.log(newarr);

let str = "nurses run"; // should return true
// kyunki space remove kar de toh wah palindrone hoga
function isPalimdrome(str) {
  str = str.replace(" ", "");
  //console.log(str)
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }
  //console.log(reverseStr)
  return reverseStr;
}
console.log(str);

//const res = isPalimdrome(str);

const resultPalim = str === isPalimdrome(str) ? true : false;
console.log(resultPalim);

// Sum fo all element in the number
let num = 34556456464;

function sum(num) {
  let sum = 0;
  while (num > 0) {
    let rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }
  return sum;
}

const resSum = sum(num);
console.log(resSum);

//Prime Number

function isPrime(num) {
  if (num < 2) {
    return `${num} is not a prime`;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime`;
    }
  }
  return `${num} is a prime`;
}
console.log(isPrime(117));

//A factorial number is the product of all positive integers, which are equal to or less than the given number.
// 4! = 4 × 3 × 2 × 1 = 24
// 7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
// 1! = 1
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(7));

// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
let str = "i love javascript";
function upperstr(str) {
  let newstr = str.split(" ");
  for (let i = 0; i < newstr.length; i++) {
    newstr[i] = newstr[i][0].toUpperCase() + newstr[i].substring(1);
  }
  return newstr.join(" ");
}
const resUpperCase = upperstr(str);
console.log(resUpperCase); // "I Love Javascript"

//  Debouncing is a performance optimization technique to reduce the rate at which events trigger functions

<input type="text" placeholder="search" onkeyup="Betterfn()" />;

let countar = 0;
function getDate() {
  console.log("fetch data" + countar++);
}
function myDebounce(call, d) {
  // yaha pr hum getData aur 1000 delay de rahe hai
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    setTimeout(() => {
      call();
    }, d);
  };
}
const Betterfn = myDebounce(getData, 1000);

let arrdata = [
  { name: "abhash", rollnumber: 31, marks: 80 },
  { name: "raj", rollnumber: 32, marks: 60 },
  { name: "rahul", rollnumber: 33, marks: 70 },
  { name: "neha", rollnumber: 34, marks: 30 },
];

const detail = arrdata.filter((stu) => {
  return stu.marks > 60;
});
console.log(detail);

const sumofAllMarks = arrdata.reduce((acc, curr) => {
  return (acc = acc + curr.marks);
}, 0);
console.log(sumofAllMarks);

//Input: An integer n.
//   Output: If n is 100, return 100. Otherwise, return n+1 . n + 1... .100

function processNumber(n) {
  if (n === 100) {
    return 100;
  } else {
    let result = [];
    for (let i = n + 1; i <= 100; i++) {
      result.push(i);
    }
    return result;
  }
}

// Example usage:
console.log(processNumber(98)); // Output: [99, 100]
console.log(processNumber(100)); // Output: 100

//Input: s = "abcabcbb"
//Output: 3

function lengthOfLongestSubstring(str) {
  if (!str) return 0;
  let start = 0;
  let end = 0;
  let maxlength = 0;
  const uniquechar = new Set();
  while (end < str.length) {
    if (!uniquechar.has(str[end])) {
      uniquechar.add(str[end]);
      end++;
      maxlength = Math.max(maxlength, uniquechar.size);
      //console.log(Math.max(1, 3, 2));
      // Expected output: 3

      //console.log(Math.max(-1, -3, -2));
      // Expected output: -1
    } else {
      uniquechar.delete(str[start]);
      start++;
    }
  }
  return maxlength;
}
const resultSubstring = lengthOfLongestSubstring("pwwkew");
console.log(resultSubstring);

//working
//Final String -> abcabcbb length => 7
// start = 0
// end = 0

// abcabcbb
// start = 0
// end = 2
// max = 3

// bcabcbb // a removed from first
// start = 1
// end = 3
// max = 3

// cabcbb // b removed from first
// start = 2
// end = 4
// max = 3

// abcbb // c removed from first
// start = 3
// end = 5
// max = 3

// abcb // b removed from str[4] as start 4
// start = 4
// end = 6
// max = 3

// abc // b removed from str[4] as start 4
// start = 5
// end = 7
// max = 3
