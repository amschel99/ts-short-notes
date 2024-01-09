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
