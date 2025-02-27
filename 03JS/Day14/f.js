// let obj = {};
// console.log(obj);

// let obj ={};
// obj.name = "Rohit";
// obj.age =20;
// key value writable enumerable configurable
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// writable = true, value ko kya mein change kar sakta hu writable = false hua toh change nhi kr sakte hai
// obj.name = "Mohit";
// configurable= false hua toh change nhi kr sakte hai aur na hi writabele ko change kr sakte aur na hi enumerable ko change kr sakte hai
// configurable =ture hua toh change kr sakte hai


// let obj1 ={};

// Object.defineProperty(obj1, 'name',{
//     value:"rohit",
//     // writable:false,// false rahega toh no change
//     writable:true,// true ban gya toh change ho jayega rohit se mohit 
//     enumerable:true,
//     configurable:true, // agr configurable :flase hota hai enumerable ,writable ka value change nhi ho sakta hai
// })
// // obj1.name ="mohit";
// Object.defineProperty(obj1,"name",{
//     // writable:true, //  change 
//     writable:false, // no change 

// })
// obj1.name="mohit";
// console.log(obj1);


// const obj1 ={
//     name:"rohit",
//     age:23,
//     account_number:30001
// };

// Object.defineProperty(obj1,'account_number',{
//     writable:false
// })

// obj1.account_number=20001;
// console.log(obj1.account_number);


// const customer = {
//     name:"Rohit",
//     age:23,
//     account_number:123,
//     balance:2000,
// }





// // name , account_number , change nhi hone chaiye
// Object.defineProperty(customer,"name",{
//     writable:false,
// })

// customer.name ="Mohit";
// // customer.account_number=10001;

// console.log(customer);


// Object.prototype
const customer = {
    name: "Rohit",
    age: 23,
    account_number: 123,
    balance: 2000,
}

let customer2=Object.create(customer);
customer2.city ="Haridwar";
customer2.place="Delhi";


Object.defineProperty(customer,"name",{
    enumerable:false,
})

// enumerable: jis bhi key ka enumerable true hga ,un sbka acces hga ya print hga
//Inherit hoke bhi koi bhi property or key aati hai, uska enumerable true hua toh wo bhi print hoga

// for (let key in customer)
//     console.log(key);
// for (let key in customer2)
//     console.log(key);
// console.log(Object.getOwnPropertyDescriptor(customer,'name'));// yaha  sari property like value , writable, enumerable , configurable 
// console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));
Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,// ish ke kya hoga yaha pr toString print ho jayega 
})

for (let key in customer)
    console.log(key);
