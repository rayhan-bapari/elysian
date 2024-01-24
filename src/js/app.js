const menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
        menuBtn.classList.remove("open");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        menuBtn.classList.add("open");
        menuBtn.innerHTML = '<i class="fa-solid fa-times"></i>';
    }
});

console.log();
