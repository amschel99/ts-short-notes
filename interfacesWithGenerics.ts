interface Box<T>{
  contents:T;
}
//Now we can use the above like, 
let box:Box<string>;

//This also means that we can avoid overloads entirely by instead using generic functions.

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}
//Array is a generic type
//when we write sth like number[], basicall what's going on is Array<number>

//we also have readoly arrays which cannot be mutated
ReadonlyArray<string>
  //there is no constructor for read only arrays like we have for arrays i.e new Array(1,2,3);
  
  readonly string[] is also very valid
//youTuple Types
//A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

type StringNumberPair = [string, number];

//Here, StringNumberPair is a tuple type of string and number.
//Like ReadonlyArray, it has no representation at runtime, but is significant to TypeScript. 
//To the type system, StringNumberPair describes arrays whose 0 index contains a string and whose 1 index contains a number.

function doSomething(pair: [string, number]) {
  const a = pair[0];
       
//const a: string
  const b = pair[1];
       
//const b: number
  // ...
}
 
doSomething(["hello", 42]); cannot assign readonly arrays to normal arrays ad vice versa
