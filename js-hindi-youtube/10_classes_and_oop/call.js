function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   //SetUsername.(username) will be called but it will set this value in its execution context
   // after the function is executed the this value will be lost as execution context is destroyed
   //by call we pass the this value of createUser to setUsername
   // now it set value in createUser object
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);