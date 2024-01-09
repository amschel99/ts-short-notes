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
