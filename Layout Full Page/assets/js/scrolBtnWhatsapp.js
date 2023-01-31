"use strict"

const btnWhatsapp = document.querySelector("#bt-whatsapp-floating")

console.log(btnWhatsapp)



function showBtnWhatsapp(btnWhatsapp){
  const windowHeigthSize = window.pageYOffset
  if(windowHeigthSize >= 500){
    btnWhatsapp.classList.remove('btn-whatsapp-floating')
  }else{
    btnWhatsapp.classList.add('btn-whatsapp-floating')
  }

}
  
window.addEventListener("scroll", ()=>{
  showBtnWhatsapp(btnWhatsapp)
})