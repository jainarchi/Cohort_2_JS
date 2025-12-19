console.log('objects');


const obj = {
    name : "Riya",
    age : 23 , 
    location : "Pune"
};
console.log(obj);

// const ob = obj ;
// ob.name = "Jiya"

// real copy by spread operator 
const ob = {...obj}
ob.name = "Hina"        

const ob2 = Object.assign({addtional : "value"} , ob)

console.log(ob , ob2);


// issue with nested object : nested passing reference 

let p1 = {
    name : "naam",
    roll : 11 ,
    location : {
        country : "India",
        state : "MP",
        geo : {
            lat : 78 ,
            lag : 90.23
        }
    } 
}


// let p2 = {...p1};
// p2.location.geo.lat  = 100;
// console.log(p1.location.geo.lat); //100   issue nexted obj passed ref 


console.log('solution : deep copy');

let p2 =  JSON.parse(JSON.stringify(p1))

p2.location.geo.lat  = 100;
console.log(p1.location.geo.lat); // 78

// -------  Destucturing   ---------


let user1 ={
    name :"Devansh",
    age : 23,
    location:{
        lat : 23.3,
        lag : 34.2
    }
} 

console.log(user1.location.lat);

let {lat: latitude , lag } = user1.location;
console.log(latitude);


user1.subject = "science";
console.log(user1);


user1.hobbies = {
    h1 : "exploring Tech",
    h2 : "painting"
}

console.log(user1);



// let user1 ={
//     name :"Devansh",
//     age : 23,
//     subject : "science"
//     location:{
//         lat : 23.3,
//         lag : 34.2
//     }
//     hobbies :{

//    }
// } 

// destructuring  issue  

let Obj = {
    name :{
       "first-name" : "tanu",
       last :"jain"
    },
    age : 24 
}

console.log(Obj.name["first-name"] );

// last , firstName are variable (char , 0-9 , _ , $)  

let {"first-name" : firstName , last } = Obj.name;    
console.log( firstName , last);





// dyamic val add and access

let u = {
    naam : "tanisha",
    id : "9i89",

}

let unq = "id" ;
console.log(u[unq]); // u.unq  wrong - it find unq key

let key = "role"
u[key] ="SDE";
console.log(u);

let property = "id" ;

let admin ={
    name : "archi",
    [property] : "op12",
}
console.log(admin);


// utity methods 

let A = {
    title : "JS",
    duration : "4 weeks"
}

// console.log(Object.entries(A));
// console.log(Object.keys(A));
// console.log(Object.values(A));

for (const key in A) {
    console.log( key +  " : " + A[key]);
}


// key can be boolean and number

let o = {
    true : "yes",
    34 : "number"
}
console.log(o.true , o[34]);
