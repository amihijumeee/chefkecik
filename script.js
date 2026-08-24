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

  /* ============================================================
   SHOPPE CATEGORY FILTER + SORT
============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* ========================================================
       GET SHOPPE ELEMENTS
    ======================================================== */

    const shoppeGrid =
      document.getElementById(
        "shoppeProductGrid"
      );


    /*
      If this is not shoppe.html,
      stop this code.

      This prevents errors on
      homepage, outlet, academy etc.
    */

    if (!shoppeGrid) {
      return;
    }



    const productCards =
      Array.from(
        document.querySelectorAll(
          ".shoppe-product-card"
        )
      );


    const filterButtons =
      document.querySelectorAll(
        ".shoppe-page [data-filter]"
      );


    const categoryButtons =
      document.querySelectorAll(
        ".shoppe-page .category-btn"
      );


    const sortSelect =
      document.getElementById(
        "sortProducts"
      );


    const productCount =
      document.getElementById(
        "productCount"
      );



    /* ========================================================
       CURRENT SETTINGS
    ======================================================== */

    let currentCategory =
      "all";


    let currentSort =
      "latest";



    /* ========================================================
       UPDATE PRODUCT COUNT
    ======================================================== */

    function updateProductCount() {


      const visibleProducts =
        productCards.filter(
          card =>
            card.style.display !==
            "none"
        );


      const total =
        visibleProducts.length;


      if (total === 0) {


        productCount.textContent =
          "Showing 0 products";


      }

      else {


        productCount.textContent =
          `Showing 1–${total} of ${total} products`;


      }


    }



    /* ========================================================
       FILTER PRODUCTS
    ======================================================== */

    function filterProducts() {


      productCards.forEach(
        card => {


          const productCategory =
            card.dataset.category;


          /*
            ALL PRODUCTS
          */

          if (
            currentCategory === "all"
          ) {


            card.style.display =
              "";


          }


          /*
            SPECIFIC CATEGORY
          */

          else if (
            productCategory ===
            currentCategory
          ) {


            card.style.display =
              "";


          }


          /*
            HIDE OTHER PRODUCTS
          */

          else {


            card.style.display =
              "none";


          }


        }
      );


      updateProductCount();


    }



    /* ========================================================
       SORT PRODUCTS
    ======================================================== */

    function sortProducts() {


      const sortedProducts =
        [...productCards];



      /* ===============================
         LATEST / ORIGINAL ORDER
      =============================== */

      if (
        currentSort === "latest"
      ) {


        sortedProducts.sort(
          (a, b) => {


            return (
              Number(
                a.dataset.order
              ) -

              Number(
                b.dataset.order
              )
            );


          }
        );


      }



      /* ===============================
         LOWEST PRICE FIRST
      =============================== */

      else if (
        currentSort === "low"
      ) {


        sortedProducts.sort(
          (a, b) => {


            return (
              Number(
                a.dataset.price
              ) -

              Number(
                b.dataset.price
              )
            );


          }
        );


      }



      /* ===============================
         HIGHEST PRICE FIRST
      =============================== */

      else if (
        currentSort === "high"
      ) {


        sortedProducts.sort(
          (a, b) => {


            return (
              Number(
                b.dataset.price
              ) -

              Number(
                a.dataset.price
              )
            );


          }
        );


      }



      /* ===============================
         PUT PRODUCTS BACK IN GRID
         IN NEW ORDER
      =============================== */

      sortedProducts.forEach(
        card => {


          shoppeGrid.appendChild(
            card
          );


        }
      );


      /*
        Keep category filter active
        after sorting
      */

      filterProducts();


    }



    /* ========================================================
       CATEGORY BUTTONS
    ======================================================== */

    filterButtons.forEach(
      button => {


        button.addEventListener(
          "click",
          function (event) {


            event.preventDefault();


            currentCategory =
              this.dataset.filter;



            /* ===========================
               REMOVE ACTIVE STYLE
            =========================== */

            categoryButtons.forEach(
              categoryButton => {


                categoryButton
                  .classList
                  .remove(
                    "active"
                  );


              }
            );



            /* ===========================
               FIND MATCHING CATEGORY
            =========================== */

            const activeCategoryButton =
              document.querySelector(

                `.shoppe-page .category-btn[data-filter="${currentCategory}"]`

              );



            /* ===========================
               ACTIVATE CATEGORY
            =========================== */

            if (
              activeCategoryButton
            ) {


              activeCategoryButton
                .classList
                .add(
                  "active"
                );


            }



            /* ===========================
               FILTER PRODUCTS
            =========================== */

            filterProducts();


          }
        );


      }
    );



    /* ========================================================
       SORT DROPDOWN
    ======================================================== */

    sortSelect.addEventListener(
      "change",
      function () {


        currentSort =
          this.value;


        sortProducts();


      }
    );



    /* ========================================================
       FIRST LOAD
    ======================================================== */

    filterProducts();


  }
);

/* ============================================================
   RECIPE CATEGORY FILTER
============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  function () {


    const recipeGrid =
      document.getElementById(
        "recipeGrid"
      );


    /*
      Stop if this is not
      recipe.html
    */

    if (!recipeGrid) {
      return;
    }



    const recipeCards =
      document.querySelectorAll(
        ".recipe-card"
      );


    const recipeCategoryButtons =
      document.querySelectorAll(
        ".recipe-category"
      );


    const recipeEmpty =
      document.getElementById(
        "recipeEmpty"
      );



    /* ========================================================
       CATEGORY CLICK
    ======================================================== */

    recipeCategoryButtons.forEach(
      button => {


        button.addEventListener(
          "click",
          function () {


            const selectedCategory =
              this.dataset.recipeFilter;



            /* REMOVE ACTIVE */

            recipeCategoryButtons
              .forEach(btn => {

                btn.classList.remove(
                  "active"
                );

              });



            /* ADD ACTIVE */

            this.classList.add(
              "active"
            );



            let visibleRecipes =
              0;



            /* FILTER CARDS */

            recipeCards.forEach(
              card => {


                const recipeCategory =
                  card.dataset
                    .recipeCategory;



                if (
                  selectedCategory ===
                  "all"
                ) {


                  card.style.display =
                    "";


                  visibleRecipes++;


                }


                else if (
                  recipeCategory ===
                  selectedCategory
                ) {


                  card.style.display =
                    "";


                  visibleRecipes++;


                }


                else {


                  card.style.display =
                    "none";


                }


              }
            );



            /* EMPTY MESSAGE */

            if (
              visibleRecipes === 0
            ) {


              recipeEmpty.style.display =
                "block";


            }


            else {


              recipeEmpty.style.display =
                "none";


            }


          }
        );


      }
    );



    /* ========================================================
       RECIPE NEWSLETTER
    ======================================================== */

    const recipeNewsletter =
      document.getElementById(
        "recipeNewsletterForm"
      );


    const recipeMessage =
      document.getElementById(
        "recipeNewsletterMessage"
      );


    if (recipeNewsletter) {


      recipeNewsletter.addEventListener(
        "submit",
        function (event) {


          event.preventDefault();


          recipeMessage.textContent =
            "Thank you! You're subscribed.";


          recipeNewsletter.reset();


          setTimeout(
            function () {

              recipeMessage.textContent =
                "";

            },
            4000
          );


        }
      );


    }


  }
);

