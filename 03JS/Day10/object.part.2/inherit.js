let user1 ={
    name:"Rohit",
    age:20,
}

let user2 ={
    amount:20,
    money:50,
}

user2.__proto__ = user1; // ish ka istmal kr ne se user2 user1 ko excess kr sakta hai
// console.log(user2.money)
console.log(user2.name)// no undefined





let arr = [10,20,30,40];
// console.log(arr.__proto__)
// console.log(arr.__proto__==Array.prototype)// true hoga ish ka prototype hota hai
console.log(arr.__proto__.__proto__==Object.prototype)// true hoga object ka prototype hota hai
console.log(arr.__proto__.__proto__.__proto__==null)// true hoa 