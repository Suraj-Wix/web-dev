// how to  create object
// const obj = {
//     0:20,
//     1:20,
//     2:70,
//     name:"rohit",
//     account_balance:420,
//     gender:"Male",
//     age:30,
//     "account number":231230,
//     undefined:30,
//     null:"mohan",

// }
// console.log(obj.undefined)
// console.log(obj["undefined"]);
// console.log(obj.null);
// console.log(obj["undefined"]);

// console.log(obj.name);
// console.log(obj["gender"]);
// console.log(obj["account number"])
// console.log(obj['0']);
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj);

// const arr = ['rohit',420,"Male",30];
// const inst ={
//     insta_id: "rohit_negi9",
//     password:"Bhaiyaji9"
// }
// console.log(inst);

// ye jo  arr hai backend ke form aise dikhega onject const arr=[20,50,70]; jo niche hai ush ka backend ka form hai
// let arr={
// 0:20,
// 1:50,
// 2:70,
// length:3
// }


// const arr= [20,50,70];
// console.log(arr[1],obj[1]);
// console.log(arr.length,obj.name);


// ak aur method hai obj ko ceate kr ne ka  2nd method

// const person = new Object();
// console.log(person); // empty dikhai dega

// //property add
// person.name ="Rohit";
// person.age=80;
// person.gender="Male";
// console.log(person);
// //delete
// delete person.age;
// console.log(person);
// //Modify
// person.name="MOhit";
// console.log(person);

// 3rd method object create kr ne ka


// class People{
//     constructor(name,age,gender){
//         this.name = na;
//         this.age=ag;
//         this.gender=gen;
//     }
// }

// let per1 = new People("Rohit",20,"Male");
// let per2 = new People("Moht",30,"Female");
// let per3 = new People("Aman",21,"Male");
// console.log(per1,per2,per3);

// common mehtode for objects

let obj ={
    name:"rohit",
    age:30,
    account_balance:420,
    gender:"male"
};

// key , values ko kiase acces kr te hai

// const arr= Object.keys(obj); // ish se saare ko excess kr sakte ho
const arr= Object.values(obj);
// console.log(arr);

// keys; value ko mila ke ak sath ans dega
const arr2 = Object.entries(obj);
// console.log(arr2);




// assign use case
const obj1 ={a:1,b:2}; // in dono ak sath combine kaise kr sate hai
const obj2 ={c:3,d:4};
const obj4 ={e:5,f:6};

// const obj3 = Object.assign(obj1,obj2);
const obj3 = Object.assign({},obj1,obj2,obj4);
// console.log(obj3,obj2);
// console.log(obj3);

// obj3.a=10; shallow copy vs deep copy in js
// console.log(obj1.a);

const obj5={...obj1,...obj2,...obj4};
console.log(obj5);



// { ish tarah ke object chahiye toh isk ke liye aata assign operator
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }
// const obj3 = obj1+obj2;

