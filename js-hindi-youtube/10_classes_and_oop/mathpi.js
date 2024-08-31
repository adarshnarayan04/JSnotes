const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,//if false we can not iterate over name value
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//studied earlier
// for (const [key, value] of myObject) {  --> cannot be used to iterate on object
//     console.log(key, ':-', value);
    
// }

//we can not iterate over object ( so use Object.entries)
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}