// "use strict"
//The this keyword is JavaScript is a special keyworld that refers to
// the context in which the current code is being executed.
//Its value depends on how the function where this is used is called.


// 1:Global Context (Outside Any Functon)
//In browsers: window
//In Node.js:Module's exports object

// console.log(20);
// console.log(window);
// console.log(this);

// let a=10; // all are a part of globlescope
// const b=20;
// console.log(this);

// function name(){
//     console.log("Hello Coder Army");
// }

// let a =10;
// const b=20;
// var c=20;

// console.log(this===window);


// console.log(this);





// "use strict"

// function greet(){
//     console.log(this);
// }
// greet();



// "use strict" // a=10 ke uppar use strict likhate hi erro marega

// // a=10;
// // console.log(a); // yha pr print ho jayega jab "use strict" use n kiya ho

// let obj ={
//     name:10

// }
// Object.freeze(obj);
// obj.name =30;
// console.log(obj);


//******************************************************* 
//3: Inside a Method (Object Context)
// when this is used inside an object's method, it refers to the object that owns the method.

// const obj ={
//     name:"Rohit",
//     age:20,
//     greet:function(){
//         console.log(this.name);
//     }
// }
// obj.greet();



// Arrow functions don't have their own this.
//Instead,they inherit this from the surrounding(lexical)scope.


// let obj = {
//     name:"rohit",
//     age:11,
//     greet:()=>{
//         // console.log(this.name);// => function me app aisa nhi likh sakte hai because Instead, they inherit ths from the surrounding (lexical scope).
//         console.log(this);
//     }

// }
// obj.greet();


// normal function ke andar ak arrow function daal diya hai
// arrow function ke pass apna kud ka this keyword nhi hota ye apne srounding se uthata hai normal function
// let obj ={
//     name:"rohit",
//     age:11,
//     greet: function(){

//         let ab= ()=>{
//             console.log(this);
//         };
//         ab();

//     }
// }
// obj.greet();

//Inside a Construcot or Class
//In constructors and classes,this refers to the instance of the object being created.

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age =age;
//     }
// }
  // // let a ={}; // empty object  yaha pr this keyword kisho point kr raha hai ishi vale a ko (property hai byne even call)
  //a.name ="rohit"
 // a.a

// let a=new Person("Rohit",20);
// console.log(a);


"use strict"
let greet =()=>{
    console.log(this);
}
greet();

let meet = function(){
    console.log(this);
}

meet();