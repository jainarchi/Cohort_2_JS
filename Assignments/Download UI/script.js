let cursor = document.querySelector(".cursor");
let blurCursor = document.querySelector(".blurCursor");

let btn = document.querySelector("button");
let inner = document.querySelector(".inner");
let showPer = document.getElementById("showPer")

document.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x - 4 + "px";
  cursor.style.top = dets.y - 4 + "px";

  blurCursor.style.left = dets.x - 50 + "px";
  blurCursor.style.top = dets.y - 50 + "px";
});

btn.addEventListener("click", () => {
  btn.disabled = true;
  let t = Math.floor(Math.random() * 5) + 1;
  let time = (t * 1000) / 100;

  
   let per = 0 ;

  let download = setInterval(function () {

    inner.style.width = per + '%';
    showPer.textContent = per ; 

   if(++per > 100 ){
      clearInterval(download);
      btn.disabled = false;

      setTimeout(function() {
        alert('MP3 Downloaded')
        inner.style.width = '0%'
        showPer.textContent = '0'
        btn.textContent ='Download Again';
          

        
      } , 200)
     
   }





  }, time);
});
