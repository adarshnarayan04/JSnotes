const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

//if use { } mean uou stated the scope so have to use return statement

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return(should be one line)

// const addTwo = (num1, num2) =>  num1 + num2-----> { } not used so return can not be also used

// if multiples line then have to use { }


//if use ( ) no need of return

// const addTwo = (num1, num2) => ( num1 + num2 )

//to return object wrap in parathethesis ( )
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()