
var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);

var x = 10;
var y = 20;

console.log(x);
console.log(y);

console.log(x + y);
console.log(50 * x * y);

//Hoisting
m = 50;
var m;
console.log(m);

hello();
function hello() {
  console.log("Welcome");
}

//console.log(section);
//let section="A";

//global scope
let name = "Alice";
function test(){
  console.log(name);
}
test();


//primitive datatype

let studentName = "Seema";
let course = 'MCA';

let address; 

let age = 23;
let marks = 85.5;

let bigNumber = 1234567890123456789012345678901234567890n;

let isStudent = true;
let isPassed = false;

let phoneNumber = null;

let id1 = Symbol("id");
let id2 = Symbol("id");


console.log("String value:", studentName);
console.log("String value:", course);

console.log("Undefined value:", address);

console.log("Number value:", age);
console.log("Number value:", marks);

console.log("BigInt value:", bigNumber);

console.log("Boolean value:", isStudent);
console.log("Boolean value:", isPassed);

console.log("Undefined value:", address);

console.log("Null value:", phoneNumber);

console.log("Symbol value 1:", id1);
console.log("Symbol value 2:", id2);

console.log("Are symbols equal?", id1 === id2);




