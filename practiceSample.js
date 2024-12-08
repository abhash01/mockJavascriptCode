// 1. count the number of vowels
//var str = "i am Abhash";

// 2. #1 - DS & Algorithms Course | Sum Zero Problem
// Checking Sum ZERO
// [-5,-4,-3,-2,0,2,4,6,8]
// OUTPUT [-4,4]
// Complexity 0(n)sqaure

// Checking Sum ZERO
// [-5,-4,-3,-2,0,2,4,6,8]
// OUTPUT [-4,4]
// Complexity 0(n) ==> yeah sirf sorted array ke case mai kar kare ga
// yaha pr hum sorted array liye ,
// phir phala aur last ko add kiya agr 0 se jaada hai toh right mai ek index -- kar diye
// agar kum hai toh left se ++ kar diye

//#3 - DS & Algorithms Course | String Anagram Problem
// String Anagram
// 'hello'= 'llheo'
// 'abhash' = 'ashhba'

// condition
// length check(both the string) dono ka length check kar lege
// string 'hello'
// {e: 1,h: 1,l: 2,o: 1}

//#4 - DS & Algorithms Course | Counting Unique Numbers Problem
// Count Unique Numbers
//[1,1,2,2,3,4,4,5,6,7,8,8]
// output 8  // 1 do bar hai count 1 bar hoga same 2 do baar hai but count 1 bar hoga

//Condition
// i =0;j = 1
// array[i] !== array[j]
// 1. i++
// 2. array[i] = array[j]

//#5 - DS & Algorithms Course | Largest Sum of Consecutive Digits
// [1,2,3,4,3,5,4,6,7,8] => total element => 10;
// Count largest sum of consecutive Digit
// num = 4 // kitne consecutive no ko add karega
// sum => 25 // e.g => 4,6,7,8

// condition
// num > array => throw error message
// 10 - 4 + 1 => formula for loop kitne bar chalega

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

//Time Complexity binary 0(log(n))

//#7 - DS & Algorithms Course | Check Square Elements of Another Array
// arr1 = [1,2,3,4] , arr2 = [1,9,4,16] case1
// arr1 = [1,2,4,2] , arr2 = [1,4,4,16] case2

//condition
//map1={1:1,2:2,4:1}
//map2={1:1,4:2,16:1}

// #19 - Find the Maximum Occurring Character in String ? DS & Algorithms Course 🔥
// Find the maximum occuring character in given string ?
// Hello World

// #20 - Check if Given String is Palindrome or not ? DS & Algorithms Course 🔥

// Flatten the arr with recussion

//var arr = [1, [2, 3, 4], [5, 6, 7, [8, 9]]];
