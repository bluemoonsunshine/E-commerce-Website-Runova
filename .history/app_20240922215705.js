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