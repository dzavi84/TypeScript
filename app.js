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
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Milan',
    age: 38,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
