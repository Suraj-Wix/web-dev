// let user ={
//     name:"rohit",
//     age:30,
// }

// Object.defineProperty(user, 'name',{
//     writable:false,
// });
// user.name="mohit";
// // Hacking se bachne ke liye humeine ye sab kiya hai

// console.log(Object.getOwnPropertyDescriptors(user,"name"));



// for of loop : use arr ka operation perform krane ke liye kr te hai

// const arr = [10,20,11,18,13];
// for(let value of arr)
// {
//     console.log(value);
// }

// let str = "Rohit is Good Boy";
// for(let value of str)
// {
//     console.log(value);
// }

// don't use for of loop in object
// const obj ={
//     2:5,
//     1:3,
//     name:"Chavvi",
//     age:22,
//     gender:"female"
// };

// console.log(obj);

// for(let value of obj){ 
//     console.log(value);
// }
// TypeError: obj is not iterable at Object.<anonymous> agar object  ke uppar  for of loop lagate ha error marega

// agar object ke uppar for of loop lagana ho toh laga sakte hai Object.values kr ke 

// for(let value of Object.values(obj))
// for(let value of Object.keys(obj))
    // console.log(value);



//aur kya tarika hai arr ke iterate kr ne ka

// forEach

let arr =[10,20,30,40,50];
arr.forEach()