// here is a really useful case for generic constraints
function getProp<T, KEY extends keyof T>(obj:T, key:KEY){
return obj[key];  
}
let x={a:1,b:2, c:3};
console.log(getProp(x,"a"));// works
console.log(getProp(x, "f"));// does not work since f is not a key in x

