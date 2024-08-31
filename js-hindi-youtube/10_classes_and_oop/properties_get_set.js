function User(email, password){
    this._email = email;//best way  use _email and _password
    this._password = password

    Object.defineProperty(this, 'email', {//it is object
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")
console.log(chai);

console.log(chai.email);//cahi.email call the setter function

//other way alsso usign this.email and this.password(correct way)
//position of this.email and this.password changed to down

// function User(email, password) {
//     Object.defineProperty(this, 'email', {
//         get: function() {
//             return this._email.toUpperCase();
//         },
//         set: function(value) {
//             this._email = value;
//         }
//     });

//     Object.defineProperty(this, 'password', {
//         get: function() {
//             return this._password.toUpperCase();
//         },
//         set: function(value) {
//             this._password = value;
//         }
//     });

//     this.email = email; // Now these assignments will use the defined setters
//     this.password = password;
// }

// const chai = new User("chai@chai.com", "chai");

// console.log(chai.email); 

//when use this.email  and this.password --> give error
//so have to chage its position to down (as it is func will go line by line not like class that constructor fucn get called)
//se if this written then function doesnt know about getter and setter so it will give error (as _email and _password not get intialized) when we intialize the object by new --> as getter and setter now get called
//but when we use chai.email it acces the getter method but _email is not intialized so it will give error

//so by writing down we can avoid this error
// as now this.email will call the setter method and _email will get intialized

// The code is giving an error because the properties this.email and this.password are being set before the Object.defineProperty calls, 
//which means the initial assignments are not using the defined setters. As a result, this._email and this._password are not initialized, leading to an error when the getters try to access them.

// To fix this, you should define the properties using Object.defineProperty before assigning the values to this.email and this.password.