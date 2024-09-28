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

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const logoText = document.querySelector(".logo-text");
    const links = document.querySelectorAll(".navbar ul li a");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        logoText.classList.add("scrolled-logo");
        links.forEach(link => link.style.color = '#000'); // Change to black
    } else {
        navbar.classList.remove("scrolled");
        logoText.classList.remove("scrolled-logo");
        links.forEach(link => link.style.color = '#fff'); // Change to white
    }
});

/* Add-to-cart popup functionality */
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const cart = document.getElementById('cart');
        cart.classList.toggle('show');
    });
});






