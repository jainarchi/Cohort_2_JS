// keyword  - this 
// value of 'this' inside function is window. we can also set this's value by 
// call
// bind -return a copied function 
// apply - accept 2 parameter (this value , array )


function fun( val , val2){
    console.log(this.name);
    console.log(val , val2);
    
}


let user = {
    name : 'Hina',
    age : 12 ,
    id : 1247 
}


// fun.call(user , 90 , 'w');

// let newFun = fun.bind(user , 45 , 80);
// newFun();

// fun.apply(user , [ 23 , 'A'])       

//-------------------------------------------------


console.log(this);

function abcd (){
    console.log(this);   
}
abcd();


let customer = {
    name : 'Siya' ,
    logeIn : function(){
        console.log('logged in');
        console.log(this);                  // object 
    }  
} 

customer.logeIn()

let object = {
    name : 'abcd' , 
    fun : function(){
        console.log(this);         

        arrowfun = () =>{
            console.log(this);                 // lose val and take from parent ie obj
            
            function fun2() {
                console.log(this);            // create own context - window 
            } 
            fun2()
        }

        arrowfun();
    }
}

object.fun()        //  call by .
