let like = document.getElementById("like")
let img  = document.querySelector(".imgCont");

img.addEventListener("dblclick" , ()=>{
   

    like.style.opacity = 1 ;

    let st = setTimeout(function(){
        like.style.opacity = 0 ;
      


    } , 900)
    
})
