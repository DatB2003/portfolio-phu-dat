// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");


    if (navLinks.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


// =========================
// CLOSE MOBILE MENU
// =========================

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


// =========================
// ACTIVE NAVIGATION
// =========================

const sections =
    document.querySelectorAll("main section");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop - 220 &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");


        if (
            item.getAttribute("href")
            === `#${current}`
        ) {

            item.classList.add("active");

        }

    });

});


// =========================
// FOOTER YEAR
// =========================

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(
        `
        .section-title,
        .skill-card,
        .soft-skill,
        .project-card,
        .timeline-item,
        .info-card,
        .contact-box
        `
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("active");


                    revealObserver
                        .unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.1
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


// =========================
// HEADER SCROLL EFFECT
// =========================

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 5px 30px rgba(0,0,0,0.18)";

    } else {

        header.style.boxShadow =
            "none";

    }

});