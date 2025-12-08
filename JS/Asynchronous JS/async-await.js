
// fetch is promise based 

async function abcd (){

    fetch('https://randomuser.me/api/')
    .then((row) =>  row.json())
    .then((data) =>{
        console.log(data.results[0].gender);
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}

abcd();


async function abc() {
   try{
    let row = await fetch('https://randomuser.me/api/')
    let data = await row.json()
    console.log(data.results[0].name.first);
    }
    catch(err) {
        console.log(err);
        
    }

}

abc()



