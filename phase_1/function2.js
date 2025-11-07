// function Parameter - req  destr  rest  def 

function abc (a , b , c){           // required parameter - js set undefine   req val for proper execution 
    console.log(a + b + c);
}
abc()


function fnc2( a = 10 , b = 20){
    console.log(a + b );          
}
fnc2();


function fnc3 ( {name , id} ){
    console.log(name , id);
}
fnc3({name:'archi' , id: 9038})



function fnc4( a , b, ...rest){
    console.log(a , b , rest);
}
fnc4(3 ,56, 8, 4, 3, 8)


// function argument - Positional  spread  def

function fnc5(a , b , c, d){
    
}
fnc5(20 , 40 , null , 8) // positional arg


let ar = [1 , 4, 3 , 8]

function fnc6(arr){
   console.log(arr[2]); 
   arr[3] = 90  
}
fnc6(ar)
console.log(ar);



function findMax(a , b , c){
    return Math.max(a , b , c)
}
let m = [67 , 46 , 32]

console.log(findMax(...m));





