let dishes = ["biryani", "chat", "daal"];
//console.log((dishes[2] = "rice"));

// for (let i = 0; i < dishes.length; i++) {
//   console.log(dishes[i]);
// }
// for (let i = dishes.length - 1; i >= 0; i--) {
//   console.log(dishes[i]);
// }
// let i = 0;
// while (i < dishes.length) {
//   console.log("while loop", dishes[i]);
//   i++;
// }
// let calage = function (birth, curr = 2023) {
//   let age = curr - birth;
//   return age;
// };
// console.log(calage(1991));
// let calage = (birth, curr = 2023) => curr - birth;
// console.log(calage(1992));

// var talk = (fn) => {
//   return fn();
// };

// var sayHi = () => {
//   console.log("hello");
// };

// talk(sayHi);

// let dish = ["apple", "orange", "mango", "banana"];
// dish.forEach(function (element) {
//   console.log(element);
// });
// let data = [
//   { user: "abhash", play: "cricket" },
//   { user: "aman", play: "carom" },
// ];

// for (let i = 0; i < data.length; i++) {
//   console.log(`hey ${data[i].user} play ${data[i].play}`);
// }

// let num = 9.5;
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// let arr = [1, 2, 3, 4, 5];
// let getRef = arr;
// getRef[4] = 9;

// console.log("original", arr);
// console.log("getRef", getRef);
// console.log(arr == getRef);

// let getValue = [...arr];
// getValue[0] = 9;
// console.log("original", arr);
// console.log("getRef", getValue);
// console.log(arr == getValue);

// let car = {
//   model: 2026,
//   color: "black",
//   company: "Honda",
// };

// for (let key in car) {
//   console.log(car[key]);
// }
// let name = {
//   firstName: "abhash",
//   lastName: "Ranjan",
// };
// let printfulName = function (home, city) {
//   console.log(`${this.firstName} ${this.lastName} stay in ${home} ${city}`);
// };
// printfulName.call(name, "bihar", "patna");
// printfulName.apply(name, ["bihar", "patna"]);
// let name2 = {
//   firstName: "Aman",
//   lastName: "Deep",
// };
// printfulName.call(name2, "karnataka", "bangalore");
// printfulName.apply(name2, ["karnataka", "bangalore"]);

//Promise
// const p1 = new Promise((resolve, reject) => {
//   //setTimeout(() => resolve("p1 sucess"), 3000);
//   setTimeout(() => reject("p1 fail"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   //setTimeout(() => resolve("p2 sucess"), 2000);
//   setTimeout(() => reject("p2 fail"), 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   //setTimeout(() => resolve("p3 sucess"), 5000);
//   setTimeout(() => reject("p3 fail"), 5000);
// });
// Promise.any([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err.errors));

// console.log("meassage no 1:Sync");
// setTimeout(function () {
//   console.log("messaage no 2:setTimeout");
// }, 0);

// var promise = new Promise(function (resolve, reject) {
//   resolve();
// });
// promise
//   .then(function (resolve) {
//     console.log("messaage no 3: 1st promise");
//   })
//   .then(function (resolve) {
//     console.log("messaage no 4: 2st promise");
//   });
// console.log("message no 5:sync");

//ANS
// meassage no 1:Sync
// message no 5:
// messaage no 3: 1st promise
// messaage no 4: 2st promise
// imessaage no 2:setTimeout

//Shallow Copy and Deep Copy

// let obj = {
//   firstname: "abhash",
//   lastname: "ranjan",
//   address: {
//     city: "patna",
//     state: "Bihar",
//   },
//   getData: () => {
//     return "all data is here";
//   },
// };

// 1. Objects are copied by reference and variables by value.
//let user = obj;
//user.firstname = "dada";
// console.log(obj);   // {firstname: 'dada', lastname: 'ranjan'}
// console.log(user);  // {firstname: 'dada', lastname: 'ranjan'}

// // 2. To copy objects by value:
// // ==>Object.assign({}, obj)
// // ==>{...obj}
//let user = Object.assign({}, obj);
// user.firstname = "dada";
// console.log(obj);  //{firstname: 'abhash', lastname: 'ranjan'}
// console.log(user); //{firstname: 'dada', lastname: 'ranjan'}

// let user = { ...obj }; spread operator
// user.firstname = "dada";
// console.log(obj); //{firstname: 'abhash', lastname: 'ranjan'}
// console.log(user); //{firstname: 'dada', lastname: 'ranjan'}

// // 3. The above method is shallow copy. It copies only top-level fields.
// // 4. To copy nested objects, deep copy comes into picture.
// // ==>JSON.parse(JSON.stringyfy(obj));

// let user = JSON.parse(JSON.stringify(obj));
// user.address.city = "kolkata";

// console.log(obj);
// console.log(user);

// 5. But the above doesn’t copy functions and dates. So, loadash is used.

// let user = _.cloneDeep(obj);
// // user.address.city = "kolkata";

// // console.log(obj);
// // console.log(user);
