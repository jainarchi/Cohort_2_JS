// let age = +prompt('enter your age');  // convert into number

function validAge(age) {
  if (age === null) {
    console.log("you cancelled it");
  } else if (age.trim().length === 0) {
    console.log("give some input");
  } else if (isNaN(age)) {
    console.log("enter numbers only, without space ");
  } else {
    console.log(`your age is ${age}`);
  }
}

// let age = prompt('enter your age')
// validAge(age);

let password = (function () {
  let p = null;
  let again = 0 ;

  function set() {
    let pass = prompt("enter password to set");
    if(pass !== null){
        if (pass.trim().length > 3) {
      p = pass.trim();
      confirm("password set successfully");
    } else {
      alert("length must be greater than 3");
    }
    }
    
  }

  function show() {
    if (p === null) {
      console.log("not set yet");
    } else console.log(p);
  }

  function update() {
    set();
  }
  

  function login() {
    let open = confirm("Redirect to login.");
   
    if (open) {
         if( p === null) {
          console.log('Account not created yet');
          return ;
        }

       let enterpass = prompt('enter password to login')

       if(enterpass === null){
        alert('Login cancelled')
        return ;
       }

      if (enterpass === p) {
        console.log("successfully loged in");
        return;

      } else{
        alert('Password is incorrect')
        if(++again === 3){
            alert('Account Locked , try after 10 min')
            again = 0 ;
            return;
        }
        login()
      }  
      } 
    }
  

  return {
    set,
    show,
    login,
    update,
  };
})();

password.set();
// password.show()
// password.update()
// password.show()
password.login();



// level - 2 
// lock account if user enter incorrect password more than 2 times



