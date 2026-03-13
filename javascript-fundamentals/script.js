//Var
function test(){
    var a=5;
    a=10;
    console.log(a);
}
test();

 if(true){
    var num= 20;
 }
 console.log("NUM=" +num);

 //let
 if (true) {
    let x =10;
    console.log("x=" +x);
 }
 
 //const
 const pi= 3.14;
 console.log(pi);

//Hoisting with var
console.log(a);//Undefined
var a = 10;


const name ="Seema";
const city= "Tth";
let age=23;
console.log(name);
console.log(age);
console.log(city);

let x = 5;
 x = 10;
console.log(x);

// casing convention
getElementByID //camelCasing
GetType //PascalCasing
array_push//snakecasing
MAX_VALUE//SCREAMING_SNAKE_CASING

//variable scope
 
//Global 
var a=10;
let b=20;
const c=100;