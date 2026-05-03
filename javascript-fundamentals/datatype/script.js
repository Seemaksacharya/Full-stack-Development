
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

//for
for( i=0; i<5; i++){
  console.log (i);
}

//while
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

//for of
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}

let name = "Seema";

for (let char of name) {
    console.log(char);
}

//do while
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 3);

//for in
let arr = [10, 20, 30];

for (let index in arr) {
    console.log(index);       
    console.log(arr[index]);  
}

//break

for(i=0;i<5;i++){
  if(i==3){
   break;
  }
  console.log(i);
}

//continue
 for(j=0;j<5;j++){
  if(j==2){
    continue;
  }
  console.log(j);
 }

 //if 
 let age= 18;

 if(age >=18){
  console.log("eligible");
 }
 else{
  console.log("not eligible");
 }

 //else if
let age= 18;

if(age ==18){
  console.log("eligible");
 }else if(age>18){
  console.log("eligible");
 }
 else{
  console.log("not eligible");
 }

 //switch
 let day=2;

 switch(day){
  case 1 :
    console.log("Monaday");
    break;
  case 2 :
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day")
 }

 //exception
 try{
  let result = x+5;
 }
 catch(error){
   console.log("Something went wrong");
 }
 
 //example
 