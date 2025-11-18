let btn = document.querySelector("button");
let main = document.querySelector("main");



btn.addEventListener("click", function () {
  let circle = document.createElement("div");
  circle.classList.add("circle")
  let d = Math.floor(Math.random() * 26) + 5;

  
  let o = Math.random();

  circle.style.height = d +'vmin';
  circle.style.width = d + 'vmin';
  circle.style.opacity = o;

  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100) ;
  circle.style.top = y +"vh";
  circle.style.left = x + "vw";


  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  
  circle.style.border = '2px solid transparent'; 
  circle.style.borderImageSlice = '1';        
  circle.style.borderImageSource = `linear-gradient( rgb(${r}, ${g}, ${b}), white , rgb(${g}, ${b}, ${r}))`;

  main.appendChild(circle);


});
