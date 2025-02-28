// let obj = {
//     name:"rohit",
//     age:10,
//     orange:1,
// }

// let curr ="orange";
// // console.log(obj.hasOwnProperty(curr));
// if(obj.hasOwnProperty(curr))
//     obj[curr]++;
// console.log(obj);


let obj = {
    name:"rohit",
    age:10,
    orange:1,
}

let curr ="apple";
obj.apple =1;
obj["apple"]=1;
obj[curr]= 1;
if(obj.hasOwnProperty(curr))
    obj[curr]++;
else
    obj[curr]=1;
console.log(obj);
