const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  console.log(inputs);
  

  let nameRegex = /^[a-zA-Z][a-zA-Z0-9]+$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  let nm = nameRegex.test(inputs[0].value);
  let email = emailRegex.test(inputs[1].value);
  let pass = passRegex.test(inputs[2].value);

  if (!nm || !email || !pass) {
    console.log(nm , email , pass);
    
    alert('Name must start with  letter, min 2+ characters, & contain only letters or numbers.Email must be a @gmail.com.Password must be 8+ characters, include an uppercase, lowercase & number.')
  } 
  
  else if (nm && email && pass) {
    alert('You have successfully signed up.')
     inputs.forEach(function(e){
        e.value ="";
     })
  }
});
