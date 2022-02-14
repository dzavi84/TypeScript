"use strict";
var _a;
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
const fetchUserData = {
    id: 'u1',
    name: 'Milan',
    job: { title: 'CEO', description: 'My own company' },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storeData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storeData);
function createCourseGoal(title, description, date) {
    return { title: title, description: description, completeUnion: date };
}
