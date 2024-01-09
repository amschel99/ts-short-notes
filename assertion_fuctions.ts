function assert(condition:any, msg?:string): asserts condition{
if(!condition){
  throw new AssertionError(msg);
}
  
}
// the above function can  be used a typeguard to narrow our types eg
function yell(str){
  assert(typeof str ==="string");
  //here onwards, typescript treats str as a string
  str.toUppercase();// causes an error cause typescript knows nothing like that exists on strings
  //it should be to UpperCase()

  
}
