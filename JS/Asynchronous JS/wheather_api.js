
let apiKey = '375c384a1d88740decac701a12a21b93'


async function getWheather(city) {

    // try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


        let row = await fetch(url)
        if(! row.ok){
            throw Error('City not found')
        }

        let data = await row.json()
        console.log(data);
        
    // }
    // catch(err){
    //     console.log('Invlaid city, Try again');
    //     console.log(err.message)
    // }
   
}



getWheather('bhopAal')


setTimeout(function(){
    console.log('err ke baad wala code');
    
} , 2000)




// Network/Fetch Perspective (Netwok/Fetch ka Nazariya)fetch function ke liye, "Error" (Promise Rejection) ka matlab sirf do situations mein hota hai
// 1. Network Failure: Jaise ki user ka internet connection cut gaya.
// 2. CORS Issues: Jab browser security reasons ki wajah se request ko block karta hai.
 

// Agar server se koi bhi reply aa gaya (chahe woh $\text{200}$ OK ho, ya $\text{404}$ Not Found, ya $\text{500}$ Server Error), toh fetch function ka promise successfully resolve (pura ho gaya) maana jata hai.