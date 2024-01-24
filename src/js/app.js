const menuBtn = document.querySelector(".menu__btn");
const mobileMenu = document.querySelector(".mobile__menu");

menuBtn.addEventListener("click", () => {
    const isMenuShown = mobileMenu.classList.toggle("show");

    menuBtn.innerHTML = isMenuShown ? '<i class="fa-solid fa-times"></i>' : '<i class="fa-solid fa-bars"></i>';

    if (isMenuShown) {
        mobileMenu.classList.remove("hidden");
    } else {
        mobileMenu.classList.add("hidden");
    }
});
