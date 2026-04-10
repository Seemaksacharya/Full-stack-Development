let arr = [1, "hello", true];

let fruits = ["apple","babana","mango"];
console.log(fruits);

console.log(fruits[0]);

console.log(fruits.length);

fruits.push("kiwi");
console.log(fruits);

fruits.unshift("pineapple");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits[1] = "grapes";
console.log(fruits);

console.log(fruits.includes("orange"));

console.log(fruits.indexOf("mango"));


let sub = ["Maths", "Hindi", "english"];
let upper = sub.map(f => f.toUpperCase());
console.log(upper);

let longNames = sub.filter(f => f.length > 5);
console.log(longNames);

let part = sub.slice(1, 2);
console.log(part);

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);