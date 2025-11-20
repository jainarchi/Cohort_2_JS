let like = document.getElementById("like")
let img  = document.querySelector(".imgCont");

img.addEventListener("dblclick" , ()=>{
   
    like.style.opacity = 1 ;
    like.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
    like.style.transition = 'cubic-bezier(1,1.84,.87,.82) 0.3s';


    setTimeout(function(){
        like.style.transform = 'translate(-50%, -250%) scale(1) rotate(40deg)';   

    }, 900)

    setTimeout(function(){
         like.style.transform = 'translate(-50%, -50%) scale(0) rotate(-120deg)'
         like.style.transition = "none"
    } , 1200)
    
})



