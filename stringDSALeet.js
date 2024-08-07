console.log("String leet code problem");
// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1: Input: strs = ["flower","flow","flight"] Output: "fl"
// Example 2:Input: strs = ["dog","racecar","car"] Output: ""
// Explanation: There is no common prefix among the input strings.

// Note
// let prefix = "abhash";
// const res = prefix.substring(0, 5); => "abhas" start at 0 and end at 5
// console.log(res);

// 412. Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:Input: n = 3 Output: ["1","2","Fizz"]
// Example 2:Input: n = 5 Output: ["1","2","Fizz","4","Buzz"]
// Example 3:Input: n = 15 Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest
// substring
//  without repeating characters.
// Example 1: Input: s = "abcabcbb" Output: 3 Explanation: The answer is "abc", with the length of 3.
// Example 2: Input: s = "bbbbb" Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3: Input: s = "pwwkew" Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// function twosum(num, target) {
//   const comp = new Map();
//   console.log(comp);
// }
// twosum([2, 7, 8, 10], 9);

// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1: Input: nums = [2,7,11,15], target = 9 Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2: Input: nums = [3,2,4], target = 6Output: [1,2]
// Example 3:Input: nums = [3,3], target = 6 Output: [0,1]
