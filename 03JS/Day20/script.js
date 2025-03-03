const id= document.querySelector('#first');
id.innerHTML="Hello Money";

const id2 = document.querySelector('.header2');
// console.log(id2); // pahle check kiya ul aaya ki nhi agar aa gya toh mai kuch bhi change kr sakta hu

id2.style.backgroundColor ="pink";

// How to iterate over Node List
//const obj = document.querySelectorAll('.header1')

//1: obj.forEach((val)=>{
  //  console.log(val)
//})

//2: for(let val of obj)
// console.log(val)

//3: for(i=0;i<obj.lenght;i++)
// obj[i].style.color="red";

//Convert NodeList into array
//Array.from(obj)


// *********************************************************
// const obj =document.getElementsByTagName('h1');
// console.log(obj);

// let team = document.getElementsByTagName('li');

// How to iterate over it
// 1:for (let i=0;i<team.length:i++)
//team[i].style.color = "black";

//3: Array.from(team).forEach((val)=>{
    // console.log(val);
//})


// ******************************************************************************


// const list = document.querySelector('li');
// console.log(list.parentElement);
// console.log(list.parentNode);


// const par =document.querySelector('ul');

// console.log(par);

// console.log(par.childNodes[0]);
// console.log(par.children);
// console.log(par.firstChild);
// console.log(par.firstElementChild);

// innerHTML
// textContent
// innerText


