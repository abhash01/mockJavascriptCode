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
