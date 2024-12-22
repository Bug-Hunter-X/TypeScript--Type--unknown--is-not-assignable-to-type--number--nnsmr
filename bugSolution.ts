function printNumber(num: number): void {
  console.log(num);
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

const myNumber: unknown = 10;

if (isNumber(myNumber)) {
  printNumber(myNumber);
} else {
  console.log('The value is not a number');
}

const myString: unknown = "hello";
if (isNumber(myString)) {
  printNumber(myString);
} else {
  console.log('The value is not a number');
}