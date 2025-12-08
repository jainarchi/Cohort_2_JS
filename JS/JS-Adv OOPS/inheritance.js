class User {
    constructor(name , username , email){
        this.name = name 
        this.username = username
        this.email = email 
    }

    get role (){
        return 'user';
     }

    write (){
        console.log('Artical written by' , this.name );
    }
}

class Admin extends User {
    constructor(name , username , email  , role){
        super(name , username , email );
        this._role = role
    }

    // Override the getter to return your variable
    get role() {
        return this._role;
    } 
}




let  u1 = new User('Archi' , 'ajain.dev' , 'archi12@gmail.com' )
let admin1 = new Admin('Ayush' , 'admin_1' , 'admin1@mail.com' , 'manager' )


console.log(u1.role);
console.log(admin1.role);

u1.write();





// classical  inheritance - class -> class          extends class do share same reference 
//prototypal inheritance -   object -> object       


let bag = {
    company : 'abd',
    color : 'red'
    
}

let cap = Object.create(bag)              // prototypal inheritance  - ***here cap share bag's property  
console.log(cap.company);                 // company and color are present in prototype
console.log(cap.color);


