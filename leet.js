// 26 Remove Duplicates from Sorted Array
// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

//ANSWER
var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  return index;
};

// 27. Remove Element
// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.

//ANSWER
var removeElement = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

//Solution
// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

function insert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
const res = insert([1, 3, 5, 6], 7);
console.log(res);

// ----------  Leet Question -------------//

//14. Longest Common Prefix

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// let arr1 = "flow";
// let arr0 = "flowe";
// let outputof = arr1.indexOf(arr0); => -1

// let arr2 = "flow";
// let arr3 = "flow";
// let outputof = arr2.indexOf(arr3); => 0

//Write a function that prints the numbers from 1 to 100. But for multiples of three,
//print "Fizz" instead of the number and for the multiples of five, print "Buzz".
//For numbers which are multiples of both three and five, print "FizzBuzz".
// Input: n = 3
// Output: ["1","2","Fizz"]
function fizzBuzz(n) {
  let printout = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      printout.push("FizzBuzz");
    } else if (i % 3 === 0) {
      printout.push("Fizz");
    } else if (i % 5 === 0) {
      printout.push("Buzz");
    } else {
      printout.push(i);
    }
  }
  return printout;
}

const fizz = fizzBuzz(15);
console.log(fizz);

// 6. Merge Two Sorted Arrays
// Write a function mergeSortedArrays that merges two sorted arrays into a single sorted array.

// mergeSortedArrays([1, 3, 5], [2, 4, 6]); // [1, 2, 3, 4, 5, 6]
// mergeSortedArrays([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6, 7, 8])); // [1, 2, 3, 4, 5, 6]

//350. Intersection of Two Arrays II
// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

var intersect = function (nums1, nums2) {
  let obj = {};
  let result = [];
  for (let item of nums1) {
    obj[item] = (obj[item] || 0) + 1; //object banaya with count
  }
  for (let key of nums2) {
    if (obj[key]) {
      // key hai ya nhi obj mai
      result.push(key); // agar hai toh result mai push
      obj[key] = obj[key] - 1; // obj se minus kardo key
    }
  }
  return result;
};

//128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.
// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

var longestConsecutive = function (nums) {
  if (nums === null || nums === 0) return 0;
  let max = 0;
  let set = new Set(nums);
  for (let item of set) {
    if (set.has(item - 1)) {
      continue;
    }
    let currentNum = item;
    let currentMax = 1;
    while (set.has(currentNum + 1)) {
      currentNum++;
      currentMax++;
    }
    max = Math.max(max, currentMax);
  }
  return max;
};

// 66. Plus One
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.
// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

function output(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0; // yaha 9 replace kar 0 aur niche 1 add kar ke return
    } else {
      digits[i]++;
      return digits; // yaha se return ho gaye gaa agar 9 nhi hai
    }
  }
  return [1, ...digits];
}
const plusone = output([9, 9, 9, 9, 9]);
console.log(plusone);

// 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
//(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

function subsequence(s, t) {
  let p1 = 0,
    p2 = 0;
  while (p1 < s.length && p2 < t.length) {
    if (s[p1] === t[p2]) {
      p1++;
      p2++;
    } else {
      p2++;
    }
  }
  return p1 === s.length;
}

const sub = subsequence("axc", "ahbgdc");
console.log(sub);

// 448. Find All Numbers Disappeared in an Array
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

var findDisappearedNumbers = function (nums) {
  let set = new Set(nums);
  let result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }
  return result;
};
const misnum = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(misnum);

// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()" Output: true
// Input: s = "()[]{}" Output: true
// Input: s = "(]" Output: false
// Input: s = "([])"Output: true
var isValid = function (s) {
  if (s.length === 0) return null;
  let stack = [];
  for (let c of s) {
    if (c === "(") stack.push(")");
    else if (c === "[") stack.push("]");
    else if (c === "{") stack.push("}");
    else if (c !== stack.pop()) return false;
  }
  return stack.length == 0; // yaha pr agar stack mai kuch nhi toh true nhi toh false
};

// 704. Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

//169. Majority Element
//Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than ⌊n / 2⌋ times.
//You may assume that the majority element always exists in the array.
//Input: nums = [2,2,1,1,1,2,2] Output: 2
//Input: nums = [3,2,3] Output: 3

var majorityElement = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const freq = (map.get(nums[i]) ?? 0) + 1;
    map.set(nums[i], freq);
    //console.log(map)
    //Map(2) { 2 => 4, 1 => 3 }
    if (freq > nums.length / 2) return nums[i];
  }
  return nums[0];
};

// this is also possible
// var majorityElement = function(nums) {
//     let obj = {}
//     for(let i = 0;i<nums.length;i++){
//         obj[nums[i]] = (obj[nums[i]] || 0) + 1
//     }
//     const maxValue = Math.max(...Object.values(obj));
//     const key = Object.keys(obj).find((key) => {
//         return obj[key] === maxValue
//     })
//     return key
// };
