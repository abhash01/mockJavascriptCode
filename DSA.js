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
//if(vowel.indexOf(str[i]))

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
    //console.log(counter)
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
