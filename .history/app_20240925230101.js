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







const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});