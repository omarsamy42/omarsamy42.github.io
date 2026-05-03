let activeElement= document.querySelector('.cart');
function open_close_cart(){
    activeElement.classList.toggle('active')
}

 var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
    
document.body.appendChild(activeElement);