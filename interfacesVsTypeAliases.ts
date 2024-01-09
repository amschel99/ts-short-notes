// Interfaces are extendable while Type Aliases are not
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
// Below is how we could try to extend a type alias
type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}
//To add fields in both s different
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}
// the code below won't work
type Window = {
  title: string;
}

type Window = {
  ts: TypeScriptAPI;
}
//type assertions are used when you have information about the type of a value that TypeScript can’t know about.

//For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

//In this situation, you can use a type assertion to specify a more specific type:
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
