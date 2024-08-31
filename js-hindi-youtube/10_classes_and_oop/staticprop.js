class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}
//console.log(User.createId()); //will work as static method can be called on class( it does not require object to run)
//static method are part of class not object so object cannot access it
const hitesh = new User("hitesh")

// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());// not work