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
//the syntax is slightly different compared to a function type expression - use : between the parameter list and the return type rather than =>.
