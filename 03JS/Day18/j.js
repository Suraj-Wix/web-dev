// globalobject: object hai
//Chrome Browser: window
//Nodejs: global
// globalThis :  use kr sakte hai kishi bhi invermient me  voh har koi globalobject ko hi point krega
//  problem kya partek ke liye alg alg name tha ish liye unquie name ka use kya gaya (globlThis) 
// globalthis kya ye globale object ko point kr ta hai

console.log("Hello World"); // ye sab aa kaha se raha hai ye san globalobject se aa raha hai 
console.log(Math.random());
// setInterval();
//new Object();
// new String("Rohit");

// let obj = {
//     name:"Rohit",
//     age:12
// };
// obj.name

// console.log(global); // ye sab run kr dega
console.log(globalThis.Math.random());
