// Navbar Section
const menu = document.querySelector(".menu");
const targets = document.querySelectorAll(".target");

menu.addEventListener("click", () => {
    targets.forEach((item) => {
        item.classList.toggle("change");
    });
});

// Icons Section
const icons = document.querySelectorAll(".section-1-icons i");
let counter = 1;

setInterval(() => {
    // Here we create a variable for the icon that has the .change class:
    const icon = document.querySelector(".section-1-icons .change");

    icon.classList.remove("change");

    if (counter === icons.length) {
        icons[0].classList.add("change");
        counter = 1;
    }
    else {
        icon.nextElementSibling.classList.add("change");
        counter++;
    }
}, 4000)