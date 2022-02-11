"use strict";
class Person {
    constructor(n, nik) {
        this.age = 30;
        this.name = n;
        this.nickname = nik;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Milan', 'Vidza');
user1.greet('Hi there - I am');
console.log(user1);
