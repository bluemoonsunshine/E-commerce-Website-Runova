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

    const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 6, // Show 3 items at once
      spaceBetween: 20, // Space between product blocks
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      grabCursor: true, // Enable dragging with a cursor
      centeredSlides: false,
      breakpoints: {
        320: {
          slidesPerView: 1, // On small screens, show 1 slide
        },
        768: {
          slidesPerView: 2, // On medium screens, show 2 slides
        },
        1024: {
          slidesPerView: 3, // On large screens, show 3 slides
        }
      }
    });




