let Element = document.querySelector("box")
console.log(box);

let Element = document.querySelector("box")
console.log(box);

//
const person = {
  name: "Seema",
  greet: function() {
    console.log(this.name);
  }
};

person.greet();

console.log(this);

function show() {
  console.log(this);
}

show();

"use strict";

function show() {
  console.log(this);
}

show();

const person = {
  name: "Seema"
};

function greet() {
  console.log(this.name);
}

greet.call(person);

greet.apply(person);

const newGreet = greet.bind(person);
newGreet();
