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

let swiper = new Swiper(".projectsSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
