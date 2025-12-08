// class expression  - can't hoist 
//  inheritance  , getter & setter


// let s1 = new Student();  

let Student = class {
    constructor (){
        this.section  = 'A' 
    }
}

let s1 = new Student();  
console.log(s1); 
 

class  User {
    constructor (name){
        this._name = name
    }

    get name (){
        return this._name 
    }
    set name (val){           
        this._name = val 
    }
}

let u1 = new User('Archi')
u1.name =  u1.name + ' jain'
console.log(u1.name );

// u.name - call get 
// u.name - call set 