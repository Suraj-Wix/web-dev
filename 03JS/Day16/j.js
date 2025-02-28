// reduce

// const arr = [10,20,30,40,50];

// // const result = arr.reduce(callback function, initialization)
// const result = arr.reduce((acc,curr)=>{
//     console.log(acc,curr);
//     acc = acc+curr;
//     return acc;

// },0)

// console.log(result);


let arr = ["orange","apple","banana","orange","apple","banana","orange","grapes"];
// final result ek object ke form
//orange:3
// apple:2
// acc ={
// orange:2,
//apple:2,
//banana:2,
//grapes:1}

// const result = arr.reduce((acc,curr)=>{
//   if(acc.hasOwnProperty(curr))
//     acc[curr]++;
//   else
//   acc[curr]=1;

//   return acc;

// },{});
// console.log(result);


const result = arr.reduce((acc,curr)=>{
    acc.hasOwnProperty(curr) ? acc[curr]++: acc[curr]=1;
  
    return acc;
  
  },{orange:6,
    apple:2
  }) 

  console.log(result);