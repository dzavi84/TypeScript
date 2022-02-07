"use strict";
// const person: {
//   name: string;
//   age: number;
// } =
// const person = {
//   name: 'Milan',
//   age: 38,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Milan',
    age: 38,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR,
};
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
