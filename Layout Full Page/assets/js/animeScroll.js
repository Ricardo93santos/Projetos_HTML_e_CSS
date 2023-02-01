"use strict"

const debounce = (func, wait, immediate) => {
  let timeout
  return (... args) =>{
    const context = this
    const later =function (){
      timeout = null
      if(!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if(callNow) func.apply(context, args)
  }
}

const btnWhatsapp = document.querySelector("#bt-whatsapp-floating")
const targetAnimeScroll = document.querySelectorAll('[data-anime]')
const animateScrollClass = 'scrollAnimate'
  
function showBtnWhatsapp(btnWhatsapp, windowTopSize, windowHeightSize){
  windowTopSize >= windowHeightSize ? btnWhatsapp.classList.remove('btn-whatsapp-floating') : btnWhatsapp.classList.add('btn-whatsapp-floating')
}

function animeScroll(targetAnimeScroll, animateScrollClass, windowTopSize, windowHeightSize){
  targetAnimeScroll.forEach(element => {
    (windowTopSize + windowHeightSize) > element.offsetTop ? element.classList.add(animateScrollClass) : element.classList.remove(animateScrollClass)
  });
}


window.addEventListener("scroll", debounce(()=>{
  const windowTopSize = window.pageYOffset
  const windowHeightSize = (window.innerHeight * 3) / 4

  showBtnWhatsapp(btnWhatsapp, windowTopSize, windowHeightSize)

  animeScroll(targetAnimeScroll, animateScrollClass, windowTopSize, windowHeightSize)

}, 200))