function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
@Logger('LOGGING-PERSON')
class Person {
  name = 'Milan';

  constructor() {
    console.log('Creating person obj...');
  }
}

const pers = new Person();
console.log(pers);
