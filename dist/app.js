"use strict";
// const names: Array<string> = [];
// // names[0].split(' ');
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });
// promise.then((data) => {
//   data.split(' ');
// });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// console.log(merge({ name: 'Milan' }, { age: 37 }));
const mergedObj = merge({ name: 'Milan', hobbies: ['sport'] }, { age: 37 });
const mergedObj2 = merge({ name: 'Milan' }, { age: 37 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: 'Milan' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Milan');
textStorage.addItem('Ana');
textStorage.removeItem('Milan');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(12);
numberStorage.addItem('Vidanovic');
console.log(numberStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Milan', 'Anna'];
// names.push('Nikolina');
// names.pop();
