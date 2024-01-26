const menuBtn = document.querySelector(".menu__btn");
const mobileMenu = document.querySelector(".mobile__menu");
const customerValue = document.querySelector(".customer__value");
const projectsValue = document.querySelector(".projects__value");
const agentsValue = document.querySelector(".agents__value");
const yearsText = document.querySelector("#currentYear");
const backToTopBtn = document.querySelector("#backToTop");

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

// customer 80
// projects 125
// agents 120
let customerCounter = 0;
let projectsCounter = 0;
let agentsCounter = 0;

const customerInterval = setInterval(() => {
    if (customerCounter < 80) {
        customerCounter++;
        customerValue.innerHTML = customerCounter + "+";
    } else {
        clearInterval(customerInterval);
    }
}, 20);

const projectsInterval = setInterval(() => {
    if (projectsCounter < 125) {
        projectsCounter++;
        projectsValue.innerHTML = projectsCounter + "+";
    } else {
        clearInterval(projectsInterval);
    }
}, 20);

const agentsInterval = setInterval(() => {
    if (agentsCounter < 120) {
        agentsCounter++;
        agentsValue.innerHTML = agentsCounter + "+";
    } else {
        clearInterval(agentsInterval);
    }
}, 20);

const currentYear = new Date().getFullYear();
yearsText.innerHTML = currentYear;

AOS.init();

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backToTopBtn.classList.remove("hidden");
        backToTopBtn.classList.add("opacity-100");
    } else {
        backToTopBtn.classList.add("hidden");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
