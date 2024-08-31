const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    // here this is { } as it is node adn we are inside a function
    //if we inside the object method then this will be the object
     this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}


const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

//if dont use new keyword then useone value will be override by userTwo

//new keyword
// 1st it create a empty object
// 2nd constructor function is called 
// 3rd value is get injected in this 
// 4th return this 

console.log(userOne.constructor);
//console.log(userTwo);