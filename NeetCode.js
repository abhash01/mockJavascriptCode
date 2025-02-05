//1 Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
//Input: nums = [1, 2, 3, 3] Output: true
//Input: nums = [1, 2, 3, 4] Output: false

function isDuplicate(nums) {
  let unique = new Set();
  for (let item of nums) {
    if (unique.has(item)) {
      return true;
    } else {
      unique.add(item);
    }
  }
  return false;
}

const res = isDuplicate([1, 2, 3, 3]);
console.log(res);

//2 //Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

//An anagram is a string that contains the exact same characters as another string,
//but the order of the characters can be different.
//Input: s = "racecar", t = "carrace" Output: true
//Input: s = "jar", t = "jam" Output: false

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let counter = {};
  for (let item of str1) {
    counter[item] = (counter[item] || 0) + 1;
  }
  for (let key of str2) {
    if (!counter[key]) return false;
    else {
      counter[key] = counter[key] - 1;
    }
  }
  return true;
}

const resAna = isAnagram("racecar", "carrace");
console.log(resAna);

// Write, Edit and Run your Javascript code using JS Online Compiler

//Two Sum
//Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

//You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

//Return the answer with the smaller index first.
//Input:  nums = [3,4,5,6], target = 7 Output: [0,1]
//Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
//Input: nums = [4,5,6], target = 10 Output: [0,2]

function isTwoSum(nums, target) {
  let newNums = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (newNums.has(diff)) {
      return [newNums.get(diff), i];
    } else {
      newNums.set(nums[i], i);
    }
  }
  return [];
}

const resTwo = isTwoSum([4, 5, 6], 10);
console.log(resTwo);

//4//Given a string s, return true if it is a palindrome, otherwise return false.

//A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

//Input: s = "Was it a car or a cat I saw?" Output: true
//Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw",
//Input: s = "tab a cat" Output: false
//Explanation: "tabacat" is not a palindrome.

function isPalindrome(str) {
  let newStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = newStr.length - 1;
  while (left <= right) {
    if (newStr[left] !== newStr[right]) return false;
    left++;
    right--;
  }
  return true;
}

const resPalin = isPalindrome("Was it a car or a cat I saw?");
console.log(resPalin);

//5 //Best Time to Buy and Sell Stock
//You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

//You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

//Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

//Input: prices = [10,1,5,6,7,1] Output: 6
//Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

//Input: prices = [10,8,7,5,2] Output: 0
//Explanation: No profitable transactions can be made, thus the max profit is 0.
function bestTime(arr) {
  let minPrice = arr[0];
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    minPrice = Math.min(minPrice, arr[i]);
    profit = arr[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
}

const resStock = bestTime([10, 1, 5, 6, 7, 1]);
console.log(resStock);
