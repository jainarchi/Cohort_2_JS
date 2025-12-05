// make constructor without class     before es6

function Animal (){       // Constructor funcion 
    this.name = "horse";
    this.sleep = function (){
        return 'sleeping' ;
        
    } 
}


let A1 = new Animal();    
let A2 = new Animal();
 


Animal.prototype.walk = function (){
     return 'walking' ;
}


console.log(A1);   
console.log(A2);  
console.log(A1.walk === A2.walk);    // true 
console.log(A1.sleep === A2.sleep);  // false  


console.log(A1.sleep() === A2.sleep() );  
// true  - js first execute this function() (result - sleeping) then match





 

