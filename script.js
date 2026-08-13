// =========================================
// LOAD COMPONENTS
// =========================================

document.addEventListener("DOMContentLoaded", function () {

  // =========================================
  // LOAD NAVBAR
  // =========================================

  fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {

      const navbar = document.getElementById("navbar");

      if (navbar) {
        navbar.innerHTML = data;
        // initializeNavbar();
      }

    })
    .catch(error => {
      console.error("Error loading navbar:", error);
    });


  // =========================================
  // LOAD FOOTER
  // =========================================

  fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {

      const footer = document.getElementById("footer");

      if (footer) {
        footer.innerHTML = data;
        // initializeNewsletter();
      }

    })
    .catch(error => {
      console.error("Error loading footer:", error);
    });
    


  // =========================================
  // LOAD OUTLET
  // =========================================

  if (document.querySelector(".outlet-info")) {
    loadOutlet();
  }


  // =========================================
  // HERO REVEAL
  // =========================================

  document
    .querySelectorAll(".hero .reveal")
    .forEach((element) => {

      element.classList.add("visible");

    });

});


// =========================================
// OUTLET
// =========================================

function loadOutlet() {

  const params =
    new URLSearchParams(window.location.search);

  const outlet =
    params.get("outlet");


  const outletSections =
    document.querySelectorAll(".outlet-info");


  // Hide all outlets first

  outletSections.forEach(section => {

    section.style.display = "none";

  });


  // =========================================
  // SHOW SELECTED OUTLET
  // =========================================

  if (outlet === "eco-majestic") {

    document.getElementById("eco-majestic")
      .style.display = "block";


  } else if (outlet === "seduduk") {

    document.getElementById("seduduk")
      .style.display = "block";


  } else if (outlet === "tuah") {

    document.getElementById("tuah")
      .style.display = "block";


  } else {

    // Default outlet

    document.getElementById("eco-majestic")
      .style.display = "block";

  }

}

  // =========================================
  // MOBILE MENU
  // =========================================

  // if (menuToggle && navMenu) {

  //   menuToggle.addEventListener("click", () => {

  //     const isOpen =
  //       navMenu.classList.toggle("open");


  //     menuToggle.setAttribute(
  //       "aria-expanded",
  //       String(isOpen)
  //     );

  //   });


  //   // Close menu after clicking a link

  //   navMenu.querySelectorAll("a").forEach((link) => {

  //     link.addEventListener("click", () => {

  //       navMenu.classList.remove("open");

  //       menuToggle.setAttribute(
  //         "aria-expanded",
  //         "false"
  //       );

  //     });

  //   });

  // }


