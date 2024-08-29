const coding = ["js", "ruby", "java", "python", "cpp"]

//coding.forEach( callbackfunction)
//call function does not have name

//forEach( function (){ })

// coding.forEach( function (val){
//     console.log(val);
// } )

//arrow function

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

//we just give the refernece of the function
// coding.forEach(printMe)--> do  not do printMe() as we only give reference(dont call it herer)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )