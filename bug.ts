function printNumber(num: number): void {
  console.log(num);
}

const myNumber: unknown = 10;

// This will throw an error because TypeScript doesn't know that myNumber is a number
printNumber(myNumber);