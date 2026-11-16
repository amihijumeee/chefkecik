<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Contact Chef Kecik for orders, custom cakes, baking classes and enquiries." />
  <title>Chef Kecik</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap"
    rel="stylesheet">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <?php include __DIR__ . '/components/navbar.php'; ?>

  <main id="top">
    <section class="contact-page">
      <div class="contact-container">

        <!-- HEADING -->
        <div class="contact-heading ">
          <p class="eyebrow">WE'D LOVE TO HEAR FROM YOU</p>
          <h1>Contact <em>Us.</em></h1>
          <div class="contact-decoration">
            <span></span>
          </div>
          <p>
            Planning a celebration, a custom cake or a baking class?<br>
            Send us a message and we'll reply as soon as we can.
          </p>
        </div>

        <!-- MAIN LAYOUT -->
        <div class="contact-layout">

          <!-- FORM -->
          <div class="contact-form-card ">
            <h2>Send us a message</h2>
            <p class="contact-form-intro">
              Fill in the form below and it will open WhatsApp with your message ready to send.
            </p>

            <form id="contactForm" novalidate>

              <div class="contact-field">
                <label for="enquiryType">I'm enquiring about</label>
                <div class="contact-topics" id="contactTopics">
                  <button type="button" class="contact-topic active" data-topic="Cake Order">Cake Order</button>
                  <button type="button" class="contact-topic" data-topic="Custom Cake">Custom Cake</button>
                  <button type="button" class="contact-topic" data-topic="Baking Class">Baking Class</button>
                  <button type="button" class="contact-topic" data-topic="Other">Other</button>
                </div>
              </div>

              <div class="contact-row">
                <div class="contact-field">
                  <label for="contactName">Full name</label>
                  <input type="text" id="contactName" placeholder="Your name" required>
                </div>

                <div class="contact-field">
                  <label for="contactPhone">Phone number</label>
                  <input type="tel" id="contactPhone" placeholder="e.g. 012-345 6789">
                </div>
              </div>

              <div class="contact-row">
                <div class="contact-field">
                  <label for="contactEmail">Email address</label>
                  <input type="email" id="contactEmail" placeholder="you@example.com">
                </div>

                <div class="contact-field">
                  <label for="contactDate">Event or pick-up date</label>
                  <input type="date" id="contactDate">
                </div>
              </div>

              <div class="contact-field">
                <label for="contactMessage">Your message</label>
                <textarea id="contactMessage" rows="5"
                  placeholder="Tell us about flavours, servings, design ideas or any questions you have." required></textarea>
              </div>

              <button type="submit" class="contact-submit">
                Send via WhatsApp <span>→</span>
              </button>

              <p class="contact-form-message" id="contactFormMessage" role="status"></p>
            </form>
          </div>

          <!-- INFO -->
          <aside class="contact-info ">

            <div class="contact-info-card">
              <div class="contact-info-icon">✆</div>
              <div>
                <h3>WhatsApp</h3>
                <p>Fastest way to reach us for orders and questions.</p>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener">+60 12-345 6789</a>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="contact-info-icon">✉</div>
              <div>
                <h3>Email</h3>
                <p>For collaborations, events and larger orders.</p>
                <a href="mailto:hello@chefkecik.com">hello@chefkecik.com</a>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="contact-info-icon">⌖</div>
              <div>
                <h3>Visit our outlet</h3>
                <p>Add your outlet address here.<br>Town, Selangor, Malaysia</p>
                <a href="outlet.php">View outlet details</a>
              </div>
            </div>

            <div class="contact-info-card contact-hours">
              <div class="contact-info-icon">◷</div>
              <div>
                <h3>Opening hours</h3>
                <ul>
                  <li><span>Mon – Fri</span><span>10:00 am – 6:00 pm</span></li>
                  <li><span>Saturday</span><span>10:00 am – 5:00 pm</span></li>
                  <li><span>Sunday</span><span>Closed</span></li>
                </ul>
              </div>
            </div>

          </aside>
        </div>

        <!-- BOTTOM CTA -->
        <div class="contact-cta ">
          <div class="contact-cta-left">
            <div class="contact-cta-icon">❀</div>
            <div>
              <h3>Need a cake for a special day?</h3>
              <p>Order at least 3 days ahead so we can make it just right.</p>
            </div>
          </div>
          <a href="shoppe.php" class="contact-cta-button">Browse the shoppe <span>→</span></a>
        </div>

      </div>
    </section>
  </main>

  <?php include __DIR__ . '/components/footer.php'; ?>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
  <script>
    (function () {
      var WHATSAPP_NUMBER = "60123456789"; // replace with Chef Kecik's number (country code, no + or spaces)

      var topic = "Cake Order";
      var topicButtons = document.querySelectorAll(".contact-topic");
      var form = document.getElementById("contactForm");
      var message = document.getElementById("contactFormMessage");

      topicButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          topicButtons.forEach(function (b) { b.classList.remove("active"); });
          btn.classList.add("active");
          topic = btn.dataset.topic;
        });
      });

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        var name = document.getElementById("contactName").value.trim();
        var phone = document.getElementById("contactPhone").value.trim();
        var email = document.getElementById("contactEmail").value.trim();
        var date = document.getElementById("contactDate").value;
        var text = document.getElementById("contactMessage").value.trim();

        if (!name || !text) {
          message.textContent = "Please add your name and message before sending.";
          message.className = "contact-form-message error";
          return;
        }

        var lines = [
          "Hi Chef Kecik! I'd like to enquire about: " + topic,
          "",
          "Name: " + name
        ];
        if (phone) lines.push("Phone: " + phone);
        if (email) lines.push("Email: " + email);
        if (date) lines.push("Date: " + date);
        lines.push("", text);

        var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
        window.open(url, "_blank", "noopener");

        message.textContent = "Thank you! Opening WhatsApp so you can send your message.";
        message.className = "contact-form-message success";
        form.reset();
      });
    })();
  </script>
</body>

</html>