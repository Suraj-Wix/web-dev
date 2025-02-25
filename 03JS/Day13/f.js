// scope ke baare mein

// Global scope, local scope(functional scope), block scope

// let   a  = 10;
// var   b  = 20;
// const c  = 30;
// Global scope wale

// console.log(a);
// console.log(b);
// console.log(c);



// function greet(){
//     let   a  = 10;
//     var   b  = 20;
//     const c  = 30;
//     console.log("Hello Function");// ish ko function ke andar hi excess kr sakte hai function ke bahar nhi
//     console.log(a,b,c);
// };
// greet();
// console.log(c);

// var amount=400;// block scope hota ish ko multiple time bana sakte hai
// var amount=20;
// var amount=200

// let d =30; blcok scope nhi hota hia ishliye ishko ishtemal nhi kr sakre hai
// let d =40;

// if(true){
//     let a=10; // yaha pr a run krane pr erro marega
//     // var b=20;
//     var amount =20;  // var pr run krane pr erro nhi marega

//     const c=30;// yaha pr c ko run krane pr erro marega
// };

// console.log(c);


// for (let i=0; i<5; i++){
//     console.log(i);
// }
// console.log(i); // let block ke bahar excess nhi kr sakta hai var allow krta hai



// console.log(c); // pahle print nhi hoga erro dega
// let amount =20; // amount ko exccess nhi kr sakte hai
// const b=30;// b ko excces nhi kr sakte hai 
// var c =50; // undefined hoga 



// let amount =20
// if(true){
//     let amount=30; // do bar let sirf block ke andar allow rahega 
//     // let amount=40; // block ander dusra let allow nhi rahta hai
//     console.log(amount);
// }

// greet(); // yaah pr bhi run krega yaah pr bhi run krega  function call hoga
// function greet(){
//     console.log("Hello Greet");
// }
// // greet(); // run krega function call hoga


//  meet(); //  yaha pr pahle call krane pr  erro marega ish type ke function ko
 // yaha pr kya hoga pahle decalare hoga pr ush ke baad excess hoga 
// const meet = function(){
//     console.log("Hello Meet");
// }

// meet();// niche call krne pr run krega



// while loop

// let i =1;
// while(i<6)
// {
//     console.log(i);
//     i++;
// }


// do-while loop

// let arr =[10,30,40,50];
// for(let i=0;i<arr.length;i++)
// {
//   console.log(arr[i]);
// }


const obj ={
    name:"rohit",
    age:30,
    amount:420,
    city:"kotdwar"
}

// sabse easy for in loop



// const a = Object.values(obj);
const key =Object.keys(obj);
// console.log(a);
// ['name','age','amount','city'] // kya mai yaha pr value nikal sakta hu for loop se

for(let i=0;i<key.length;i++)
{
    console.log(obj[key[i]]);
}

