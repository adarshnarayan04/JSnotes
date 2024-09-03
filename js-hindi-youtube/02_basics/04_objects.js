// const tinderUser = new Object()

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
//read it for clear understanding
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//obj.name or obj["name"]
//obj[name] not work

// you can access object properties in two ways:

// objectName.propertyName
// objectName["propertyName"]

// [
//     {},
//     {},
//     {}
// ]
const myObj={};
str = "myString";
myObj[str] = "This key is in variable str";

console.log(myObj.str); // undefined

console.log(myObj[str]); // 'This key is in variable str'
myObj[str]=myObj["myString"]

//use [] to acces the object using variable(without " ")

console.log(myObj.myString); // 'This key is in variable str'


//in js "name" and name are same 
//it last name value is stored as it override the previous value
const obj={
    name: "hitesh",
    "name":"adarsh"
    
}
const hobj={
    "name":"adarsh",
    name: "hitesh"
    
    
}

console.log(obj);
console.log(hobj);

