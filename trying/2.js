



// async function consumeAsyncTask() {
//     try {
//         // Wait for the async task to complete
//         await setTimeout(function(){
//             console.log('Async task is compelete');
//         }, 1000)
//         console.log("Promise consumed");
//     } catch (error) {
//         console.error("Error consuming promise:", error);
//     }
// }
// consumeAsyncTask();

const promiseOne = new Promise(function(resolve, reject){
    console.log('Promise started');
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve("hello")
    }, 1000)
})

async function consumePromiseFive(){
    try {
        console.log('function started');//this will be printed second as first promise started get printed as it call get called first
        const response = await promiseOne;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//if resovle is exceuted then we can use then method to consume the promise
//if reject is executed then we can use catch method to consume the promise
