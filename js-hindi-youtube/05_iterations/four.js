const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//traverse in object

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

//for in loop
// here it store the key
for (const key in programming) {
   // console.log(programming[key]); // ---> as key in loop store the key of array(index) so we can use it to get the value by programming[key]
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// //nothing printed as map (cannot use to iterate in map)

// for (const key in map) { 
//     console.log(key);
// }