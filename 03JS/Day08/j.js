// const arr = [2, 35,1,8,9,"rohit",true,8];
// console.log(arr[1]);
// console.log(arr.at(-1));
// at is latest,negative index le leta hai
// console.log(arr.length);
// length
//helpful

// const newarr=arr;
// const newarr=structuredClone(arr);//false
// console.log(newarr==arr); //newarr == arr ke equial hoga 

// newarr=arr; alge alge point kre mai arr ka copy toh chahta hu but point kre

// arr ke ander push krna hai kaise kre aur jab add krega toh last me krega
//push, add element at end
// [2, 35,1,8,9,"rohit",true,30,50];
// arr.push(30);
// arr.push(50);
// console.log(arr);
// // pop,pop the last element from the array
// [2, 35,1,8,9,"rohit",true];
// arr.pop(); // ye kya karega jo last element hota hai array me ush ko nikal dega
// arr.pop();
// console.log(arr); 
 
//unshift , add element at start
// ye kya karega starting me add kre dega
// arr.unshift(10);
// arr.unshift(34)
// arr.unshift(45);
// console.log(arr);

// shift,delete element from start
// arr.shift();
// console.log(arr);

// delete operation
// [hole,2, 35,1,8,9,"rohit",true];
// delete arr[0];
// console.log(arr);

// console.log(arr);
// console.log(arr.indexOf(8));
// console.log(arr.lastIndexOf(8));
// console.log(arr.includes(10));

// console.log(arr);
// let a=arr.slice(2,5);
// console.log(a);

//splice
// console.log(arr.splice(2,5));// 2nD AND 5TH TAK element print kra deta hai

// console.log(arr);
// console.log(arr.splice(2,5));
// console.log(arr);

//splice

// console.log(arr);

// let newsplice=arr.splice(2,5);
// console.log(newsplice);
// console.log(arr);
//splice(starting_index,total_element_delete,add value)

// arr.splice(2,0,"money",90,30,70);
// console.log(arr);

// console.log(arr.toString());
// console.log(arr.join("*")); gap ke bich me start laga deta hai

// concat
// let arr1 =[2,35];
// let arr2 =[5,12];
// let arr4=[23,432,1123,31];
// let arr3=arr1.concat(arr2,arr4);
// console.log(arr3[6]);
// arr1.push(arr4);
// console.log(arr1[2][0]);

//  2d array

let arr=[1,2,3,4,5,6,7,8,9];
// let arr2d=[[1,2,3],[4,5,6],[7,8,9]];
let arr2d=[[1,2,3,[12,14,19,[88,99,98]]],[4,5,6],[7,8,9]];
let newarr =arr2d.flat(4);
// [1,2,3]
// [4,5,6]
// [7,8,9]
// console.log(arr2d[0][0]);

// flat ka use to convert into 1d array
console.log(newarr);

// agar backend se array aaya kaise pata chala ki array hai 
let abc = [2,1,4,1];
// console.log(typeof abc); // object
console.log(Array.isArray(abc)); //true ho toh array hai
// 
// array create karne ka ak aur tarika aata hai


// let ac = new Array(2,3123,123,432);
// console.log(ac);

// let ac = new Array(10);//agar aap single value toh sirf size batata hai
// console.log(ac.length);//but generaly hamlog use nhi karte hai
