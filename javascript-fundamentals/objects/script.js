let car = {
  brand: "BMW",
  color: "black"
};
console.log(car.brand);

let student = new Object();
student.name = "ram";
student.age = 23;
console.log(student);

student.city = "Mysure";
student.age = 25;
delete student.city;

//constructor function
function User(name,age){
  this.name= name;
  this.age= age;
}
let u1 = new User("John",23);
console.log(u1);

//array of object
let users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 30 }
];

console.log(users[0].name);

//typeof Operator
let a = 10;
const b="seema";
console.log(typeof a);
console.log(typeof b);

//prototype 
let animal = {
  eat(){
    console.log("eat");
  }
};
 
let dog = {};

dog.__proto__ = animal;
dog.eat();

//number
let num = 10.4567;
console.log(num.toFixed(2));
console.log(num.toString());

console.log(parseInt("123"));

console.log(parseFloat("10.55"));

let n = Number("50");
console.log(n);

//string
let text =" Java Script";
console.log(text.length);

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.slice(0,2));
console.log(text.includes("Java"));
console.log(text.replace("Java","Type"));
console.log(text.trim());

let text1 = "Fundamentals";
console.log(text.concat(" ",text1));
console.log(text.charAt(3));
console.log(text.indexOf("a"));
console.log(text.split(""));

//date
let d = new Date();

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());

//math
console.log(Math.random());
console.log(Math.floor(9.8));
console.log(Math.ceil(4.7));
console.log(Math.max(40, 12, 58));
console.log(Math.min(10, 20, 5));
console.log(Math.pow(2, 3));

//error 
let e = 10;
console.log(e);

try {
  let x = y;
} catch (err) {
  console.log(err);
}

//function
function test(){}

test.x = 1000;

console.log(test.x);

//boolean
let boolean = new Boolean(true);

console.log(boolean.toString());

//implicit
let x = "5" + 2;
console.log(x);

let y = "10" - 5;
console.log(y);

let z = true + 1;
console.log(z);

let number = 5 + false;
console.log(number)

//explicit
let p = "45";
let q = Number(p)
console.log(p)

let num1 = 100;
let num2 = String(num1);
console.log(num2);

let a1 = 0;
let a2 = Boolean(a1);
console.log(a2);

let b1 = true;
let b2 = Number(b1);
console.log(b2);

//json to obj
let data = '{"name":"Seema","age":23}';

let obj = JSON.parse(data);

console.log(obj.name);

//obj to json
let object = {
  name: "Seema",
  age: 23
};

let json = JSON.stringify(object);

console.log(json);

let map = new Map();
 map.set("name","seema");
 console.log(map.get("name"));

 //map 
let map = new Map();
map.set("name","seema");
console.log(map.get("name"));
map.has("name");
map.delete("name");
map.clear(); 
map.size; 

//weakmap
let weakmap =new Weakmap();
let obj1 ={};
let weakMap = new WeakMap();
weakMap.set(obj1, "User Data");
console.log(weakMap.get(obj1));
console.log(weakMap.has(obj1));
weakMap.delete(obj1);

//set
let set = new Set();
set.add(1);
set.add(2);
set.add(2); 

console.log(set);
console.log(set.size);
console.log(set.has(1)); 
set.delete(1);
set.clear();

//weakset
let ws = new WeakSet();
let u1 = {name : "Seema"};
let u2 = {name : "Sam"};
c
ws.add(u1);
ws.add(u2);

console.log(ws.get(u1));
ws.delete(u2);
console.log(ws.has(u2));
 
//Array
let fruits = ["apple","mango","banana"];
console.log(fruits[2]);