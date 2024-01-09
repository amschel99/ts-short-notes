function map<Input, Output>(arr:Input[], fn:(param:Input)=>Output):Output[]{

 return  arr.map((item:Input)=>{
  return  fn(item);
    
  })
}
function by2(val:number){
return val*2;
}
const nums=[0,1,2,3,4,5];
console.log(map(nums, by2));
