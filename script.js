const burger = document.querySelector(".menu-icon");
const navLink = document.querySelector(".nav-links");

const ActivateNavBar = () => {
    burger.addEventListener("click", () => {
        navLink.classList.toggle("nav-active");
    })
}
ActivateNavBar();