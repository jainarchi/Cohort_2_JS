// js Class and Obj 
// constructor and Prototype (shared memory)
// this keyword 


class Car {
    constructor(){
       this.carOwner = "Archi Jain"
       this.color = 'white'
       this.capacity = '6'
    }

   speedUp (){
    console.log('car speed up ');
    
   }
   applyBread (){
    console.log("apply break");
    
   }
}

let c1 = new Car();
let c2 = new Car();
console.log(c1.carOwner);
console.log(c2);


class Remote {
    constructor ( company , col , id ){
        this.company = company;
        this.color = col 
        this.length ='20cm'
        this.id = id 
    }

    powerOn(){
        console.log('power on ');

    }
    powerOff (){
        console.log('power off') ;
    }
}

let R1 = new Remote();
console.log(R1);

let R2 = new Remote('Lenevo' , 'white' , 233543);
console.log(R2);


let R3 = new Remote('Lenevo' , 'white' , 233543);
console.log(R3);


console.log(R2 === R3);
