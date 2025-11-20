let btn = document.querySelector("button");
let main = document.querySelector("main");


// const TechStacks = [
//     "MERN Stack",
//     "MEAN Stack",
//     "LAMP Stack",
//     "Python Django",
//     "Ruby on Rails",
//     "Flutter Dart",
//     "Serverless Stack",
//     "Go / Gin",
//     "DSA with Java", 
//     "Java Full Stack" 
// ];



btn.addEventListener("click", function () {
  let box = document.createElement("div");
 
  let side = Math.floor(Math.random() * 50) + 5;
  let o = Math.random();
  let rotate = Math.random()*360;


  box.style.height = side + 'px';
  box.style.width = side + 'px';
  box.style.opacity = o + 0.3;
  box.style.borderRadius = "4px"
  box.style.transform = 'rotate(' + rotate + 'deg)';
  box.style.position = "absolute";
  box.style.background = `linear-gradient(45deg, red, pink  )`;


  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100) ;
  box.style.top = y +"vh";
  box.style.left = x + "vw";

 
  main.appendChild(box);

});
