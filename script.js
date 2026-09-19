// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Fechar menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menu");
    }

});


// FECHAR MENU AO CLICAR

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menu");

    });

});


// ALTERNAR TEMA

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.documentElement.setAttribute("data-theme", "dark");

    themeToggle.textContent = "☀";

} else {

    themeToggle.textContent = "☾";

}


themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");


    if (currentTheme === "dark") {

        document.documentElement.removeAttribute("data-theme");

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "☾";

    } else {

        document.documentElement.setAttribute("data-theme", "dark");

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "☀";

    }

});


// ANO AUTOMÁTICO

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// ANIMAÇÃO AO APARECER NA TELA

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.1
    }

);


sections.forEach((section) => {

    observer.observe(section);

});