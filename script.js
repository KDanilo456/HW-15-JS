let nums = [1,2,3,4,5];

let totalNums = nums.reduce((total,num) => total + num,0);
console.log(totalNums);

let numOperation = nums.reduce((acc,num) => acc * num,1)
console.log(numOperation);

let maxNum = nums.reduce((max,num) => {
  if (max < num) {
    max = num;
  }
  return max;
},nums[0]);
console.log(maxNum);

let pairNums = nums.reduce((arr,num) => {
  if (num % 2 === 0) {
    arr.push(num);
  }
  return arr;
},[]);
console.log(`парних чисел: ${pairNums.length}`);

const cart = [{price: 20, qty: 2}, {price: 5, qty: 4}];

let totalPrice = cart.reduce((arr,product) => {
  arr.push(product.price * product.qty);
  return arr;
},[]);
console.log(totalPrice);

let words = ['hello','world'];
let wordsReduce = words.reduce((acc,word) => `${acc + word} `,'');
console.log(wordsReduce);

let fruits = ["apple", "banana", "apple", "orange", "banana"];
let fruitsCount = fruits.reduce((acc,fruit) => {
  if (!acc.hasOwnProperty(fruit)) {
    acc[fruit] = 0;
  }

  acc[fruit] ++;

  return acc
},{});
console.log(fruitsCount);