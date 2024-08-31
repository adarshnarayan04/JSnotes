//SMI>double>packed
//H_SMI>H_DOUBLE>H_PACKED

//smi - small integer
//double(float,string,finction)




//packed means continous
const arr=[1,2,3,4]
//packed_smi(as it is continous and all elements as inteeger)

arr.push(6.0)
//packed_double_smi(as double also present)

arr.push("7")//as int ,double , stirng all present
//packed_elemets

// it downgrade then never upgrade even when we delete

//holes are expensive
//cosnt arr=[1,2,3,4]   
//arr[7]=7
//then arr[4] is hole

//so compiler have to check when it find hole
//checks
//hasOwnProperty(arr,4)
//  hasOwnProperty(arr.prototype,4)
// hasOwnProperty(object.prototypr,4) -->it is very expensive check

// so holes are very expensive

//types of array on based on performance(s>h holes are alwyas expensive as holes one always more time than simple)
//SMI>double>packed
//H_SMI>H_DOUBLE>H_PACKED

// const arrt=new Array(3)
// just 3 holes HOLEY_SMI_ELEMENTS
//arr[0]=1 //HOLEY_ELEMENTS

//good way
//const arr=[]
//arr.push(1) --> packed_elemenst