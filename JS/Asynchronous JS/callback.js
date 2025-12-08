// function passed into another function - callback function 
// which is invoked by another function 


function checkLoginedIn(password , cb){
    cb(false );
}

function giveProfile(name , cb){
    cb({id:14523 , username : 'archi.dev' })
}

function givePost(id , cb){
    cb(['good morning' , 'hello' , 'career update'])
}



checkLoginedIn('archi2398', function (isloggedIn) {

    if (isloggedIn) {
        giveProfile('Archi', function (prof) {
            console.log(prof.username);
            
            givePost(prof.id, function (posts) {
                console.log(posts[2]);


            })

        })

    }else {
        console.log('invalid credential');
    }
})




// callback hell - callback hell is the situation where multiple callback are neasted inside each other  also called pyramid of dom due to deep indentation 

// making the code difficult to read, debug, and maintain 

// solution - promises 