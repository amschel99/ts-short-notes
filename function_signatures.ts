type customFunction = {
  description: string;
  (someArg: number): number;
};

function callAnotherFunction(fn: customFunction) {
  console.log(`${fn.description} returned ${fn(2)}`);
}

function print2(a: number) {
  return a;
}

print2.description = "A function that returns 2";
callAnotherFunction(print2);
