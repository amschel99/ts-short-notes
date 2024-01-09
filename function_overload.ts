function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
// The above 2 are overload  signatures and below we have the implementation signature
//oerload signatures must be compatible with implementation signatures


function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
//nb we cannot call makeDate with 2 args
