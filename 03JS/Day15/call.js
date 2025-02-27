// call back function

// function names(){
//     console.log("Hello I am name");
// }

// function greet(){
//     console.log("I am call Back Function");
// }

// // yaha pr call kr ne pr run krega
// names();
// greet();


//  yaha 4 augument pass hua 
// function names(number){
//     console.log("Hello I am name",number);
// }

// function greet(){
//     console.log("I am call Back Function");
// }

// // yaha pr call kr ne pr run krega
// names(4);



// agar yaha pr kisi function ko pass kr ta hu

// function names(fun){
//     console.log("Hello I am name");
//     fun();
// }

// function greet(){
//     console.log("I am call Back Function");
// }

// // yaha pr call kr ne pr run krega
// names(greet); // that is called call back function


// call back ka use case kya hai

// function names(fun){
//     console.log("Hello I am name");
//     fun();
// }



// // yaha pr call kr ne pr run krega
// names(function greet(){
//     console.log("I am call Back Function");
// });



// ish ko aur easy me kr na hai toh


// function names(fun){
//        console.log("Hello I am name");
//        fun();
//     }


    
    // const greet = function(){
    //     console.log("I am call Back Function");
    // }
    
    // // yaha pr call kr ne pr run krega
    // names(greet); // that is called call back function
    
// names(function(){
//     console.log("I am call Back Function"); // aise bhi call kr sakte hai
// });

// arrow function se call kra sakte hai


// names(()=>{
//     console.log("I am call Back Function");
// });


 // har 5 min ke baad fetch krega data 

// function fetchData(){
//     //bhul saare
//     console.log("I an fetching data");
// }

// setInterval(fetchData,5000);


// function names(fun){
//     console.log("Hello I am name");
//     fun();
// }
// const greet = function(){
//     console.log("I am call Back Function");
// }
// names(greet);


// forEach

// let arr = [10,20,30,40,50];
// arr.forEach(function(num){
//     console.log(num)
// })

// let arr =[10,20,30,40,50];
// arr.forEach((num)=>{
//     console.log(num);
// })

// ish ko same line me likh sakta hu
// let arr =[10,20,30,40,50];
// arr.forEach((num)=>console.log(num));

// let arr =[10,20,30,40,50];
// arr.forEach(num=>console.log(num)); // aise bhi likh sakte hai ye syntax bahut baar dikhega


// ish ki index ko bhi print kra sakte ho
// let arr =[10,20,30,40,50];
// arr.forEach((num,index)=>console.log(num,index));

// yaha pr arr ko change bhi kr sakte hai
// let arr =[10,20,30,40,50];
//single argument: number
// second index
// third:array ko bhi pass
// arr.forEach(callBackFunction)


// const greet=function(num){
//     console.log(num);
// }
// function greet(num){
    // console.log(num);
// }

// arr.forEach(greet);


// arr.forEach((num,index,a) => {
//     a[index] = num*2;
// });

// confirm.log(arr);


// filter

// let arr = [10,22,33,42,50];

// const result=arr.filter((num)=>{
//   return num%2==0;
// })

// console.log(result);


// filter ka use

// const students = [
//     {name:"Rohan",age:22,marks:70},
//     {name:"Mohan",age:24,marks:80},
//     {name:"Darshan",age:28,marks:30},
//     {name:"Mohit",age:32,marks:40},
//     {name:"Shadik",age:12,marks:90},

    
// ]

// // const result =students.filter((obj)=>{
// //    return obj.marks>50;
// // })
// // const result =students.filter((obj)=> obj.marks>50);
// const result =students.filter(({marks})=> marks >50);
    

// console.log(result);


// map

// const arr = [1,2,4,5]
// const result =arr.map((num,index)=>{
//     return num*num*index
// });

// console.log(result);


const arr = [1,2,3,4,5,6];
//const re=arr.forEach((num)=>{
//    return num;
// }) wrong,no return

// maine arr pr filter lagaya aur bol diya mujhe sirf even number chahiye ak ak kr even number select ho gya pahale 2 selecet hua
//  bhi 4,6 aur jo voh 2 hain ish number and chala jayega phi num*num =4 final ja ke result me stored ho jayega
// 3 odd hai toh number hi select nhi phi excute kaise ho 
const result = arr.filter((num)=>num%2==0).map((num)=>num*num).map((num)=>num/2);
console.log(result);


// reduce , iske discussion karenge...