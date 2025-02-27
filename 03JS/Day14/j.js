let obj = {
    name:"rohan",
    age:23,
    gender:"male",
    city:"kotwar",
};

// obj.toString()  question ye kyu nhi print ho rha hai 
for(let key in obj)
{
    console.log(key);
}




// // for in loop , i can iterate over keys in an object
// for(let key in obj)
// {
//    console.log(key, obj[key]);
// }

// // Object.keys(Obj)
// console.log(Object.keys(obj));


// let obj2 = Object.create(obj);
// obj2.money = 420;
// obj2.id="Roh";
// // console.log(obj2)// but yaha pr obj2 ka hi properties ko excces karega
// // console.log(obj2.name); yaha pr obj1 ke name ko excces kr sakte hai

// console.log(Object.keys(obj2)); // yaha pr sirf money or id pr hi excess hoga inherit vale ka excess inke pass nhi toha hai yani obj ka
// for(let key in obj2) // dono ka key excces hoga like money id name gender city
// {
//     console.log(key);
// }
