function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}
//create a methiod inside the prototype of createUser
//as very thing is object in js so we can add method in prototype

createUser.prototype.increment = function(){
    this.score++//should write this as it will refer to the object in which we want to increment the score
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

//should use new keyword to create a object if want to use prototype
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)//-->can not access the prototype method in this object ans new keyword is not used

//no need to write chai.prototype.printMe() as js automatiicalluy go inside the prototype
//as we know all the func of array such as map filter are in prototype of array we dont use .prototype to access them

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/