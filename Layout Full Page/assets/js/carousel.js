"use strict"


const slides = document.querySelectorAll(".carousel-img")
const nextButton = document.getElementById("advance-button")
const previousButton = document.getElementById("return-button")

let currentSlideIndex = 0

nextButton.addEventListener("click", ()=>{

  currentSlideIndex === slides.length-1 ? currentSlideIndex = 0 : currentSlideIndex++
  
  slides.forEach(slide =>{
    slide.classList.remove("show-carousel-img")
  })
  
  slides[currentSlideIndex].classList.add("show-carousel-img")
})

previousButton.addEventListener("click", ()=>{
  
  currentSlideIndex === 0 ? currentSlideIndex = slides.length-1 : --currentSlideIndex

  slides.forEach(slide =>{
    slide.classList.remove("show-carousel-img")
  })
  slides[currentSlideIndex].classList.add("show-carousel-img")

})

