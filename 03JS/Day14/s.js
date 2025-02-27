// for in loop : Isko array ke sath nhi lete
// 0:10
// 1:20
// 2:40,
// 3:12,
// 4:30,
// name:"rohit",
// age:20,

const arr =[10,20,40,12,30];
arr.name="Rohit";
arr.age=20;

// for(let index=0; index<arr.length;index++)//  ye vala loop smart hai ye vala loop kam karega ish ko loop ko include mt kr na 
    // console.log(index,arr[index]);

for(let key in arr){ 
    console.log(key); //normal loop ko arr ke sath istmal kr lo ye bada aram se chalega arr ke sath
    // console.log(key, arr[key]);
 }


// homework hai defineProperty and defineproperties kaise kam kr ta hai 
 