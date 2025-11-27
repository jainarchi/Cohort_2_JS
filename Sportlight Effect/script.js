

addEventListener("mousemove" , (e) =>{
    document.body.style.setProperty('--x' , e.clientX +'px')
    document.body.style.setProperty('--y' , e.clientY + 'px' )
})


// page 2 logic 

let para = document.querySelector("#page2 p")
let randomCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
let ptext = para.textContent ;



para.addEventListener("mouseenter", () => {
    let count = 0;

      let intv = setInterval(function () {

        let str = para.textContent.split("").map((char, idx) => {
            return randomCharacter.split("")[Math.floor(Math.random() * 52)]
        }).join("")


        newtext = ptext.substring(0 , count+1) + str.substring(count+1)
        para.textContent = newtext
        
      
        count ++ ;
       }, 80)


        setTimeout(() => {
            clearInterval(intv)
        }, 80 * 29)


    })

