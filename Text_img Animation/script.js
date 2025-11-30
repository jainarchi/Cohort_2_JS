let imgs= document.querySelectorAll("img");
let boxes = document.querySelectorAll("div")


boxes.forEach((box)=>{
    
    box.addEventListener("mouseenter"  , ()=>{
          box.childNodes[1].style.opacity = 1    
    })

    box.addEventListener("mouseleave" , ()=>{
         box.childNodes[1].style.opacity = 0 
    })

    box.addEventListener("mousemove" , (dets)=>{
        box.childNodes[1].style.left = dets.x + 'px' ;
        box.childNodes[1].style.transform = `translate(-50% , 0%)`
    })
})
