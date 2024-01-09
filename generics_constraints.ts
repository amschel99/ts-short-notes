function myFunc<Type extends {length:number}>(arr1:Type, arr2:Type):Boolean{

return arr1.length>arr2.length;

}
let arr1=[1,2,3,4];
let arr2=[0,2,3];
console.log(myFunc(arr1,arr2));
