"use strict"

const btnWhatsapp = document.querySelector("#bt-whatsapp-floating")
  
function showBtnWhatsapp(btnWhatsapp, windowHeigthSize){

  if(windowHeigthSize >= 500){
    btnWhatsapp.classList.remove('btn-whatsapp-floating')
  }else{
    btnWhatsapp.classList.add('btn-whatsapp-floating')
  }

}
  
window.addEventListener("scroll", ()=>{
  const windowHeigthSize = window.pageYOffset

  showBtnWhatsapp(btnWhatsapp, windowHeigthSize)
})