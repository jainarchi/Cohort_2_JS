console.log(NaN + 7);

// alert('password saved')

// prompt('your name');

let city = 'bhopal';
console.log(city);

var a = 'js';
let b =  'kuch bhi';
const c = 'constant'


a = 10 ;

// let inp = prompt('enter name')
// console.log(inp , typeof(inp));


// let age = Number(prompt('enter age'))
// console.log(age , typeof(age));

// confirm('want to proceed');


// let bool = prompt('yes or no') === "yes" ? true :false;
// console.log(bool , typeof(bool));


// let ag = parseInt(prompt('enter age'));
// console.log(ag + 5);



console.log("hello"); console.log("jiji")

let y = (5+10) * 2 ;
console.log(y)

console.log(Number("abc")) // NaN
console.log(undefined + 1 );   // NaN

console.log(1/0);  // infinite
console.log(0/0);   // NaN


let x = 5 ;
let z = x ;
z = 10 ;

console.log(x , y);


let obj1 ={
    name: "harsh"
}

let obj2 = obj1 
obj2.name = "archi jain";

console.log(obj1);



let arr = [10 , 30 , 40 , 50 , 89];
arr[2] = 100 ;
console.log(arr);


let ar = arr.map(function(e) {
    return e * 2 ;
})
console.log(ar);



let filterEle = arr.filter(function(e){
    return e > 50;
}) 
console.log(filterEle);



let abc = [12 , 10 , 30 , 18 , 80];

let ans = abc.reduce(function(acc , val){
    return acc + val;            
}, 10)    
console.log(ans);



abc.forEach((e) => {
   console.log(e + 5);
})


let isSome = abc.some(function (e){
    return e > 70
})
console.log(isSome);



let isEvery = abc.every(function (e){
    return e > 12;
})
console.log(isEvery);




let users = [{
    name : "priya",
    age : 20,
    location: "Bhopal",
    degree : "MBA"
},
{
    name : "archi",
    age : 20,
    location: "Bhopal",
    degree : "B.Tech"
}]


console.log(users);

let u = users.find(function(user){
    return user.age === 20 ;
})
console.log(u);







