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

//constructor
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

//builtin objects
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