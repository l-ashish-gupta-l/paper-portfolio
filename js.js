var card1 = document.querySelector(".card1")
console.log(card1)
var card2 = document.querySelector(".card2")
console.log(card2)
var card3 = document.querySelector(".card3")
console.log(card3)
var card4 = document.querySelector(".card4")
console.log(card4)

card1.addEventListener("mouseover", function(){
   card2.style.transform = "translateX(80%)"   
   card3.style.transform = "translateX(100%)"   
   card4.style.transform = "translateX(130%)"   
   
})
card1.addEventListener("mouseleave", function(){
    card2.style.transform = "translateX(40%)"
    card3.style.transform = "translateX(80%)"
    card4.style.transform = "translateX(120%)"
   
} )
card2.addEventListener("mouseover", function(){
//    card2.style.transform = "translateX(80%)"   
   card3.style.transform = "translateX(120%)"   
   card4.style.transform = "translateX(150%)"   
   
})
card2.addEventListener("mouseleave", function(){
    // card2.style.transform = "translateX(40%)"
    card3.style.transform = "translateX(80%)"
    card4.style.transform = "translateX(120%)"
    
} )
card3.addEventListener("mouseover", function(){
//    card2.style.transform = "translateX(80%)"   
//    card3.style.transform = "translateX(120%)"   
   card4.style.transform = "translateX(160%)"   
   
})
card3.addEventListener("mouseleave", function(){
    // card2.style.transform = "translateX(40%)"
    // card3.style.transform = "translateX(80%)"
    card4.style.transform = "translateX(120%)"
} )