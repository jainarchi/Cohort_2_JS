let inps = document.querySelectorAll("input")
let ta = document.querySelector("textarea")
const form = document.querySelector("form")
const cardCont = document.querySelector('#cardCont')

form.addEventListener("submit" , function(dets) {
    dets.preventDefault();
   
    let card = document.createElement("div")
    card.classList.add('card');

    let nm = document.createElement("h3")
    let age = document.createElement("div")
    let email = document.createElement('div')
    let text = document.createElement('div')

    nm.textContent = inps[0].value;
    age.textContent = inps[1].value
    email.textContent = inps[2].value
    text.textContent = ta.value;

    card.appendChild(nm);
    card.appendChild(age);
    card.appendChild(email);
    card.appendChild(text);

    cardCont.append(card);


  inps.forEach(function(e){
     if (e.type !== 'submit') { 
            e.value = "";
      }
   })
    
    ta.value="";
})
