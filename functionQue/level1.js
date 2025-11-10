

function sayHey(){
    console.log('hello javascript');
    
}

sayHey();


function add( a , b){
    return a+ b ;
}
console.log(add(2 , 7));


function greet(guest){
    console.log(guest);
}
greet('hi Hina');


// function addUnlimited(...nums){
//     let sum =0 ;
//     nums.forEach(element => {
//          sum += element
//     });
//     console.log(sum);
// }


function addUnlimited(...nums){
     
 let ans = nums.reduce( (acc , val )=>{
    return acc + val ;
   } , 0)
   console.log(ans);
   

}
addUnlimited(1 , 2, 5 , 8, 7 , 8)


// // create an IIFE that prints "I run instantly"
// (function(){
//      console.log('I run instantly');
     
// })();

// closure -----------------------------
// function parent(){
//     let a = 90 ;

//     function child (){
//         console.log(a);
        
//     }

//     child();
// }

// parent();



let Obj ={
    name : "archi",
    age : 34 ,
    city : "Bhopal"
}

for(let key in Obj){
    console.log(Obj[key]);
}

// practice que 


function reactangleArea(l , b ){
    console.log(l * b);
}
reactangleArea(3 , 7);

function isEven(num){
    return num % 2 == 0 ? 'even' : 'odd'
}

console.log(isEven(38));


function StringLeng (s){
    console.log(s.length);
    
}
StringLeng('Hello')


function firstChar(s){
    console.log(s[0]);
    
}
firstChar('hello')







