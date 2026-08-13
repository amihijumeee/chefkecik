// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });


    // Close menu after clicking a navigation link

    navMenu.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });

    });

}


// =========================================
// NEWSLETTER
// =========================================

const newsletterForm =
    document.getElementById("newsletterForm");

const newsletterMessage =
    document.getElementById("newsletterMessage");

if (newsletterForm && newsletterMessage) {

    newsletterForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const emailInput =
            document.getElementById("emailInput");

        const email =
            emailInput.value.trim();

        if (!email) {
            return;
        }

        newsletterMessage.textContent =
            "Thank you. You’re on the list.";

        newsletterForm.reset();

    });

}


// =========================================
// HERO REVEAL
// =========================================

// Show the hero immediately
// so it does not disappear while waiting
// for the scroll observer.

document
    .querySelectorAll(".hero .reveal")
    .forEach((element) => {

        element.classList.add("visible");

    });

