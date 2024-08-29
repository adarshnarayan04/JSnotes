const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//map filter have to return the data

//foreach --> just use to traverse the array return doest not work

//map (also use callback function)
//we have to return the data

//const newNums = myNumers.map( (num) => { return num+10 })


//chaining (applying mutliple operations)
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);