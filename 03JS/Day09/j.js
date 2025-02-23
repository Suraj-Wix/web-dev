// const d= new Date();
// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d.toISOString());

// console.log(typeof d);
// console.log(d.getDate());
// console.log(d.getDay());
// sun, mon,tue,wed,thu,fri,set
//0,1,2,3,4,5,6
// console.log(d.getMonth());
// jan/fan/mar
// 0/1/2/3
// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// console.log(d.getTime());

// const now = Date.now();
// console.log(now); // milliseconds me convert kr deta hai date  ko

// const d=new Date("2022-10-20T10:10:10");
// console.log(d);
// console.log(d.toDateString());

//Number:0 based start honge
//String:1 based start honge

// const d =new Date("2022-10-20");
// // year /month/Date/hour/Minute/second/millisecond
// const date = new Date(2024,4,28,10,12,45,231);
// console.log(date.toString());

// const d= new Date();
// d.setDate(20);
// d.setFullYear(2021);
// d.setMonth(3);
// // console.log(d.toString());
// console.log(d.toLocaleDateString());


//Date calculation

// const date1 =new Date();
// const date2 =new Date("2025-04-21");

// console.log(date2-date1);// millisecond
// console.log(date2>date1); ture
// console.log(date2<date1);//false
// console.log(date2-date1);
// difference between date is in millisecond

// Countdown Timer for olympics
// Days,hour,minute,second
// const date1=new Date();
// const date2=new Date("2028-07-14T00:00:00");

// const date = date2-date1;
// const days = date/(1000*60*60*24);
// console.log(days);

const date1=new Date();
const date2=new Date("2028-07-14T00:00:00");

const date = date2-date1;
const days = Math.floor(date/(1000*60*60*24));
// console.log(days);
const hour = Math.floor((date/(1000*60*60))%24);
const minute =Math.floor((date/(1000*60))%60);
const second = Math.floor((date/(1000))%60)
// console.log(hour);

console.log(`Olymapics CountDownTime:Days:${days} hour:${hour} minute:${minute} second:${second}`);

