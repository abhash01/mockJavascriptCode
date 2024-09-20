// let num1 = 1;

// function calculate(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(calculate(num1, 3));

function getTotal(numbers) {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(getTotal([1, 3, 4]));
