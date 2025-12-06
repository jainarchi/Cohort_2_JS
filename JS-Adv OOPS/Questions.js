
class Users {
    constructor(name, email) {
        this.name = name;
        this.email = email;

    }

    logIn() {
        console.log('loged in');

    }
}
let u1 = new Users('archi', 'aj@mail.com')
let u2 = new Users('hina', 'hinaj.ocm')

console.log(u2.logIn === u1.logIn);



class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }

    drive() {
        console.log(this.brand, 'have a speed of ', this.speed);

    }
}

let c1 = new Car('BMW', '34km/h')
let c2 = new Car('Honddi', '45km/h')

c1.drive();
c2.drive();

//If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?
// manually create all objects 
// memory wastage
// hard maintenance - update comman func in all objects.



class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    intro() {
        console.log(this.rollNo, this.name);
    }

    presentation = () => {                    // only es5 func become part of prototype
        console.log('student give presentation');

    }
}

let s1 = new Student('archi', '877867')
let s2 = new Student('hina', '7879675')

s1.intro()
s2.intro()
console.log(s1.intro === s2.intro);    // true
console.log(s1.intro() === s2.intro());  // true    undefine === undefine
// if  func return then check by () - false 

console.log(s1.presentation === s2.presentation);

//--------------------------
function User(name) {
    this.name = name
}

User.prototype.login = function () {
    console.log('logged in');
}

let user1 = new User('Aena')
let user2 = new User('Mahi')

console.log(user1.login === user2.login);

user1.login()
user2.login()

// --------------------------


function print ( a=7, b){
    this.login() 
    console.log( a , b );
    
}

obj = {
    name : 'abcd xyz'
}

print.call(user1 , 'j' , 80)

// print.bind(obj , 30 , 'A')()

// print.apply(obj , [89 , 90])


//Borrow a method from one object and run it for another object using call.
let  teacher ={
    name : 'Primila Mahi',
    subject : 'Science',
    intro : function(){
        console.log('My name is' ,this.name , 'and my subject' , this.subject );
    }
}

teacher.intro()


let std = {
    name : 'Rema',
    subject : 'Art',
}

teacher.intro.call(std)


let laptop = {
    brand : 'Dell',
    price : 50000,
    start : function(){
        console.log('welcome Window !');
    },

    incPrice : function(){
       this.price = this.price + (this.price /10)
    }

}
console.log(laptop.price);

laptop.incPrice()
console.log(laptop.price);


// for 10 laptop what u do 

class Laptop{
    constructor(brand , price){
        this.brand = brand;
        this.price = price ;
    }

    start(){
        console.log(this.brand , 'laptop starts');
    }

    detail(){
        console.log(this.brand , 'with price' , this.price); 
    }

    incPrice(){
        this.price = this.price + (this.price / 10);
    }
}

let leptop1 = new Laptop('Dell' , 50000)
let leptop2 = new Laptop('HP' , 60000) ;


leptop1.detail()
leptop1.incPrice();
leptop1.detail()

leptop2.detail()
leptop2.incPrice()
leptop2.detail()

// -----------------------------------------


class Employee {
    constructor (name , salary ){
        this.salary = salary ;
        this.name = name ;
    }

    showDetails(){
        console.log(this.name , 'has a salary' , this.salary);
    }
    dets(){
        return this.name , 'has a salary' , this.salary;
    }
}

let e1 = new Employee('Jenny', 30000)
let e2 = new Employee('Ani', 28000) ;
let e3 = new Employee('Archi', 48000);

console.log(e1.showDetails === e2.showDetails); // true 
console.log(e1.showDetails() === e2.showDetails());  // true
// not return -  both undefine 


console.log(e1.dets === e2.dets);   // true
console.log(e1.dets() === e2.dets()); // false 





//--------------  SECTION 3    ------------------

class BankAccount {
    constructor (name , balance){
        this.name = name ;
        this.balance = balance ;
    }
    
    accDetails(){
        console.log( 'Acc Holder Name-', this.name , '| balance-' , this.balance);
    }

    accBal(){
        console.log('Bal:', this.balance);
    }

    deposit(amt){
        if(amt > 0){
            this.balance += amt;
            this.accBal();
        }
        else console.error('wrong entered');
    }

    withdrawal(amt){
         if(amt < this.balance){
            this.balance -= amt
            this.accBal()
         }
         else console.error('balance is less')
    }
}

let C1 = new BankAccount('Ani' , 2000);
C1.accDetails()
C1.deposit(3000)
C1.withdrawal(1000)





//----------   ***********   --------

// SECTION 4: Understanding this (Very Important)


// Create an object profile with a property username and a method printName that logs this.username.
// 		Call the method normally and observe the output.
// 		Store the method in a separate variable and call it.
//      Observe what happens to this and explain why.
// 		Modify the code so that this works correctly again.

let profile = {
    userName : 'Archi_Code',
    printName : function(){
        console.log(this.userName);
        
    }
}
// let showName = profile.printName()  // 'Archi_Code'
// showName

let showName = profile.printName ;  // only func ref copy here this -> window 
showName()  // then func call without dot


// bind profile obj with func -> dot | set this val 


showName.call(profile)

showName.bind(profile)()

showName.apply(profile)

let show_P = profile.printName.bind(profile)
show_P()





// SECTION 5: Constructor Function and Prototype
// 		Create a constructor function called Vehicle that accepts type and wheels.
// 		Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 		Move the same method to Vehicle.prototype and repeat the test.
// 		Explain why the prototype approach is preferred -> prevent memory wastage 



function Vehicle(type, wheels) {
    this.type = type;
    this.wheels = wheels;
}

Vehicle.prototype.details = function () {
    console.log(this.type, this.wheels);

}

let v1 = new Vehicle('car', 4)
let v2 = new Vehicle('Activa', 2)


console.log(v1.details === v2.details);
v1.details()
v2.details()

// ------------------------

function showBrand (){
    console.log(this.brand);
    
}

let gift  = {
    brand : 'Archie'
}
let obj2 = {
    brand : 'abcd' 
}


showBrand.call(gift)
showBrand.call(obj2)



// Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.

// -  apply accept max 2 parameter (this's val , array)
// use call when u know arg
// use apply when u have a list of data (eg array )


function introduce (city  , role){
    console.log(this.name ,  role , city );

}

let emp = {
    name : 'archi',
}

introduce.apply(emp , ['Noida' , 'Software Engineer'])



// Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks

// - it keeps connection alive with that object. no matter from where the func called .
// bind execute at runtime 

let retFun = greet.bind(emp)
retFun()


function greet (){                    // js read at compile time 
    console.log('Hello' , this.name);
    
}

