window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const logoText = document.querySelector(".logo-text");
    
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        logoText.classList.add("scrolled-logo");
    } else {
        navbar.classList.remove("scrolled");
        logoText.classList.remove("scrolled-logo");
    }
});

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 30){
        document.querySelector('header').classList.add('header-active');
    }
    else{
        document.querySelector('header').classList.remove('header-active');
    }

}

var swiper = new Swiper(".featured-slider", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    autoplay:{
        delay: 9500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        450:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        1200:{
            slidesPerView: 4,
        },
    },
});



