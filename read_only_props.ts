//Properties can also be marked as readonly for TypeScript.
 // While it won’t change any behavior at runtime, a property marked as readonly can’t be written to during type-checking.

interface SomeType {
  readonly prop: string;
}
 
function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
 
  // But we can't re-assign it.
  obj.prop = "hello";
//Cannot assign to 'prop' because it is a read-only property.
}
//howeer the internal contents can be changed as shown below
interface Home {
  readonly resident: { name: string; age: number };
}
 
function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}
