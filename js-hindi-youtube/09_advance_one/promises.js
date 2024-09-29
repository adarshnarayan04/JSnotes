//we wrtie async code inside promise

//The await keyword is used in an async function to pause the execution of the function until a promise is resolved or rejected. 
//It allows you to write asynchronous code in a synchronous-like manner, making it easier to read and maintain.

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
//if resovle is exceuted then we can use then method to consume the promise
//if reject is executed then we can use catch method to consume the promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
});

 promiseFour
 .then((user) => {
    console.log(user.username);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

//async await code for promiseFour

// async function handlePromise() {
//     try {
//         const user = await promiseFour;
//         const username = await user.username; // here we canot use await because user.username is not a promise(using it not problem like then)
//         console.log(username);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("The promise is either resolved or rejected");
//     }
// }

// handlePromise();

/* end here */

//we can do chaining here
//2nd then will have the value returned by the first then

//catch is present when promise is rejected then catch will be executed
//finally will be executed in both cases




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
//in async we use try catch
// await is like then
//await will execute when promise is resolved
//if error occur in promise then catch will be executed

//await means wait for the promise to be resolved
//if await used for sync code then no problem as it doen have to wait sync code will be excueted instantly
async function consumePromiseFive(){
    try {
        const response = await promiseFive//as it is a promise so we have to use await
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()  //were use again await because response.json() is also a promise
               //in down code we use then two times so use await two times
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

//fetch is also a promise

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json() //.json() is also a promise so we have to use 
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.