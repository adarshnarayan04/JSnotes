const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 4000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
console.log("Hello World");