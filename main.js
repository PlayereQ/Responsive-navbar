
const sideBar = document.querySelector(".bx");
const HIDDEN = document.querySelector(".down_bar");
const CLOSE = document.getElementById("close");



sideBar.addEventListener("click",()=> {
    HIDDEN.style.display="flex";
   

});



CLOSE.addEventListener("click",()=> {
    HIDDEN.style.display="none";
   

});


   
 

