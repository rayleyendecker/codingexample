"use strict"

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    console.log(this.name);
}

let p = new Person("Ray");
p.getName();

let a = [1,2,3,"Ray"];
a.forEach(item => console.log(item));
let b = a.map(item => item + "Ray");
console.log(b);
console.log(a);

class Man { 
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(this.name);
    }
}

class Boy extends Man {
    constructor(name,age) {
        super(name);
        this.age = age;
    }

    hello() {
        super.hello();
        console.log(this.age);
    }
}

let m = new Man("RAYMOND");
m.hello();

let boy = new Boy("Jess",55);
boy.hello();

function Node(next,prev) {
    this.next = next;
    this.prev = prev;
    this.toString = function() {
        console.log(next + " " + prev);
    }
}

function reverseString(s) {
    let a = s.split('').reverse().join('');
    console.log(a);
}

reverseString("RAY");

function myReverseString(s) {
    let v = "";
    for (let char of s) {
        v = char + v;
    }
    console.log(v);
}

myReverseString("RAY");

let arr = [1,2,3,4,5];
let r = arr.filter(item => item > 3);
console.log(r);


