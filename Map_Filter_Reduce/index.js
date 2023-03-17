const arr =  [1,2,45,8,12,4,10];

//Array Map Method                                  //returns Array
arr.map((value,index)=>{    
    console.log((`Index is - ${index+1} and value is ${value}`));
    console.log("Operation - ",value+12);                                   
})

//below code display Full Array using Map --
// arr.map((element,index2,allArray)=>{
//     console.log(allArray);
// })

//Array Filter Method
let a = arr.filter((a1)=>{
    return a1<10
})
console.log(a);                                     //returns Array

//Array Reduce Method
let b = arr.reduce((b1,b2)=>{
    return b1 + b2;
})
console.log(b);                                     //returns Value