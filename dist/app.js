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
function printEmployeeInfo(emp) {
    if ('privileges' in emp) {
        console.log('Privileges:' + emp.privileges);
    }
    if ('privileges' in emp) {
        console.log('Name' + emp.name);
    }
}
printEmployeeInfo(e1);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a Truck...');
    }
    loadCargo(amoung) {
        console.log('Loading cargo' + amoung);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
