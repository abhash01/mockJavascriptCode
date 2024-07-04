//1. Checking Sum zero
//[-5,-4,-3,-2,0,2,4,6,8] -> inpout
// [-4,4] -> output
//rough task

//Check if the user with such name Exits;
const user = [
  {
    id: 1,
    name: "abhash",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "test1",
    isActive: true,
    age: 19,
  },
  {
    id: 3,
    name: "test2",
    isActive: true,
    age: 26,
  },
  {
    id: 4,
    name: "test3",
    isActive: false,
    age: 28,
  },
];

// -- Check if the user with such name Exits -- //
function isUserExist(name, user) {
  let exits = false;
  for (let i = 0; i < user.length; i++) {
    if (user[i].name === name) {
      exits = true;
    }
  }
  return exits;
  //if(user)
}

//const res = isUserExist("test4",user);
//console.log(res)
// pbl 2 solution

const isNameExits = (name, users) => {
  const user = users.find((user) => user.name === name);
  return Boolean(user);
};
console.log(isNameExits("test2", user));

// pbl 3 solution
const isNameExt = (name, user) => {
  const result = user.findIndex((user) => user.name === name);
  return result >= 0;
};
console.log(isNameExt("test2", user));

// pbl 4 solution
const isNameExitSome = (name, users) => {
  const user = users.some((user) => user.name === name); // some method retun boolean value
  return user;
};
console.log(isNameExitSome("test4", user));

// -- Adding Element to the Array -- //

let arr = [1, 2];

const append = (arr, ele) => {
  //push method returns the new length of the array.
  // it modified the array
  arr.push(ele);
  return arr;
};
console.log(append(arr, 4)); // [1, 2, 4]
console.log(arr); // [1, 2, 4]

const newarray = (arr, ele) => {
  return [...arr, ele];
};
console.log(newarray(arr, 5)); // [1, 2, 5]
console.log(arr); // [1, 2]

// -- Remove the duplicate Element in the Array -- //

// The Set is a built-in JavaScript data structure that allow yo to store unique values of any
// The Spread operator is used to expand the array into individual argument;
// the includes method is used to check if it already exits in the uniqueElement array.
// In JavaScript, the includes() method is used to determine whether an array or string contains a certain element or substring, returning true or false accordingly.
// let fruits = ['apple', 'banana', 'mango'];
// let hasBanana = fruits.includes('banana'); // returns true

// let sentence = 'The quick brown fox jumps over the lazy dog';
// let hasFox = sentence.includes('fox'); // returns true

//pblm 1 solution;
const arra = [1, 1, 2, 3, 8, 9, 3, 4, 4, 5, 9, 6, 7, 7, 7, 7, 8];
const uniqueArr = (arr) => {
  let count = [];
  arr.filter((ele) => {
    if (!count.includes(ele)) {
      count.push(ele);
    }
  });
  return count;
};

console.log(uniqueArr(arra));

const arrU = [1, 1, 2, 3, 8, 9, 3, 4, 4, 5, 9, 6, 7, 7, 7, 7, 8];
const uniqueArrSet = (arr) => {
  return [...new Set(arr)];
};

console.log(uniqueArrSet(arrU));

//level 3
const arrReduce = [1, 1, 2, 3, 8, 9, 3, 4, 4, 5, 9, 6, 7, 7, 7, 7, 8];
const uniqueArrRed = (arr) => {
  return arr.reduce((acc, ele) => {
    return acc.includes(ele) ? acc : [...acc, ele];
  }, []);
};

console.log(uniqueArrRed(arrReduce));

// -- Concatenating the Array  -- //

const arr1 = [1, 1, 2, 3];
const arr2 = [4, 5, 7, 8, 9];
const addarr = (arr1, arr2) => {
  return [...arr1, ...arr2];
  //return arr1.concat(...arr2)
  // arr1.push(...arr2)
};
// spread operation dont modified the original array;
console.log(addarr(arr1, arr2));
