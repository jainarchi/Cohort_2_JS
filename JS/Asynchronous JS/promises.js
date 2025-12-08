let p1 = new Promise((res , rej) =>{
    let a = Math.floor(Math.random()* 10 );

    if( a < 5){
        res('promise resolved' + a)   // resolve & reject accept only 1 argument
    }else {
        rej('promise not resolved', a)             // accept first only 
    }
})
.then ((msg) =>{
    console.log(msg);
    
})
.catch((msg) =>{
    console.log(msg);
    
})


// res - run then 
// rej - run catch

// asyn await is a best way to write this logic 


let p2 = new Promise((res , rej) =>{
    if( 10 < 5){
        res('resolved')
    }
    else rej('rejected')
})


async function abcd (){
    try{
        let val = await p2 ;
        console.log(val);
    }
    catch(err){
        console.log(err);
    }
}

abcd();


