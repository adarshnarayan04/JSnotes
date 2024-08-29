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
    //console.log(programming[key]);  ---> as key store the key of array(index) as it for in loop so key value get assigned
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// nothing printed as map (cannot use to iterate in map)

// for (const key in map) { 
//     console.log(key);
// }