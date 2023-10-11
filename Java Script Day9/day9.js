const square = (number) => number ** 2;

function cube(cb, number) {
  return cb(number) * number;
}

console.log(cube(square, 5));

const numbers = [1, 3, 5, 7, 9];

// * Reduce

console.log(
  numbers.reduce((oldValue, currentValue) => {
    return oldValue + currentValue;
  }, 0)
);

// * forEach

let total = 0;
let calculate = (number, index) => (total += number + index);
numbers.forEach(calculate);

console.log(total);

const numbers2 = numbers.map((number) => number * 2);

// const sayHello = () => {
//   console.log("5 saniye içinde burası temizlenecek.");
// };

// const interval = setInterval(sayHello, 1000);

// const timeout = setTimeout(() => {
//   clearInterval(interval);
//   console.log("temizlendi !");
// }, 5000);
