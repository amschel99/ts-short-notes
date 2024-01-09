

// For primitives, we can use typeof.
{/*

typeof null gives "object" which is an unexpected behavior
TypeScript expects this to return a certain set of strings:

"string"
"number"
"bigint"
"boolean"
"symbol"
"undefined"
"object"
"function"
*/}

//for stuff like Arrays, objects , Dates or anything created using new keyword, we can use instanceof
if (x instanceof Date){
  //do something cool
}
//in operator narrowing
//JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the in operator. 
//TypeScript takes this into account as a way to narrow down potential types.
type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}
//To reiterate, optional properties will exist in both sides for narrowing. 
 // For example, a human could both swim and fly (with the right equipment) and thus should show up in both sides of the in check:

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    //animal here is of type Human | Fish
    animal;

  } else {
    //animal here is of type Human | Bird
    animal;
      

  }
}
//Type Predicates
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
if (isFish(getSmallPet())) {
  pet.swim();
} else {
  pet.fly();
}



// Define a discriminated union type
type Shape = Square | Circle;

// Define types for each shape
interface Square {
  kind: "square";
  sideLength: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

// Function that works with the discriminated union
function calculateArea(shape: Shape): number {
  // Use a switch statement based on the discriminant property 'kind'
  switch (shape.kind) {
    // If the shape is a square
    case "square":
      // TypeScript knows that shape is of type Square here
      return shape.sideLength ** 2;

    // If the shape is a circle
    case "circle":
      // TypeScript knows that shape is of type Circle here
      return Math.PI * shape.radius ** 2;
  }
}

// Example usage
const square: Shape = { kind: "square", sideLength: 5 };
const circle: Shape = { kind: "circle", radius: 3 };

// Call the function with different shapes
console.log(calculateArea(square)); // Output: 25
console.log(calculateArea(circle)); // Output: ~28.27
