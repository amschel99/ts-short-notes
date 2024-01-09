function map<Input, Output>(arr:Input[], fn:(param:Input)=>Output):Output[]{

 return  arr.map((item:Input)=>{
  return  fn(item);
    
  })
}
