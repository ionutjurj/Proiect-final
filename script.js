let portfolioModal1 = document.getElementById("portfolioModal1");
let portfolioModal2 = document.getElementById("portfolioModal2");
let portfolioModal3 = document.getElementById("portfolioModal3");
let messageSentModal = document.getElementById("submitSuccessMessage");

document.getElementById("portfolioItem1").onclick =  function() {
    portfolioModal1.style.display = "block";
   }

 
document.getElementById("portfolioItem2").onclick =  function() {
    portfolioModal2.style.display = "block";
   }  
   
document.getElementById("portfolioItem3").onclick =  function() {
    portfolioModal3.style.display = "block";
   }

document.getElementById("closeModal1").onclick = function() {
    portfolioModal1.style.display = "none";
}   

document.getElementById("closeModal2").onclick = function() {
    portfolioModal2.style.display = "none";
}

document.getElementById("closeModal3").onclick = function() {
    portfolioModal3.style.display = "none";
}

