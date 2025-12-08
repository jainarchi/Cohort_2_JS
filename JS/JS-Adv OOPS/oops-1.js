// js Class and Obj 
// constructor and Prototype (shared memory)
// this keyword 


class Car {
    constructor(){
       this.carOwner = "Hina Jain"
       this.color = 'white'
       this.capacity = '6'
    //    this.p = ()=>{
    //     console.log('only es5 func part of the prototype');
    //   }
    }

   speedUp (){
    console.log('car speeding up ');
    
   }
   applyBread (){
    console.log("applying brakes");
    
   }

    p = ()=>{                                     //  p convert into obj property 
        console.log('only es5 func part of the prototype');
    }
}

let c1 = new Car();
let c2 = new Car();
console.log(c1.carOwner);
console.log(c2);

console.log(c2.hasOwnProperty('p')); 
console.log(c1.p === c2.p);




// class Remote {
//     constructor ( company , col , id ){
//         this.company = company;
//         this.color = col 
//         this.length ='20cm'
//         this.id = id 
//     }

//     powerOn(){
//         console.log('power on ')
//     }
//     powerOff (){
//         console.log('power off')
//     }
// }

// let R1 = new Remote();
// // console.log(R1);

// let R2 = new Remote('Lenevo' , 'white' , 233543);
// let R3 = new Remote('Lenevo' , 'white' , 233543);

// console.log(R2 === R3);

// // R3.working();  error 
// Remote.prototype.working  = function( val = 20 ){
//     console.log('remote is working after ' +  val);
// }

// R1.working('hii');
// R2.working('45');
// R3.working(); 

