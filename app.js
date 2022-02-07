function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
printResult(add(5, 12));
// let someValue: undefined;
var combineValues;
combineValues = add;
// combineValues = 5;
// combineValues = printResult;
console.log(combineValues(8, 8));
