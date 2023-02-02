"use strict"

const debounce = (func, wait, immediate) => {
  let timeout
  return (... args) => {
    const context = this
    const later = () => {
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
const headerMenu = document.querySelector('.header-menu')
const animateScrollClass = 'scrollAnimate'
const headerMenuFixed = 'header-menu-fixed'
  
function showBtnWhatsapp(btnWhatsapp, windowTopSize, windowHeightSize){
  windowTopSize >= windowHeightSize ? btnWhatsapp.classList.remove('btn-whatsapp-floating') : btnWhatsapp.classList.add('btn-whatsapp-floating')
}

function animeScroll(targetAnimeScroll, animateScrollClass, windowTopSize, windowHeightSize){
  targetAnimeScroll.forEach(element => {
    (windowTopSize + windowHeightSize) > element.offsetTop ? element.classList.add(animateScrollClass) : element.classList.remove(animateScrollClass)
  });
}

function animeHeaderMenu(headerMenu, windowTopSize){
  windowTopSize > 70 ? headerMenu.classList.add(headerMenuFixed) : headerMenu.classList.remove(headerMenuFixed)
}


window.addEventListener("scroll", debounce(() => {
  const windowTopSize = window.pageYOffset
  const windowHeightSize = (window.innerHeight * 3) / 4

  showBtnWhatsapp(btnWhatsapp, windowTopSize, windowHeightSize)
  animeScroll(targetAnimeScroll, animateScrollClass, windowTopSize, windowHeightSize)
  animeHeaderMenu(headerMenu, windowTopSize)

}, 200))