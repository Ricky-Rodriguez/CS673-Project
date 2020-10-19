const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-items");
const header = document.querySelector("header");

//The nav header

window.addEventListener("scroll", function() {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle("scrolling-active", windowPosition)
});