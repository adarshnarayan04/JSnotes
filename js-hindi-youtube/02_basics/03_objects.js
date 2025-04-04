// singleton
// Object.create

// object literals

//const mySym = Symbol("key1")
const mySym="key1"

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//[] is used to inject the value of variable
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //that why we write ["email"] , if write [email] then it will look for variable email
// console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

const a='hello'
const b='world'

const obj={
    a,
    b
}
console.log(obj) // { a: 'hello', b: 'world' }

//if we pass varible in obj then key will be variable name and value will be value of variable