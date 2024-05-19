// Question: Implement a function that finds the first non-repeating character in a string and returns its index. If it does not exist, return -1.

// Function Signature: function firstNonRepeatingCharacter(str: string): number

// Examples:

// firstNonRepeatingCharacter("leetcode") should return 0 because the first non-repeating character is 'l' which is at index 0.
// firstNonRepeatingCharacter("loveleetcode") should return 2 because the first non-repeating character is 'v' which is at index 2.
// firstNonRepeatingCharacter("aabbcc") should return -1 since there is no non-repeating character.
// Constraints:

// You may assume the string contains only lowercase alphabets.
// Solution Outline:
// The candidate should be able to explain that the optimal way to solve this problem involves:

// Counting Characters: First, count how often each character appears in the string. This can be efficiently done using a hashmap (object or Map in JavaScript), where the keys are the characters, and the values are the counts of those characters.
// Identifying the First Unique Character: Traverse the string again, and for each character, use the hashmap to check if its count is 1. The first character with a count of 1 is the answer.

// function firstNonRepeatingCharacter(str) {
//   const charCount = {};

//   // first pass to count each character
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (charCount[char] === undefined) {
//       charCount[char] = 1;
//     } else {
//       charCount[char]++;
//     }
//   }
//   //console.log(charCount);
//   // Second pass to find the first unique character
//   for (let i = 0; i < str.length; i++) {
//     if (charCount[str[i]] === 1) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(firstNonRepeatingCharacter("leetcode")); // Output: 0
// console.log(firstNonRepeatingCharacter("loveleetcode")); // Output: 2
// console.log(firstNonRepeatingCharacter("aabbcc")); // Output: -1

// Question: Implement a function that checks if a given string is a valid palindrome, ignoring case and non-alphanumeric characters.

// Function Signature: function isPalindrome(s: string): boolean

// Examples:

// isPalindrome("A man, a plan, a canal: Panama") should return true because, ignoring non-alphanumeric characters and case, it reads the same forward and backward.
// isPalindrome("race a car") should return false because it does not read the same backward as forward when ignoring non-alphanumeric characters and case.
// isPalindrome(" " ) should return true (an empty string or a string with only spaces is considered a palindrome).
// Constraints:

// Consider only alphanumeric characters and ignore case sensitivity.
// The input string can include characters outside the a-z range.
// Solution Outline:
// The candidate should aim to solve this problem using a two-pointer technique:

//(/[^A-Za-z0-9]/g,"") v.mp
// Normalize the String: Remove all non-alphanumeric characters and convert the string to lower case.
// Two-Pointer Technique: Use two pointers to check for palindrome properties. One pointer starts at the beginning and the other at the end of the string. Move both pointers towards the center, comparing characters for equality.

// function isPalindrome(str) {
//   //normalize the string
//   const cleaned = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//   const str1 = cleaned.split("").reverse().join("");
//   return cleaned === str1;
// }

// function isPalindromeSecond(str) {
//   const cleaned = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//   let left = 0;
//   let right = cleaned.length - 1;
//   while (left < right) {
//     if (cleaned[left] !== cleaned[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(isPalindromeSecond("A man, a plan, a canal: Panama")); // Output: true
// console.log(isPalindromeSecond("race a car")); // Output: false
// console.log(isPalindromeSecond(" ")); // Output: true

//Question: Given an array containing n integers, write a function to move all zeros to the end of it while maintaining the relative order of the non-zero elements.

// Function Signature: function moveZeroes(nums: number[]): void

// Example:

// moveZeroes([0, 1, 0, 3, 12]) should modify the array to [1, 3, 12, 0, 0].
// moveZeroes([4, 2, 0, 1, 0, 3, 0]) should modify the array to [4, 2, 1, 3, 0, 0, 0].
// Constraints:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
// Solution Outline:
// The key to solving this problem is to use a two-pointer technique:

// Fast Pointer: This pointer (i) iterates through the array.
// Slow Pointer: This pointer (lastNonZeroFoundAt) tracks the position of the last non-zero element found.
// Swap Logic: Each time a non-zero is encountered by the fast pointer, it is swapped with the element at the slow pointer's position, and the slow pointer is moved one step ahead.

// function moveZeroes(num) {
//   let lastNonZeroFoundAt = 0;
//   // Move all non-zero values at the beggining of the array
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] !== 0) {
//       num[lastNonZeroFoundAt++] = num[i];
//     }
//   }
//   //lastNonZeroFoundAt become index 3
//   ///console.log(lastNonZeroFoundAt);
//   //Fill the remaning array space with zero
//   for (let i = lastNonZeroFoundAt; i < num.length; i++) {
//     num[i] = 0;
//   }
// }
// const arr = [0, 1, 0, 3, 12];
// moveZeroes(arr);
// console.log(arr); // Output: [1, 3, 12, 0, 0]

//Question: Given an array containing n integers, write a function to revrse the array using swip method;

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 15, 16, 16];

// function reversearr(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
//   return arr;
// }
// console.log(reversearr(arr));
