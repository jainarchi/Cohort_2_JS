
function active (){
  console.log('function statement');
  
}

let v = function(){
    console.log('function expression');
}

let func = () => { 
    console.log('fat arrow function');
}




let multiply = ( a = 12, b = 1) => {         
     console.log(a - b);
     
}
multiply(23 , 56);




function print ( a, b , c , ...val){   // rest operator
    console.log( a, b , c , val);

}

function getScore(... score){
      let sum = 0 ;

    //   score.map(function(e){
    //         sum += e ;
    //   })

      score.forEach(function(e){
        sum += e ;
      })

      return sum ;
}

print(12 , 30 , 23 , 10 , 12 , 10 , 80 , 2);


let total = getScore(12 , 30 , 23 , 10 , 12 , 10 , 80 , 2);
console.log(total);








/*

//  first class function
let abcd = function(val){
    val();
}

abcd(function(){
    console.log('func passed in another func  - first class function . treated as value');
    
});

//   high order function - func which return or except another func 

function hoc( func ){
    func();
}

hoc(function(){
    console.log('hello');
    
})


function hoc1 (){
    return function(){
        console.log('return func from hoc');   
    }
}

hoc1()();


// pure function -> which does not change anything outside the func & impure is a vice - versa .

function pure(){
    console.log('msg');
    
}


let a = 23;
function impure(){
    a++ ;
}

impure();
console.log(a);


// lexical scoping

// function a1(){
//     let a = 20 ;

//     function a2(){
//         let b = 34 ;

//         function fun3(){  
//           let b = 67 ;  //let is a blocked scope so outer b is shadow
//         }
//     }
// }


function a1(){
    let a = 20 ;
    console.log(a);

    function a2(){
        let b = 34 ;
        console.log(b);
        

        function fun3(){     
          console.log(a); //20
          
        }
        fun3();
    }
    a2();
}

a1();


*/