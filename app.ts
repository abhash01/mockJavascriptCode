// let num1 = 1;

// function calculate(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(calculate(num1, 3));

// number[] => Array<number> (generic used)
// function getTotal(numbers: Array<number>) {
//   return numbers.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
// }

// console.log(getTotal([1, 3, 4]));

// const user = {
//   firstName: "john",
//   lastName: "doe",
//   role: "professor",
// };

// console.log(user);

// Type alias

// type User = { // for type alias always start with capital letter; eg  User
//   name: string;
//   age: number;
//   address? : string
// };

// const user : User = {
//   name: 'abhash',
//   age: 123
// }

// Interfaces
interface Transaction {
  payAccountnumber: number;
  payeeAccountnumber: number;
}

interface BankAccount {
  accountnumber: number;
  accountHolder: number;
  balance: number;
  isActive: boolean;
  transaction: Transaction[];
}

// const BankAccount {

// }
