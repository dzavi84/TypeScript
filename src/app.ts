const userName = 'Milan';
// userName = 'Milance';
let age = 30;

age = 28;

function add(a: number, b: number) {
  var result;

  result = a + b;
  return result;
}

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add(7, 4));
