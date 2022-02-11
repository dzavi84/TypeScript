interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;
  nickname: string;

  constructor(n: string, nik: string) {
    this.name = n;
    this.nickname = nik;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Milan', 'Vidza');

user1.greet('Hi there - I am');

console.log(user1);
