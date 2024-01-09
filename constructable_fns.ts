type someObject=any;
type someConstructor={
  new (s:string):someObject;
}

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
//classes 
class Person {
  // Constructor with public keyword for automatic assignment
  constructor(public firstName: string, public lastName: string, public age: number) {}

  // Method to display information
  displayInfo() {
    console.log(`Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`);
  }
}

// Creating an instance of the Person class
const person1 = new Person("John", "Doe", 25);

// Displaying information using the class method
person1.displayInfo();
