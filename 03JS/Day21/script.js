/* <li>TS</li> */
//created an element

// function attach(content){
// const element = document.createElement('li');
// element.innerHTML =content;

// const element2 =document.createElement('li');
// element2.innerHTML = content+"V2.0";

// const parent = document.getElementById("root");
// // parent.appendChild(element); // dono me last me attach hoga
// parent.append(element,element2); //  but different kua hai yaha pr multiple intruction de sakte ho  append ke andar
// };

// attach("TS");
// attach("React");
// attach("Node");



// ****************************************TextNode*************************************************
// ab mujhe text node attach krna ho hello ji ak text node hua


// const element=document.createTextNode("Hello Coder Army");

// const parent =document.getElementById("root");
// parent.append(element);


// ************************Attribute Node******************

// const element =document.createElementAttribute("id");
// element.value="first";
// const curr_list = document.querySelector('li');
// curr_list.setAttributeNode(element);

// yaha se all  select kr open kro 
// const element =document.createElementAttribute("id");
// element.value="first";


// //access to first list
// // const curr_list = document.querySelector('li');
// // curr_list.setAttributeNode(element);


// // access to second lsit

// const element=document.getElementById("root");
// // console.log(parent.children[0]); [0] [1] ye sab fist second kro excess deta hai
// parent.children[1].setAttributeNode(element);
// yaha tk select kr na hai


// // acces attribute of a class

// const element = document.getElementById("root");
// // console.log(element.getAttribute("style"));

// // yaha pr attribue se bhi kr sakte hai
// element.setAttribute("custom","20");
// element.setAttribute("class","Roahn");

// // yaha se attribute ko remove bhi kr sakte hai
// element.removeAttribute("custom");


// *******************************Add nodes to the DOM*****************
// yaha pr (TS) prepend ka use kr sabse pahale chala jayega

// const parent = document.getElementById("root");
// Array

// const element=document.createElement('li');
// element.innerHTML="TS";
// data


// parent.prepend(element);// ishe first pr chal jayega
// parent.append(element);//last me chal jayega 

// mai chahta hu ki html me uppar element sift kr du
// const child2 = parent.children[1];
// parent.insertBefore(element,child2);

// parent.replaceChild(element,child2); //html ke jagah Ts replace ho jayega





// const parent = document.getElementById("root");
// // parent.innerHTMl ="TS"; // inner html ke jagah ts present ho jayega

// // parent.innerHTML +="TS" // yaha pr inner ke code me last me attach ho jayega

// // parent.innerHTML +="<li>TS</li>"; // aise likhne pr js ke just last me attach ho jayega



// // mai chahta hu ki inner html ke pahle koi element present kre mtlb ki div ko present kre

// const element = document.createElement("div");
// element.innerHTML ="Hello Coder Army";
// // parent.insertAdjacentElement("beforebegin",element);// yaha pr hello coder army  pahle attach hoga yaha pr
// // parent.insertAdjacentElement("afterbegin",element); // first child  consider hoga yaha pr
// parent.insertAdjacentElement("afterend",element);



//Delete node or element

// document.querySelector('li').remove();

const element =document.querySelector('li');
element.remove();

// removeChild(node) Homework









