//primitive datatype

let studentName = "Seema";
let course = 'MCA';

let age = 23;
let marks = 85.5;

let bigNumber = 1234567890123456789012345678901234567890n;

let isStudent = true;
let isPassed = false;

let address;

let phoneNumber = null;

let id1 = Symbol("id");
let id2 = Symbol("id");


console.log("String value:", studentName);
console.log("String value:", course);

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


//type of data
console.log("Type of studentName:", typeof studentName);
console.log("Type of age:", typeof age);
console.log("Type of bigNumber:", typeof bigNumber);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of address:", typeof address);
console.log("Type of phoneNumber:", typeof phoneNumber);

console.log("Type of id1:", typeof id1);

