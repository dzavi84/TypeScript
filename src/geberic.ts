// // const names: Array<string> = [];

// // // names[0].split(' ');

// // const promise: Promise<string> = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve('This is done!');
// //   }, 2000);
// // });

// // promise.then((data) => {
// //   data.split(' ');
// // });

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// // console.log(merge({ name: 'Milan' }, { age: 37 }));

// const mergedObj = merge({ name: 'Milan', hobbies: ['sport'] }, { age: 37 });
// const mergedObj2 = merge({ name: 'Milan' }, { age: 37 });
// console.log(mergedObj.age);

// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = 'Got no value';
//   if (element.length === 1) {
//     descriptionText = 'Got 1 element.';
//   } else if (element.length > 0) {
//     descriptionText = 'Got ' + element.length + ' elements.';
//   }
//   return [element, descriptionText];
// }

// console.log(countAndDescribe('Hi there!'));

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return obj[key];
// }
// extractAndConvert({ name: 'Milan' }, 'name');

// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }
//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Milan');
// textStorage.addItem('Ana');
// textStorage.removeItem('Milan');
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number | string>();
// numberStorage.addItem(12);
// numberStorage.addItem('Vidanovic');
// console.log(numberStorage.getItems());

// // const objStorage = new DataStorage<object>();

// // objStorage.addItem({ name: 'Milan' });
// // objStorage.addItem({ name: 'Ana' });

// // objStorage.removeItem({ name: 'Ana' });

// // console.log(objStorage.getItems());

// interface CourseGoal {
//   title: string;
//   description: string;
//   completeUntil: Date;
// }

// function createCourseGoal(
//   title: string,
//   description: string,
//   date: Date
// ): CourseGoal {
//   let courseGoal: Partial<CourseGoal> = {};
//   courseGoal.title = title;
//   courseGoal.description = description;
//   courseGoal.completeUntil = date;
//   return courseGoal as CourseGoal;
// }

// const names: Readonly<string[]> = ['Milan', 'Anna'];
// // names.push('Nikolina');
// // names.pop();
