"use strict"


const slides = document.querySelectorAll(".carousel-img")
const nextButton = document.getElementById("advance-button")
const previousButton = document.getElementById("return-button")

const lestSlidIndex = slides.length-1
let currentSlideIndex = 0

const manipulatSlidesClasses = currentSlideIndex =>{
  slides.forEach(slide =>slide.classList.remove("show-carousel-img"))
  slides[currentSlideIndex].classList.add("show-carousel-img")
}

nextButton.addEventListener("click", ()=>{

  const correctSlidIndex = currentSlideIndex === lestSlidIndex ? currentSlideIndex = 0 : ++currentSlideIndex
  
  manipulatSlidesClasses(correctSlidIndex)
})

previousButton.addEventListener("click", ()=>{
  
  const correctSlidIndex = currentSlideIndex === 0 ? currentSlideIndex = lestSlidIndex : --currentSlideIndex

  manipulatSlidesClasses(correctSlidIndex)
})

window.addEventListener("load",()=>{
  setInterval(()=>{
    const correctSlidIndex = currentSlideIndex === lestSlidIndex ? currentSlideIndex = 0 : ++currentSlideIndex
    
    manipulatSlidesClasses(correctSlidIndex)
  }, 3000)
})