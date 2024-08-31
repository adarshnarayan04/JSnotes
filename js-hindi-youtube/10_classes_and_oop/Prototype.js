// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);//should use this as it let us know which object we are using
    }
}

//added to prototype of object(now all thing will have this method) as all thing in js is an object
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

//if added in array then it will not be available in object


// heroPower.hitesh()
// myHeros.hitesh()--> can access it as it is added in object prototype and array is also an object in js
// myHeros.heyHitesh()
// heroPower.heyHitesh()-->will not work as it is added in array prototype not in object prototype

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//old way of inheritance
    //now we can use TeachingSupport method in TASupport
}
//adding inheritance outside 
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//teaching support will have all the method of teacher

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()