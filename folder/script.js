let page1 = document.getElementById("page1")


// page1.addEventListener("mousemove" , (e) =>{

//     document.body.style.setProperty('--x' , e.clientX +'px')
//     document.body.style.setProperty('--y' , e.clientY + 'px' )

// })


// page 2 logic 


let para = document.querySelector("#page2 p")
let randomCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'




para.addEventListener("mouseenter", () => {

    let count = 0;

      let intv = setInterval(function () {

        let str = para.textContent.split("").map((char, idx) => {
            return randomCharacter.split("")[Math.floor(Math.random() * 52)]
        }).join("")

       console.log(str);
       
       
        }, 10)


        setTimeout(() => {
            clearInterval(intv)
        }, 10 * 29)


    })