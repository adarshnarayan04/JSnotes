const myNums = [1, 2, 3]


// reduce ( callbackfunc(accumulator,currentvalue),initialvalofaccumulator)

//acc-accoumulator(initial val of accumulator is given)
//curval-current value
// and return value is stored is accumulator

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// here  accumulator at end will give total sum;


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)// will give totat sum

console.log(priceToPay);