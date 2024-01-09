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



