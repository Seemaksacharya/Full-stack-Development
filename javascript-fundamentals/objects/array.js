//Array
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

//Typed array
let marks = new Uint8Array([45, 60, 75, 90]);

console.log("Original Marks:", marks);


console.log("First Mark:", marks[0]);


marks[1] = 80;
console.log("Updated Marks:", marks);


console.log("Length:", marks.length);

//equality comparison
let a = 5;
let b = "5";
let c = NaN;

console.log(a == b);          
console.log(a === b);         
console.log(Object.is(c, NaN));
