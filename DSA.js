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
