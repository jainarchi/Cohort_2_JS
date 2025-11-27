addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

// page 2 logic

let texts = document.querySelectorAll(".text")
let randomCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function revealText( para ) {
    let orginalText = para.textContent 
    let runing = false
    

  para.addEventListener("mouseenter", (e) => {
    let iteration = 0;

     if(runing) return 

     runing = true ;
    let intv = setInterval(() => {

       
      let str = orginalText.split("").map((char, index) => {
          if (index < iteration) {
            return char;
          }
          return randomCharacter.split("")[Math.floor(Math.random() * 52)];
        })
        .join("");

      iteration += 0.45;
      para.innerHTML = str;
    //   console.log(str);



      if (iteration >= orginalText.length) {
        clearInterval(intv);
        runing = false 
      }



    }, 30);


  });
}



texts.forEach((text) => {        // runs ONCE when the page loads.
    revealText(text);           
     // "sets up" the memory |  initialze function for every text separately & each func hold it running originalText 
     //   and listener for each element separately.                   
     // --- closure
})

















// let ptext = para.textContent ;

// para.addEventListener("mouseenter", () => {
//     let count = 0;

//       let intv = setInterval(function () {

//         let str = para.textContent.split("").map((char, idx) => {
//             return randomCharacter.split("")[Math.floor(Math.random() * 52)]
//         }).join("")

//         newtext = ptext.substring(0 , count+1) + str.substring(count+1)
//         para.textContent = newtext

//         count ++ ;
//        }, 80)

//         setTimeout(() => {
//             clearInterval(intv)
//         }, 80 * 29)

//     })
