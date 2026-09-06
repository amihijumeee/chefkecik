// ============================================================
// CHEF KECIK SHARED JAVASCRIPT
// ============================================================


// ============================================================
// LOAD COMPONENTS
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {


    // ========================================================
    // NAVBAR
    // ========================================================

    fetch("components/navbar.html")
      .then(response => response.text())
      .then(data => {

        const navbar =
          document.getElementById(
            "navbar"
          );

        if (navbar) {

          navbar.innerHTML =
            data;

        }

      })
      .catch(error => {

        console.error(
          "Error loading navbar:",
          error
        );

      });



    // ========================================================
    // FOOTER
    // ========================================================

    fetch("components/footer.html")
      .then(response => response.text())
      .then(data => {

        const footer =
          document.getElementById(
            "footer"
          );

        if (footer) {

          footer.innerHTML =
            data;

        }

      })
      .catch(error => {

        console.error(
          "Error loading footer:",
          error
        );

      });



    // ========================================================
    // OUTLET
    // ========================================================

    if (
      document.querySelector(
        ".outlet-info"
      )
    ) {

      loadOutlet();

    }



    // ========================================================
    // HERO REVEAL
    // ========================================================

    document
      .querySelectorAll(
        ".hero .reveal"
      )
      .forEach(
        element => {

          element.classList.add(
            "visible"
          );

        }
      );


  }
);



// ============================================================
// OUTLET PAGE
// ============================================================

function loadOutlet() {


  const params =
    new URLSearchParams(
      window.location.search
    );


  const outlet =
    params.get(
      "outlet"
    );


  const outletSections =
    document.querySelectorAll(
      ".outlet-info"
    );


  outletSections.forEach(
    section => {

      section.style.display =
        "none";

    }
  );


  let selectedOutlet =
    "eco-majestic";


  if (
    outlet === "seduduk"
  ) {

    selectedOutlet =
      "seduduk";

  }


  else if (
    outlet === "tuah"
  ) {

    selectedOutlet =
      "tuah";

  }


  else if (
    outlet === "eco-majestic"
  ) {

    selectedOutlet =
      "eco-majestic";

  }


  const selectedSection =
    document.getElementById(
      selectedOutlet
    );


  if (selectedSection) {

    selectedSection.style.display =
      "block";

  }


}



// ============================================================
// SHOPPE CATEGORY FILTER + SORT
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {


    const shoppeGrid =
      document.getElementById(
        "shoppeProductGrid"
      );


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


    let currentCategory =
      "all";


    let currentSort =
      "latest";



    // ========================================================
    // UPDATE PRODUCT COUNT
    // ========================================================

    function updateProductCount() {


      if (!productCount) {
        return;
      }


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



    // ========================================================
    // FILTER PRODUCTS
    // ========================================================

    function filterProducts() {


      productCards.forEach(
        card => {


          const productCategory =
            card.dataset.category;


          if (
            currentCategory ===
              "all"

            ||

            productCategory ===
              currentCategory
          ) {

            card.style.display =
              "";

          }

          else {

            card.style.display =
              "none";

          }


        }
      );


      updateProductCount();


    }



    // ========================================================
    // SORT PRODUCTS
    // ========================================================

    function sortProducts() {


      const sortedProducts =
        [...productCards];


      if (
        currentSort === "latest"
      ) {


        sortedProducts.sort(
          (a, b) =>

            Number(
              a.dataset.order
            )

            -

            Number(
              b.dataset.order
            )
        );


      }


      else if (
        currentSort === "low"
      ) {


        sortedProducts.sort(
          (a, b) =>

            Number(
              a.dataset.price
            )

            -

            Number(
              b.dataset.price
            )
        );


      }


      else if (
        currentSort === "high"
      ) {


        sortedProducts.sort(
          (a, b) =>

            Number(
              b.dataset.price
            )

            -

            Number(
              a.dataset.price
            )
        );


      }


      sortedProducts.forEach(
        card => {

          shoppeGrid.appendChild(
            card
          );

        }
      );


      filterProducts();


    }



    // ========================================================
    // CATEGORY BUTTONS
    // ========================================================

    filterButtons.forEach(
      button => {


        button.addEventListener(
          "click",
          function (event) {


            event.preventDefault();


            currentCategory =
              this.dataset.filter;


            categoryButtons.forEach(
              categoryButton => {

                categoryButton
                  .classList
                  .remove(
                    "active"
                  );

              }
            );


            const activeCategoryButton =
              document.querySelector(

                `.shoppe-page .category-btn[data-filter="${currentCategory}"]`

              );


            if (
              activeCategoryButton
            ) {

              activeCategoryButton
                .classList
                .add(
                  "active"
                );

            }


            filterProducts();


          }
        );


      }
    );



    // ========================================================
    // SORT SELECT
    // ========================================================

    if (sortSelect) {


      sortSelect.addEventListener(
        "change",
        function () {


          currentSort =
            this.value;


          sortProducts();


        }
      );


    }


    filterProducts();


  }
);



