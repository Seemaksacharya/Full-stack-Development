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

//Hoisting with let
console.log(b);
let b=20;
