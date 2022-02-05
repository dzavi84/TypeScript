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

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR,
}

const person = {
  name: 'Milan',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};
let favoriteActivities: string[];
favoriteActivities = ['Sports'];
console.log(person.name);

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
