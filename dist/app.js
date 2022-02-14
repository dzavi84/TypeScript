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
