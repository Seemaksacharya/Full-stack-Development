
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
 
 //throw
 try {
    throw new Error("Something went wrong");
} catch (err) {
    console.log(err.message);
}

//conditional operator
let number = 7;

let check = number % 2 === 0 ? "Even" : "Odd";

console.log(check);

let num = -5;

//comma operator
let x=(2+3,2*5);
console.log(x);

let a=1;
let b=2;
let result=(a++,b++,a+b);

console.log(result);

//Unary Operator
//+
let x="10";
console.log(+x);

//-
let y="10";
console.log(-x);

//++
let z=5;
z++;
console.log(z);

//--
let m=100;
m--;
console.log(m);

//!
let n=true;
console.log(!n);

//typeof
let name = "Seema";

console.log(typeof name);

//assignment operator
let x = 5;
x += 3;

console.log(x);

let x = 10;
x -= 4;

console.log(x);

//Arithmetic Operators
let a = 10;
let b = 5;

console.log(a + b); 
console.log(a - b);
console.log(a * b); 
console.log(a / b); 
console.log(a % b); 
console.log(a ** 2); 

//comparison operator
console.log(5 == "5");
console.log(5 === "5");
console.log(10 > 5);
console.log(3 <= 5);

//logical
let age = 20;

console.log(age > 18 && age < 30);
console.log(age < 18 || age > 10);
console.log(!(age > 18));

//function

function greet(name){
  if(name== undefined){
    name="Guest";
  }
  console.log("Hello"+name);
}
greet();
greet(Seema);

//

//global scope
let name= "Seema";

function show(){
  console.log(name);
}
show();

//local scope
function test(){
  let age=25;
  console.log(age);
}
test();
console.log(test);

//function stack
function first(){
  console.log("First");
}

function second(){
  first();
  console.log("Second");
}
second();

//function stack
let x = 10; 

function A() {
   let y = 20; 
   B();
}

function B() {
   console.log(x);
}

A();

//recurssion 
function count(n){
  if(n==0){
    return;
  }
  console.log(n);
  count(n-1);
}
count(10);

//