"use strict";
// interface ElevetedEmployee extends Admin, Employee {}
const e1 = {
    name: 'Milan',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Milan', 1);
result.split(' ');
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInfo(emp: UnknownEmployee) {
//   if ('privileges' in emp) {
//     console.log('Privileges:' + emp.privileges);
//   }
//   if ('privileges' in emp) {
//     console.log('Name' + emp.name);
//   }
// }
// printEmployeeInfo(e1);
// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }
// class Truck {
//   drive() {
//     console.log('Driving a Truck...');
//   }
//   loadCargo(amoung: number) {
//     console.log('Loading cargo' + amoung);
//   }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }
// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//   }
//   console.log('Moving at Speed:' + speed);
// }
// moveAnimal({ type: 'bird', flyingSpeed: 10 });
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById(
//   'user-input'
// )! as HTMLInputElement;
// userInputElement.value = 'Hi there';
// interface ErrorContainer {
//   [prop: string]: string;
// }
// const errorBug: ErrorContainer = {
//   email: 'Not a valid email',
//   username: 'Must start with a capital character',
// };
