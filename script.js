const products = [
  {
    name: "Berry Brioche",
    price: "RM 16",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Creamy Filled Bun",
    price: "RM 14",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Pistachio Croissant",
    price: "RM 18",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Strawberry Shortcake",
    price: "RM 22",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Chocolate Chunk Cookie",
    price: "RM 12",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Classic Madeleines",
    price: "RM 10",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=700&q=80"
  }
];

const productGrid = document.getElementById("productGrid");

products.forEach((product) => {
  const card = document.createElement("article");
  card.className = "product-card reveal";
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-info">
      <h3>${product.name}</h3>
      <div class="product-meta">
        <span>${product.price}</span>
        <button class="add-btn" aria-label="Add ${product.name}">+</button>
      </div>
    </div>
  `;
  productGrid.appendChild(card);
});

// Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Simple add button feedback
document.addEventListener("click", (event) => {
  const button = event.target.closest(".add-btn");
  if (!button) return;

  const original = button.textContent;
  button.textContent = "✓";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
  }, 900);
});

// Newsletter demo
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("emailInput").value.trim();

  if (!email) return;

  newsletterMessage.textContent = "Thank you. You’re on the list.";
  newsletterForm.reset();
});

// Reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
