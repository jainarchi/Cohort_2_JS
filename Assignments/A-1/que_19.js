// let age = +prompt('enter your age');  // convert into number


let age = prompt('enter your age')
console.log(age);

if(age === null){
    console.log('you cancelled it'); 
}

else if( age.trim().length === 0){
    console.log('give some input');
}

else if(isNaN(age)){
  console.log('enter numbers only, without space ');    
}

else{
    console.log(`your age is ${age}`);   
}


for(let i = 1 ; i <= 10 ; i++ ){
    console.log(`5 * ${i} = ${5*i}`);
}

let c = 0 ;
for(let i = 1 ; i < 16 ; i++){
    if(i > 8 ) c++;
}
console.log(c);
