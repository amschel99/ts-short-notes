interface trans{
  [index:string]:number
}
let key="transId";
let myTrans:trans={
  serialNumber:2
};
myTrans[key]=1;
console.log(myTrans);
// if we did this like below, it would not work beause of let key="transId"
interface trans{
 serialNumber:number,
  transId:number
}
let key="transId";
let myTrans:trans={
  serialNumber:2
};
myTrans[key]=1;
console.log(myTrans);
// the code below will not work coz if we got and index like [index:string]:number then all the fields must be of type number
interface NumberDictionary {
  [index: string]: number;
 
  length: number; // ok
  name: string;
//Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}

// we can fix the error aboe by using union, so the code below works fine
interface NumberDictionary {
  [index: string]: number | string;
 
  length: number; // ok
  name: string;

}
//Excess property checks


interface SquareConfig {
  color?: string;
  width?: number;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
 
let mySquare = createSquare({ colour: "red", width: 100 });// there is an error here coz colour is not in interface SquareConfig
//this happens due to excess propert checks
//First way to resolve this would be 
let sqOptions={ colour: "red", width: 100 };
createSquare(sqOptions);
//the above works sine excess property check is not done on sqOptions. But for this to work sqOptions should hae one propert present in the interface and in 
//case that was width
// second way and recommended is to define the interface like this
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
// the interface can have any properties of any type in addition to color and width