// ============================================================
// RECIPE CATEGORY FILTER + NEWSLETTER
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {


    const recipeGrid =
      document.getElementById(
        "recipeGrid"
      );


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



    // ========================================================
    // CATEGORY FILTER
    // ========================================================

    recipeCategoryButtons.forEach(
      button => {


        button.addEventListener(
          "click",
          function () {


            const selectedCategory =
              this.dataset
                .recipeFilter;


            recipeCategoryButtons
              .forEach(
                btn => {

                  btn.classList.remove(
                    "active"
                  );

                }
              );


            this.classList.add(
              "active"
            );


            let visibleRecipes =
              0;


            recipeCards.forEach(
              card => {


                const recipeCategory =
                  card.dataset
                    .recipeCategory;


                if (
                  selectedCategory ===
                    "all"

                  ||

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


            if (recipeEmpty) {


              recipeEmpty.style.display =

                visibleRecipes === 0

                  ? "block"

                  : "none";


            }


          }
        );


      }
    );



    // ========================================================
    // NEWSLETTER
    // ========================================================

    const recipeNewsletter =
      document.getElementById(
        "recipeNewsletterForm"
      );


    const recipeMessage =
      document.getElementById(
        "recipeNewsletterMessage"
      );


    if (
      recipeNewsletter &&
      recipeMessage
    ) {


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



// ============================================================
// BAKING CLASS DETAIL VIEW
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {


    const overview =
      document.getElementById(
        "bakingOverview"
      );


    const detailView =
      document.getElementById(
        "classDetailView"
      );


    if (
      !overview ||
      !detailView
    ) {

      return;

    }



    // ========================================================
    // BAKING CLASS DATA
    // ========================================================

    const classes = {


      1: {

        number:
          "01",

        title:
          "Baking Basics",

        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90",

        intro:
          "Build a strong foundation in baking while learning essential techniques in a relaxed and beginner-friendly class.",

        duration:
          "3 Hours",

        level:
          "Beginner",

        schedule:
          "Every Sat & Sun",

        learning: [

          "Understand essential baking ingredients",

          "Learn basic mixing and preparation techniques",

          "Understand baking temperatures and timing",

          "Practice simple finishing techniques"

        ]

      },


      2: {

        number:
          "02",

        title:
          "Cake Decorating",

        image:
          "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=90",

        intro:
          "Explore cake decorating techniques and learn how to give your cakes a beautiful and polished finish.",

        duration:
          "3 Hours",

        level:
          "All Levels",

        schedule:
          "Every Sat & Sun",

        learning: [

          "Prepare cakes for decorating",

          "Learn basic piping techniques",

          "Create clean and balanced finishes",

          "Explore simple decorative styles"

        ]

      },


      3: {

        number:
          "03",

        title:
          "Cookies & Brownies",

        image:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=90",

        intro:
          "Learn how to create delicious cookies and brownies while understanding texture, flavour and consistency.",

        duration:
          "2.5 Hours",

        level:
          "Beginner",

        schedule:
          "Every Fri, Sat & Sun",

        learning: [

          "Prepare cookie and brownie mixtures",

          "Understand texture and consistency",

          "Learn correct baking temperatures",

          "Create delicious homemade treats"

        ]

      },


      4: {

        number:
          "04",

        title:
          "Advanced Baking",

        image:
          "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=90",

        intro:
          "Take your baking skills further with more advanced techniques designed for bakers ready for the next challenge.",

        duration:
          "4 Hours",

        level:
          "Intermediate",

        schedule:
          "Every Sat & Sun",

        learning: [

          "Develop advanced baking techniques",

          "Improve consistency and presentation",

          "Learn detailed finishing methods",

          "Build confidence with complex recipes"

        ]

      }


    };



    // ========================================================
    // VIEW DETAILS
    // ========================================================

    const viewButtons =
      document.querySelectorAll(
        ".baking-view-button[data-class]"
      );


    viewButtons.forEach(
      button => {


        button.addEventListener(
          "click",
          function (event) {


            event.preventDefault();


            const classNumber =
              this.dataset.class;


            const selectedClass =
              classes[
                classNumber
              ];


            if (!selectedClass) {
              return;
            }


            const detailImage =
              document.getElementById(
                "classDetailImage"
              );


            detailImage.src =
              selectedClass.image;


            detailImage.alt =
              selectedClass.title;


            document.getElementById(
              "classDetailNumber"
            ).textContent =
              selectedClass.number;


            document.getElementById(
              "classDetailTitle"
            ).textContent =
              selectedClass.title;


            document.getElementById(
              "classDetailIntro"
            ).textContent =
              selectedClass.intro;


            document.getElementById(
              "classDetailDuration"
            ).textContent =
              selectedClass.duration;


            document.getElementById(
              "classDetailLevel"
            ).textContent =
              selectedClass.level;


            document.getElementById(
              "classDetailSchedule"
            ).textContent =
              selectedClass.schedule;



            // ==============================================
            // LEARNING
            // ==============================================

            const learningGrid =
              document.getElementById(
                "classLearningGrid"
              );


            learningGrid.innerHTML =
              "";


            selectedClass.learning
              .forEach(
                function (
                  item,
                  index
                ) {


                  const learningCard =
                    document.createElement(
                      "div"
                    );


                  learningCard.className =
                    "learning-card";


                  learningCard.innerHTML = `

                    <span class="learning-check">
                      ✓
                    </span>

                    <div>

                      <small>
                        0${index + 1}
                      </small>

                      <p>
                        ${item}
                      </p>

                    </div>

                  `;


                  learningGrid.appendChild(
                    learningCard
                  );


                }
              );



            // ==============================================
            // WHATSAPP
            // ==============================================

            const message =

              `Hi Chef Kecik, I'm interested in the ${selectedClass.title} baking class. May I know more details?`;


            const whatsappUrl =

              "https://wa.me/60122413678?text=" +

              encodeURIComponent(
                message
              );


            const firstWhatsapp =
              document.getElementById(
                "classWhatsappButton"
              );


            const secondWhatsapp =
              document.getElementById(
                "classBottomWhatsapp"
              );


            if (firstWhatsapp) {

              firstWhatsapp.href =
                whatsappUrl;

            }


            if (secondWhatsapp) {

              secondWhatsapp.href =
                whatsappUrl;

            }



            // ==============================================
            // SWITCH VIEW
            // ==============================================

            overview.style.display =
              "none";


            detailView.style.display =
              "block";


            window.scrollTo({

              top:
                0,

              behavior:
                "smooth"

            });


          }
        );


      }
    );



    // ========================================================
    // BACK TO CLASSES
    // ========================================================

    const backButton =
      document.getElementById(
        "backToClasses"
      );


    if (backButton) {


      backButton.addEventListener(
        "click",
        function () {


          detailView.style.display =
            "none";


          overview.style.display =
            "block";


          window.scrollTo({

            top:
              0,

            behavior:
              "smooth"

          });


        }
      );


    }


  }
);



// ============================================================
// RECIPE DETAIL VIEW
// SAME RECIPE.HTML PAGE
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {


    const recipeOverview =
      document.getElementById(
        "recipeOverview"
      );


    const recipeDetailView =
      document.getElementById(
        "recipeDetailView"
      );


    if (
      !recipeOverview ||
      !recipeDetailView
    ) {

      return;

    }



    // ========================================================
    // RECIPE DATA
    // ========================================================

    const recipes = {


      // ======================================================
      // RECIPE 1
      // ======================================================

      1: {

        title:
          "Classic Chocolate Cake",

        category:
          "CAKES",

        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90",

        description:
          "Rich and moist chocolate cake, perfect for celebrations, afternoon treats or whenever you're craving something chocolatey.",

        time:
          "60 mins",

        level:
          "Intermediate",

        serving:
          "8–10 servings",

        ingredients: [

          "1¾ cups all-purpose flour",

          "¾ cup cocoa powder",

          "1½ cups sugar",

          "2 large eggs",

          "1 cup milk",

          "½ cup vegetable oil",

          "1 teaspoon vanilla extract",

          "1 teaspoon baking powder"

        ],

        steps: [

          {

            title:
              "Prepare the oven",

            text:
              "Preheat the oven and prepare your cake tin by lightly greasing and lining it."

          },

          {

            title:
              "Mix dry ingredients",

            text:
              "Combine the flour, cocoa powder, sugar and baking powder until evenly mixed."

          },

          {

            title:
              "Add wet ingredients",

            text:
              "Add the eggs, milk, oil and vanilla. Mix until the batter is smooth and well combined."

          },

          {

            title:
              "Bake",

            text:
              "Pour the batter into the prepared tin and bake until a skewer inserted into the centre comes out clean."

          },

          {

            title:
              "Cool and decorate",

            text:
              "Allow the cake to cool completely before adding your favourite chocolate frosting."

          }

        ],

        tip:
          "Allow your ingredients to come closer to room temperature before mixing for a smoother cake batter."

      },



      // ======================================================
      // RECIPE 2
      // ======================================================

      2: {

        title:
          "Red Velvet Cupcakes",

        category:
          "CUPCAKES",

        image:
          "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=90",

        description:
          "Soft and fluffy red velvet cupcakes finished with a smooth cream cheese frosting.",

        time:
          "45 mins",

        level:
          "Beginner",

        serving:
          "10–12 cupcakes",

        ingredients: [

          "1½ cups all-purpose flour",

          "2 tablespoons cocoa powder",

          "¾ cup sugar",

          "1 large egg",

          "½ cup vegetable oil",

          "½ cup buttermilk",

          "1 teaspoon vanilla",

          "Red food colouring"

        ],

        steps: [

          {

            title:
              "Prepare cupcake tray",

            text:
              "Preheat the oven and line your cupcake tray with cupcake cases."

          },

          {

            title:
              "Mix dry ingredients",

            text:
              "Combine the flour and cocoa powder in a bowl."

          },

          {

            title:
              "Prepare wet mixture",

            text:
              "Whisk together the sugar, egg, oil, buttermilk, vanilla and food colouring."

          },

          {

            title:
              "Combine",

            text:
              "Gradually add the dry ingredients and mix gently until combined."

          },

          {

            title:
              "Bake and decorate",

            text:
              "Bake until the cupcakes are cooked through. Cool completely before adding cream cheese frosting."

          }

        ],

        tip:
          "Do not overmix the batter. Gentle mixing helps keep the cupcakes soft and fluffy."

      },



      // ======================================================
      // RECIPE 3
      // ======================================================

      3: {

        title:
          "Chocolate Chip Cookies",

        category:
          "COOKIES",

        image:
          "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=90",

        description:
          "Crispy around the edges, chewy in the middle and packed with delicious chocolate chips.",

        time:
          "30 mins",

        level:
          "Beginner",

        serving:
          "20–24 cookies",

        ingredients: [

          "2 cups all-purpose flour",

          "½ teaspoon baking soda",

          "¾ cup butter",

          "¾ cup brown sugar",

          "½ cup white sugar",

          "1 large egg",

          "1 teaspoon vanilla",

          "1½ cups chocolate chips"

        ],

        steps: [

          {

            title:
              "Prepare",

            text:
              "Preheat the oven and prepare a baking tray with baking paper."

          },

          {

            title:
              "Cream butter and sugar",

            text:
              "Mix the butter with both sugars until smooth and creamy."

          },

          {

            title:
              "Add egg and vanilla",

            text:
              "Add the egg and vanilla and mix until completely combined."

          },

          {

            title:
              "Add flour",

            text:
              "Fold in the flour and baking soda, then gently mix through the chocolate chips."

          },

          {

            title:
              "Bake",

            text:
              "Scoop the cookie dough onto the tray and bake until the edges are lightly golden."

          }

        ],

        tip:
          "For thicker cookies, chill the dough before baking so the cookies spread less in the oven."

      },



      // ======================================================
      // RECIPE 4
      // ======================================================

      4: {

        title:
          "Mango Passion Cake",

        category:
          "CAKES",

        image:
          "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=90",

        description:
          "A light vanilla sponge layered with mango and passionfruit flavours for a refreshing tropical dessert.",

        time:
          "50 mins",

        level:
          "Intermediate",

        serving:
          "8–10 servings",

        ingredients: [

          "1½ cups all-purpose flour",

          "1 teaspoon baking powder",

          "¾ cup sugar",

          "3 large eggs",

          "½ cup milk",

          "½ cup butter",

          "1 teaspoon vanilla",

          "Fresh mango and passionfruit"

        ],

        steps: [

          {

            title:
              "Prepare the cake tin",

            text:
              "Preheat the oven and prepare the cake tin by greasing and lining it."

          },

          {

            title:
              "Prepare sponge batter",

            text:
              "Mix the butter and sugar, then gradually add eggs and vanilla."

          },

          {

            title:
              "Add dry ingredients",

            text:
              "Fold in the flour and baking powder, alternating gently with the milk."

          },

          {

            title:
              "Bake",

            text:
              "Transfer the batter to the cake tin and bake until lightly golden and cooked through."

          },

          {

            title:
              "Decorate",

            text:
              "Cool the sponge completely and finish with mango, passionfruit and your preferred cream."

          }

        ],

        tip:
          "Make sure the cake is completely cool before adding fresh fruit and cream."

      }


    };



    // ========================================================
    // RECIPE CARDS
    // ========================================================

    const recipeCards =
      document.querySelectorAll(
        ".recipe-card[data-recipe-id]"
      );


    recipeCards.forEach(
      card => {


        card.style.cursor =
          "pointer";


        card.addEventListener(
          "click",
          function (event) {


            event.preventDefault();


            const recipeId =
              this.dataset
                .recipeId;


            const selectedRecipe =
              recipes[
                recipeId
              ];


            if (!selectedRecipe) {
              return;
            }



            // ==============================================
            // IMAGE
            // ==============================================

            const image =
              document.getElementById(
                "recipeDetailImage"
              );


            image.src =
              selectedRecipe.image;


            image.alt =
              selectedRecipe.title;



            // ==============================================
            // INFORMATION
            // ==============================================

            document.getElementById(
              "recipeDetailTitle"
            ).textContent =
              selectedRecipe.title;


            document.getElementById(
              "recipeDetailCategory"
            ).textContent =
              selectedRecipe.category;


            document.getElementById(
              "recipeDetailDescription"
            ).textContent =
              selectedRecipe.description;


            document.getElementById(
              "recipeDetailTime"
            ).textContent =
              selectedRecipe.time;


            document.getElementById(
              "recipeDetailLevel"
            ).textContent =
              selectedRecipe.level;


            document.getElementById(
              "recipeDetailServing"
            ).textContent =
              selectedRecipe.serving;



            // ==============================================
            // INGREDIENTS
            // ==============================================

            const ingredientsContainer =
              document.getElementById(
                "recipeIngredients"
              );


            ingredientsContainer.innerHTML =
              "";


            selectedRecipe.ingredients
              .forEach(
                ingredient => {


                  const item =
                    document.createElement(
                      "div"
                    );


                  item.className =
                    "ingredient-item";


                  item.innerHTML = `

                    <span class="ingredient-check">
                      ✓
                    </span>

                    <p>
                      ${ingredient}
                    </p>

                  `;


                  ingredientsContainer
                    .appendChild(
                      item
                    );


                }
              );



            // ==============================================
            // METHOD
            // ==============================================

            const stepsContainer =
              document.getElementById(
                "recipeSteps"
              );


            stepsContainer.innerHTML =
              "";


            selectedRecipe.steps
              .forEach(
                (
                  step,
                  index
                ) => {


                  const item =
                    document.createElement(
                      "div"
                    );


                  item.className =
                    "recipe-step";


                  const number =
                    String(
                      index + 1
                    )
                      .padStart(
                        2,
                        "0"
                      );


                  item.innerHTML = `

                    <span class="recipe-step-number">
                      ${number}
                    </span>

                    <div>

                      <h3>
                        ${step.title}
                      </h3>

                      <p>
                        ${step.text}
                      </p>

                    </div>

                  `;


                  stepsContainer
                    .appendChild(
                      item
                    );


                }
              );



            // ==============================================
            // TIP
            // ==============================================

            document.getElementById(
              "recipeTip"
            ).textContent =
              selectedRecipe.tip;



            // ==============================================
            // TAB TITLE
            // ==============================================

            document.title =

              `${selectedRecipe.title} | Chef Kecik`;



            // ==============================================
            // SWITCH PAGE
            // ==============================================

            recipeOverview.style.display =
              "none";


            recipeDetailView.style.display =
              "block";


            window.scrollTo({

              top:
                0,

              behavior:
                "smooth"

            });


          }
        );


      }
    );



    // ========================================================
    // SHOW ORIGINAL RECIPE PAGE
    // ========================================================

    function showRecipeOverview(
      event
    ) {


      if (event) {

        event.preventDefault();

      }


      recipeDetailView.style.display =
        "none";


      recipeOverview.style.display =
        "block";


      document.title =
        "Chef Kecik | Recipes";


      window.scrollTo({

        top:
          0,

        behavior:
          "smooth"

      });


    }



    // ========================================================
    // BACK BUTTON
    // ========================================================

    const backButton =
      document.getElementById(
        "backToRecipes"
      );


    if (backButton) {


      backButton.addEventListener(
        "click",
        showRecipeOverview
      );


    }



    // ========================================================
    // EXPLORE MORE
    // ========================================================

    const exploreButton =
      document.getElementById(
        "exploreMoreRecipes"
      );


    if (exploreButton) {


      exploreButton.addEventListener(
        "click",
        showRecipeOverview
      );


    }


  }
);