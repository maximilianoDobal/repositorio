var imgPrincipal = document.querySelector("#selecta");
var minis = document.querySelectorAll(".minis img");
var opacity = 0.5;

minis[0].style.opacity = opacity;

minis.forEach(img => img.addEventListener("click", imgActivada1));

function imgActivada1(e){

  minis.forEach(img => (img.style.opacity = 1));

  imgPrincipal.src = e.target.src;

  imgPrincipal.classList.add("fade-in");

 
  setTimeout(() => imgPrincipal.classList.remove("fade-in"), 500);


  e.target.style.opacity = opacity;
} 

/* SEGUNDA GALERIA */ 

var imgPrincipal2 = document.querySelector("#selecta2"); 
var minis2 = document.querySelectorAll(".minis2 img");  

minis2.forEach(img => img.addEventListener("click", imgActivada2)); 

function imgActivada2(e){ 

  minis2.forEach(img => (img.style.opacity = 1));

  imgPrincipal2.src = e.target.src;

  imgPrincipal2.classList.add("fade-in");

 
  setTimeout(() => imgPrincipal2.classList.remove("fade-in"), 500);


  e.target.style.opacity = opacity;
}