type POINT={x:number, y:number}
type P=keyof POINT;// here its same as p:"x"|"y"
//now with index signtures as shown below
type Arrayish={[index:number]:number}
type A=keyof Arrayish// A:number
type Arrayish2={[index:string]:number}
type B=keyof Arayish2// B:number | string
// the last behaviour is coz of how javascript works
