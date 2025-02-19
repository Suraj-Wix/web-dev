// primitive data type

// const num =10;
// num=20;
// console.log(num);

// Non Primitive datatype
// const obj ={
//     id:10,
//     balance:200
// }

// obj.id=11;
// console.log(obj);

// let obj2 ={
//     id:20,
//     money:30
// };

// location of obj2 is 800
// location of obj is 6521

// obj =obj2;
 // erro



//  string in JS

let str1 = "Hello Coder army";
let str2 = 'Main toh mast hu';
let str3 = `Aur bhaiya kya haal chaal`;

let price =80; // price ka value change ho gai

// console.log(`price of the tomato is ${price}`);
// console.log(str1, str2, str3);
console.log(`price of the tomato is ${price},get is asap`);// ye best approch hai
console.log("price of the fresh tomato is",price,"get it asap"); // ye best approch nhi hai

// string concatentaion
let s1 = "hello";
let s2 = "Coder Army";
let s3 = s1+s2;
// console.log(s3);
// console.log(s3.length);
console.log(s1.length);


//  "hello coder army"
console.log('"hello coder army"');

// 'hello coder army'
console.log("'hello coder army'");


let message  = "Rohit Bhaiya bhut bade badmash. \n Wo bhut gande insaan hai.";
console.log(message);

// escape character

let comment = "Rohit Bhaiya bhut bade badmash. \\n Wo bhut gande insaan hai.";
console.log(comment);


let special ="Rohit";// yaha pr sirph r print krana ho toh [0][1]
console.log(special[0]);
console.log(special.charAt(3));


// to lowercase
// to uppercase
// console.log(special.toLocaleLowerCase());
// console.log(special.toLocaleUpperCase());
// console.log(special);

console.log(special.toLocaleLowerCase());
let strtemp = special.toUpperCase();
console.log(strtemp);
console.log(special);



let hero ="Hello Coder Army Coder";
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.indexOf("coder"));
console.log(hero.includes("Coder"));
console.log(hero.includes("coder"));

                //0123456
let newstring ="HelloDon";
             // -7-6-5-4-3-2-1
console.log(newstring.slice(3,5));
// slice can take negative index also;
console.log(newstring.substring(0,3));
console.log(newstring.slice(-6,5));
console.log(newstring.slice(-2,4));

let str10="Hello Ji Kaise ho Ji";
console.log(str10.replace("Ji","Money"));
console.log(str10.replaceAll("Ji","Money"));

// let str11 = "Money, honey, sunny, funny"; //arry me conver kr ta hai
// console.log(str11.split(" "));

let str11 = "Money! honey! sunny! funny"; //arry me conver kr ta hai
console.log(str11.split("! "));

let str12 = "  hello ji ";
console.log(str12.length);
console.log(str12.trim().length);

// New way to  create string
let lasteststring = new String("Hello Coder Army");
console.log(lasteststring);
console.log(typeof lasteststring);