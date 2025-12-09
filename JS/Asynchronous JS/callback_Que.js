// Task   



//create a function named afterDelay
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai


function afterDelay( delay , cb){
    setTimeout(function(){
   
        cb(function(){
            console.log('hello');
            
        })

    } , delay)
}


afterDelay(2000 , function(abcd){
        abcd()
})











//2  Ek function banao `getUser`
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:  id , username

// - Callback ke andar ek aur function call karo `getUserPosts`

// getUserPosts takes `userId`
// - 1 second ke baad `callback` ko `posts` ka array de

// - User ka `username` print ho
// - Fir uske `posts` print ho

// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice


function getuser(loggedIn , cb){
    setTimeout(function(){
         cb({id: 12398 , username : 'archi.dev'})
    } , 1000)
}

function getUserPosts(id , cb){
    setTimeout(function(){
       cb(['Js practice done', 'callback hell problem', 'async await magic'])
    } , 1000)
}


getuser('loggedIn' , function(dets){
    console.log(dets.username);
    
    getUserPosts(dets.id , function(posts){
        console.log(posts[1]);
        
    })
})










// Ex  Callback dependency

// Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho






function logInUser(cb){
    console.log('fetch detailsssssss ...');
    
    setTimeout(function(){
            cb({id : 78751})
    } , 3000)
}

function fetchPermission(id , cb){
    console.log('granting permission ...');
    setTimeout(function(){
        cb(true)
    } , 3000)
}

function loadDashboard(per , cb){
    console.log('loading...');
    
    setTimeout(function(){
        cb() ;
    }, 3000)
   
}


logInUser(function(obj){
      fetchPermission(obj.userId , function(per){

        if(per){
            loadDashboard(per , function(){
                console.log('dashBoard loaded');
                
               })
        }
               
      })
})