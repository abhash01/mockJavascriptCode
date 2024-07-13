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

//console.log("day1");
// console.log(reverseString("i love you abhash"));
// 1. Write a function that reverse return the reverse of a string ?

function reverStr(str) {
  let reverseStr = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }
  return reverseStr;
}
const res = reverStr("i love you abhash");
console.log(res);

// console.log(longestWords("abhash is a goodandhandsome"));
// 2. Write a function that return the longestword in the sentense;

function logestWord(str) {
  const newStr = str.split(" ");
  let logwrd = newStr[0];
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > logwrd.length) {
      logwrd = newStr[i];
    }
  }
  return logwrd;
}
const res1 = logestWord("abhash is a goodan hand some");
console.log(res1);

// console.log(palindrone("aca")); //
// 3. write a function that check wheather a given string is palindrone or not ?

const res2 = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // NOTE
    reverseStr += str[i];
  }
  //console.log(reverseStr);
  if (reverseStr === str) return true;
  else {
    return false;
  }
};
console.log(res2("aca"));

// console.log(removeDuplicate([1, 2, 3, 4, 5, 5, 6, 6]));
// 4. write a function to remove the duplicate element from array
const res3 = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

console.log(res3([1, 2, 3, 4, 5, 5, 6, 6]));

// console.log(checkAnagram("listen", "silent"));
// 5. write a function that check wheater two string is anagrams or not ?

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let objStr = {};
  for (let key of str1) {
    objStr[key] = (objStr[key] || 0) + 1;
  }
  //console.log(objStr);
  for (let item of str2) {
    if (!objStr[item]) return false;
    else {
      objStr[item] = objStr[item] - 1;
    }
  }
  return true;
}
const res4 = isAnagram("listen", "silent");
console.log(res4);

// console.log(countVowel("hello Abhash"));
// 6. write a function that return the number of vowels in a string.

function noVowel(str) {
  let vowel = "aieou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
const res5 = noVowel("hello Abhashai");
console.log(res5);

// console.log(largestArr([1, 5, 6, 7, 8, 32, 9]));
// 7. write a function to find the largest number in the an array

const largestArr = (arr) => {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};
console.log(largestArr([1, 5, 6, 7, 8, 32, 9]));

// console.log(isPrime(8));
// 8. write a function to find the number is prime or not

function isPrime(number) {
  for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(23));

// console.log(factorial(5));
// 9. write a function to calculate the factorial of a number
// factorial(5) = 1*2*3*4*5 = 120

const factorial = (num) => {
  if (num === 0) return 1;
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};
console.log(factorial(5));

// console.log(firstOdd(input,n));
// missing the ODD number
// const input =[5,7,9,11,15,17] //output = 13

const missOdd = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let next = current + 1;
    if ((next = current + 1)) return next;
  }
};
console.log(missOdd([5, 7, 9, 11, 15, 17]));

// today plan
//Q1. sum of all naturalk numbers from 1 to n
// sum of 1 to 5 :15
//Q2 Sum of digits of a number
// 1287 = > 1+2+8+7 = 18
// remainder 7 ,  Quentiontent 128
// % remainder / quopient
// Q3 palindrone
//number(121) true
//number(-121) false

// 4 268. Missing Number
// NOTE : add all number in array
//Given an array nums containing n distinct numbers in the range [0, n],
//return the only number in the range that is missing from the array.
//Input: nums = [3,0,1] => Output: 2
//Input: nums = [0,1]  => Output: 2
//Input: nums = [9,6,4,2,3,5,7,0,1] => Output: 8
