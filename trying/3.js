const potentiallyNullObj = null;
let x = 0;
const prop = potentiallyNullObj?.[x++];
console.log(prop);
console.log(x);