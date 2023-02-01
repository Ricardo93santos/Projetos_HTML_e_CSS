"use strict"

const btnWhatsapp = document.querySelector("#bt-whatsapp-floating")
  
function showBtnWhatsapp(btnWhatsapp, windowTopSize, windowHeightSize){
  if(windowTopSize >= windowHeightSize){
    btnWhatsapp.classList.remove('btn-whatsapp-floating')
  }else{
    btnWhatsapp.classList.add('btn-whatsapp-floating')
  }
}
  
window.addEventListener("scroll", ()=>{
  const windowTopSize = window.pageYOffset
  const windowHeightSize = (window.innerHeight * 3) / 4

  showBtnWhatsapp(btnWhatsapp, windowTopSize, windowHeightSize)
})