// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//he have to close it otherwise next line code wll give problem(so have to end)

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
//unamed iife (use arrow function in iife)
