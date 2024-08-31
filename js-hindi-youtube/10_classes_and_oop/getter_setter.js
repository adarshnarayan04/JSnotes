// get and set exsist in pair in javascript
//can not use only getter or setter

//we can have any name of getter and setter

// Create an object:
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() {
//       return this.language;
//     }
//   };
  
//   // Display data from the object using a getter:
//   document.getElementById("demo").innerHTML = person.lang; //calling the getter method we don ise lang() we use lang the js automatically understand it is getter method

class User {
    constructor(email, password){
        //bad way
        this.email = email;//this.email calls the function ( email is an function not a variable) --> so it calls the setter method
        this.password = password

        //can also use this way(both are same) ---> this way is better(no confusion of email and _email)
        // in this way getter  and setter will not be called as we dont use this.email
        //only get called whe we use hitesh.email or hitesh.password as now getter get called

        // this._email = email;
        // this._password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        //console.log('hello');//for checkign when setter is getting called
        
        this._email = value//here we use this._email now setter will not be called as we not setting email value
        // thus we can avoid infinite recursion
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh);//in the object we can see _email and _password as the variable and email and passowrd are function (getter and setter)
console.log(hitesh.email);
hitesh.email="helloword"; // it will call the setter method
console.log(hitesh.email);//it call the getter method



// Instantiation:

// const hitesh = new User("h@hitesh.ai", "abc"):
// Calls the constructor constructor(email, password).
// Inside the constructor:
// this.email = email triggers the set email(value) method, setting _email to "h@hitesh.ai".
// this.password = password triggers the set password(value) method, setting _password to "abc".
// Logging the email:

// console.log(hitesh.email):
// Accessing hitesh.email triggers the get email() method.
// The getter returns _email.toUpperCase(), which is "H@HITESH.AI".


//problem code(go infinit recursion)

// class User {
//     constructor(email, password){
//         this.email = email; // this.email calls the setter method
//         this.password = password;
//     }

//     get email(){
//         return this.email.toUpperCase(); 
//     }
//     set email(value){
//         this.email = value; //here also we call this.email so it also setter method and it will go in infinite recursion
//     }

//     get password(){
//         return `${this.password}hitesh`;
//     }

//     set password(value){
//         this.password = value;
//     }
// }

// const hitesh = new User("h@hitesh.ai", "abc");
// console.log(hitesh);
// console.log(hitesh.email);

// The problem in the code is that the getter and setter for email are recursively calling each other, leading to a stack overflow. 
//Specifically, the get email() method calls this.email, which triggers the set email(value) method, and vice versa.

// To fix this, you should use a private property (e.g., _email) to store the actual email value and avoid the recursive calls.

