

let p1 = new Promise((res , rej) =>{
    let a = Math.floor(Math.random()* 10 );

    if( a < 5){
        res('promise resolved' + a )       // resolve & reject accept only ONE argument.
    }else {
        rej('not resolved', a)             // accept first only 
    }
})
.then ((msg) =>{
    console.log(msg);
    
})
.catch((msg) =>{
    console.log(msg);
    
})


// res  - run then 
// rej - run catch

// asyn await is a best way to write this logic 