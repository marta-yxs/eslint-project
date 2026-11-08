var x = 10;                 
let y = 20;                 
const temp = x + y;         

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

console.log(add(2, 3));     

let count = 5;
console.log(count);              

if (x < y) {
  console.log('always');
}

console.log(temp, sub, mul, div);