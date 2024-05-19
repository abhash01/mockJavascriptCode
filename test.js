// 1. const str = "This is JavaScipt Code";
// // please reverse the string "sihT si tpircSavaJ edoC"

// const arrOfStr = str.split(" ");
// const reversStr = arrOfStr.map((item) => {
//   return item.split("").reverse().join("");
// });
// console.log(reversStr.join(" "));

// javasript built in method
// const output = str.split("").reverse().join("");
// const reverseoutput = output.split(" ").reverse().join(" ");
// console.log(reverseoutput);

var arr1 = [4, 8, 10, 9, 5];
var arr2 = [5, 10, 8, 9, 4];
var arr3 = [5, 10, 8, 9, 4];
console.log(arr1.toString());
console.log(JSON.stringify(arr3) === JSON.stringify(arr2));
console.log(JSON.stringify(arr2));
const result = (arr1, aar2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      console.log(arr1.indexOf(i) !== arr2.indexOf(i));
    }

    //if(arr1.indexOf())
  }
};
console.log(result(arr1, arr2));
