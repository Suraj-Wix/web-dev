// let obj1 = {
//     a:1,
//     b:2
// }
// let obj2 = obj1;
// //shallow copy 
// obj2.a=10; // agr obj 2 ke andar change kr rahe hai dono k andar change hoga
// console.log(obj2,obj1);

// // deep copy 
// let obj3 = structuredClone(obj1);
// obj3.a =20;  // ish me dono alag alag point krega a hi me change hoga  deep copy ka use kr ne pr
// console.log(obj3,obj1);

// Nested object
// const user = {
//     name:"Rohit",
//     balance:420,
//     address:{
//         pincode:246149,
//         city:"kotdwar"
//     }
// }
// console.log(user.address.pincode);
// jab aap copy kre toh structer clone ka ishtemal kre


// const user2 = Object.assign({},user);
// console.log(user2);
// user2.address.pincode =341248;
// user2.name ="Mohit";

// console.log(user.address.pincode);

// console.log(user.name);


// Destructruing of an Object
// let obj ={
//     name:"Rohit",
//     money:420,
//     balance:30,
//     age:20,
//     aadhar:"hfdsiohsai"
// };

// const{name,balance}=obj;
// console.log(name,balance);

// const {name,balance,age}=obj;
// const{name:full_name , balance: amount, age:Umar}=obj;
// console.log(full_name,amount,Umar);// yaha ab name starting me likhne pr erro marega

// second method
// const {name, age,...obj1} = obj; //...bbj1 me saare value rest kr rahe hai aur ye kam arr ke sath bhi kr sakte hai

// console.log(name,age);
// console.log(obj1);

// 1st method arr Destructruing
// const arr=[3,2,1,5,10];
// const [first,second]=arr;
// const[first,second, ,third]=arr;
// console.log(first,second,third);

// second method

// const arr=[3,2,1,5,10];
// const [first,second,...third]=arr;
// console.log(first,second,third);
// console.log(third);




// let obj ={
//         name:"Rohit",
//         age:20,
//         arr:[90,40,60,80],
//         address: {
//             pincode:246149,
//             city:"Kotdwar",
//             state:"uk"

//         }
// };

// const{name}=obj;
// console.log(name);

// const{address:adds}=obj;
// console.log(adds);

// const{address:{pincode,city,state}}=obj;
// console.log(pincode,city,state);


// const{arr: [first]}=obj;// agar aise samjh me nhi aa raha hai toh aise samjho
// console.log(first);

// const{arr:arr2}=obj;
// console.log(arr2);



// let user = {
//     name:"Rohit",
//     amount:420,
//     greet:function(){
//         console.log ("Hello Coder Army");
//     },
//     meet:function(){
//         return 20;
//     }
// }
// user.greet();
// // console.log(user.greet())// uppar bhi console ho gya niche bhi console ho gya ans return undefined hoga 
// console.log(user.meet());


let obj ={
    name:"Rohit",
    amount:420,
    greet:function(){
        return 10;
    }
}

// console.log(obj.amount);
// console.log(obj.name);
// console.log(obj.greet());
console.log(obj.toString());
// arr is an object
let arr = [2,3,1,8];
arr.push(10);
