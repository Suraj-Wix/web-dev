// let obj1 = {
//     name:"Rohit",
//     age:30,
// };
// obj1.name

//Function

// console.log("Hello Coder Army");
// console.log("Mein badiya hu");
// console.log("Aur Kya Chal rah hai");

// console.log("Hello Coder Army");
// console.log("Mein badiya hu");
// console.log("Aur Kya Chal rah hai");

// console.log("Hello Coder Army");
// console.log("Mein badiya hu");
// console.log("Aur Kya Chal rah hai");

// function greed(){
//     console.log("Hello Coder Army");
// console.log("Mein badiya hu");
// console.log("Aur Kya Chal rah hai");

// }

// greed();
// greed();
// greed();

// add program

// parameter
// function sum(number1 , number2){
//     console.log(number1+number2)
// };


// // function call: argument

// sum(3,7);
// sum(10,15);


//Multiplication: function

// function multiply(number1,number2)
// {
//     // console.log(number1*number2);
//     return number1*number2;

// }
// multiply(4,5);
// console.log(multiply(4,5));

// let result = multiply(4,5)
// console.log(result);

// 3rd method
// const fun = function(){
//     console.log("hello coder Army");
//     console.log("Mein toh badiya hu");
//     return "Money";

//     // console.log("aur kya chal rha"); ye khabhi print nhi hoga return ke niche vala kabhi print nhi hota hia
// }

// fun();
// console.log(fun());



// Arrow Function

// const fun = ()=>{
//     console.log("Hello Coder");
// }
// fun();

// const sum=(number1,number2)=>{
//     return number1+number2;
// }
// console.log(sum(3,4));

// advantage kya hai ish me return likhane ka jarut nhi hai  
// const sum=(number1,number2)=> number1+number2
// console.log(sum(3,4));

// const cube = function(number){
//     return number*number*number;
// }
// console.log(cube(8));



// const cube = number=> number*number*number;
// console.log(cube(8));

// spread operator or  rest operator

// let arr = [2,3,4,5];

// let arr2=[...arr]; ... lagane rest operatot ban jata hai



// const sum = function(...number){
//     // for loop sum nikal skata hu
//     console.log(number);
// }

// sum(2,3,4);
// sum(4,6,1,10,13);
// //sum(2,3);


// 

let obj = {
    name:"rohit",
    age:30,
    amount:420,
}


// const {name, amount}=obj;
// console.log(name,amount);
//Homework pass by value or pass by reference

// function fun({name,amount}){
// console.log(name , amount);
// }
// fun(obj);


// function fun(obj1){
//     const{name,amount}=obj1;
//     console.log(name , amount);
//     }
//     fun(obj);


function fun({name,amount}){
    console.log(name , amount);
    }
    fun(obj);



    // home work
    // function love(obj1){
    //     console.log(obj1);
    // }
    // love(obj);


    let obj1 ={
        a:1,
        b:2,

    }
    let obj2={
        c:1,
        d:2,
    }

    obj2=Object.create(obj1);

    // obj2.__proto__ = obj1;
    // console.log(obj2.__proto__)