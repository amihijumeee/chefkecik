<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Discover baking classes, workshops and special events at Chef Kecik.">
  <title>Chef Kecik</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap"
    rel="stylesheet">

  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Event CSS -->
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <!-- NAVBAR -->
  <?php include __DIR__ . '/components/navbar.php'; ?>


  <!-- EVENT PAGE -->
  <main class="event-page" id="eventOverview">

    <div class="event-container">

      <!-- PAGE HEADING -->
      <section class="event-heading">

        <span class="event-subtitle">LET'S CREATE SOMETHING SWEET</span>

        <h1>OUR EVENTS</h1>

        <div class="event-heading-decoration">
          <span></span>
          <i>♥</i>
          <span></span>
        </div>

        <p>
          Learn, bake and create beautiful memories with us.
          <br>
          Join our exciting baking classes and special events!
        </p>

      </section>


      <!-- FEATURED EVENT -->
      <section class="event-featured">

        <div class="event-featured-image">
          <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85"
            alt="Baking workshop">

          <span class="event-featured-label">FEATURED EVENT</span>
        </div>

        <div class="event-featured-content">

          <span class="event-featured-tag">UPCOMING WORKSHOP</span>

          <h2>Let's Bake Together!</h2>

          <p>
            Discover the joy of baking in our hands-on workshop.
            Learn essential baking techniques and create delicious
            treats with guidance from our baking team.
          </p>

          <div class="event-featured-details">
            <span>📅 20 December 2026</span>
            <span>◷ 10:00 AM – 1:00 PM</span>
            <span>📍 Chef Kecik Studio</span>
          </div>

          <button class="event-featured-button" data-event-id="1">
            Explore Event <span>→</span>
          </button>

        </div>

      </section>


      <!-- CATEGORY FILTERS -->
      <section class="event-category-section">

        <div class="event-section-heading">
          <div>
            <span class="event-section-label">FIND YOUR EXPERIENCE</span>
            <h2>Explore Our Events</h2>
          </div>
        </div>

        <div class="event-categories">

          <button class="event-category active" data-event-filter="all">
            All Events
          </button>

          <button class="event-category" data-event-filter="workshop">
            Workshops
          </button>

          <button class="event-category" data-event-filter="class">
            Baking Classes
          </button>

          <button class="event-category" data-event-filter="special">
            Special Events
          </button>

        </div>

      </section>


      <!-- MAIN EVENT CONTENT -->
      <div class="event-main-layout">

        <!-- EVENT LIST -->
        <section class="event-list-area">

          <div class="event-grid" id="eventGrid">


            <!-- EVENT 1 -->
            <article class="event-card" data-event-category="workshop" data-event-id="1">

              <div class="event-card-image">

                <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85"
                  alt="Baking workshop">

                <span class="event-card-type">WORKSHOP</span>

                <div class="event-date">
                  <strong>20</strong>
                  <span>DEC</span>
                </div>

              </div>

              <div class="event-card-content">

                <div class="event-card-meta">
                  <span>◷ 10:00 AM – 1:00 PM</span>
                  <span>📍 Chef Kecik Studio</span>
                </div>

                <h3>Let's Bake Together!</h3>

                <p>
                  Join our beginner-friendly baking workshop
                  and discover the joy of creating delicious treats.
                </p>

                <button class="event-card-button" data-event-id="1">
                  View Details <span>→</span>
                </button>

              </div>

            </article>


            <!-- EVENT 2 -->
            <article class="event-card" data-event-category="class" data-event-id="2">

              <div class="event-card-image">

                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85"
                  alt="Cake decorating class">

                <span class="event-card-type">BAKING CLASS</span>

                <div class="event-date">
                  <strong>27</strong>
                  <span>DEC</span>
                </div>

              </div>

              <div class="event-card-content">

                <div class="event-card-meta">
                  <span>◷ 2:00 PM – 5:00 PM</span>
                  <span>📍 Chef Kecik Studio</span>
                </div>

                <h3>Cake Decorating Class</h3>

                <p>
                  Learn how to decorate beautiful cakes using
                  simple techniques and creative designs.
                </p>

                <button class="event-card-button" data-event-id="2">
                  View Details <span>→</span>
                </button>

              </div>

            </article>


            <!-- EVENT 3 -->
            <article class="event-card" data-event-category="special" data-event-id="3">

              <div class="event-card-image">

                <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85"
                  alt="Cupcake celebration">

                <span class="event-card-type">SPECIAL EVENT</span>

                <div class="event-date">
                  <strong>10</strong>
                  <span>JAN</span>
                </div>

              </div>

              <div class="event-card-content">

                <div class="event-card-meta">
                  <span>◷ 11:00 AM – 3:00 PM</span>
                  <span>📍 Chef Kecik Studio</span>
                </div>

                <h3>Sweet Celebration Day</h3>

                <p>
                  Celebrate sweetness with us through fun
                  activities, delicious desserts and surprises.
                </p>

                <button class="event-card-button" data-event-id="3">
                  View Details <span>→</span>
                </button>

              </div>

            </article>


            <!-- EVENT 4 -->
            <article class="event-card" data-event-category="class" data-event-id="4">

              <div class="event-card-image">

                <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85"
                  alt="Cookie baking class">

                <span class="event-card-type">BAKING CLASS</span>

                <div class="event-date">
                  <strong>17</strong>
                  <span>JAN</span>
                </div>

              </div>

              <div class="event-card-content">

                <div class="event-card-meta">
                  <span>◷ 10:00 AM – 12:00 PM</span>
                  <span>📍 Chef Kecik Studio</span>
                </div>

                <h3>Cookie Baking Experience</h3>

                <p>
                  Create delicious homemade cookies and
                  learn the secrets behind perfect textures.
                </p>

                <button class="event-card-button" data-event-id="4">
                  View Details <span>→</span>
                </button>

              </div>

            </article>


          </div>


          <!-- EMPTY MESSAGE -->
          <div class="event-empty" id="eventEmpty">
            No events are available in this category yet.
          </div>


        </section>


        <!-- RIGHT SIDEBAR -->
        <aside class="event-sidebar">

          <!-- ABOUT EVENT -->
          <div class="event-side-card event-about-card">

            <span class="event-side-icon">♡</span>

            <h3>Learn With Us!</h3>

            <p>
              Our events are designed to make baking fun,
              exciting and enjoyable for everyone.
            </p>

            <a href="#eventGrid">Explore Events →</a>

          </div>


          <!-- WHY JOIN -->
          <div class="event-side-card event-benefits-card">

            <h3>Why Join Us?</h3>

            <ul>
              <li>♡ Hands-on learning</li>
              <li>♡ Beginner-friendly sessions</li>
              <li>♡ Experienced guidance</li>
              <li>♡ Fun baking experience</li>
            </ul>

          </div>


          <!-- INSTAGRAM -->
          <div class="event-side-card event-instagram-card">

            <h3>Follow Our Journey</h3>

            <p>
              Discover more baking moments and updates!
            </p>

            <div class="event-instagram-grid">

              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80"
                alt="Cake">

              <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=300&q=80"
                alt="Cookies">

              <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=300&q=80"
                alt="Cupcakes">

              <img src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=300&q=80"
                alt="Cake">

            </div>

            <a href="#" class="event-instagram-link">
              ◎ chefkecik_
            </a>

          </div>

        </aside>

      </div>


      <!-- NEWSLETTER -->
      <section class="event-newsletter">

        <div class="event-newsletter-icon">
          ✉
        </div>

        <div class="event-newsletter-copy">

          <h3>Never Miss an Event!</h3>

          <p>
            Subscribe to receive updates about upcoming
            workshops, baking classes and special events.
          </p>

        </div>

        <form class="event-newsletter-form" id="eventNewsletterForm">

          <input type="email" id="eventEmail" placeholder="Enter your email" required>

          <button type="submit">Subscribe</button>

        </form>

        <span class="event-newsletter-message" id="eventNewsletterMessage"></span>

      </section>

    </div>

  </main>


  <!-- EVENT DETAIL VIEW -->
  <main class="event-detail-page" id="eventDetailView" style="display: none;">

    <div class="event-detail-container">

      <a href="#" class="event-detail-back" id="backToEvents">
        ← Back to Events
      </a>


      <!-- DETAIL HERO -->
      <section class="event-detail-hero">

        <div class="event-detail-image">

          <img id="eventDetailImage" src="" alt="Chef Kecik Event">

          <span class="event-detail-category" id="eventDetailCategory"></span>

        </div>


        <div class="event-detail-copy">

          <span class="event-detail-label">CHEF KECIK EXPERIENCE</span>

          <h1 id="eventDetailTitle"></h1>

          <div class="event-detail-decoration">
            <span></span>
            <i>♥</i>
            <span></span>
          </div>

          <p class="event-detail-description" id="eventDetailDescription"></p>


          <div class="event-detail-meta">

            <div>
              <span>📅</span>
              <div>
                <small>DATE</small>
                <strong id="eventDetailDate"></strong>
              </div>
            </div>

            <div>
              <span>◷</span>
              <div>
                <small>TIME</small>
                <strong id="eventDetailTime"></strong>
              </div>
            </div>

            <div>
              <span>📍</span>
              <div>
                <small>LOCATION</small>
                <strong id="eventDetailLocation"></strong>
              </div>
            </div>

          </div>

          <a href="#eventRegistration" class="event-register-button">
            Register Your Interest →
          </a>

        </div>

      </section>


      <!-- EVENT INFORMATION -->
      <section class="event-detail-information">

        <div class="event-detail-info-card">

          <h2>About This Event</h2>

          <p id="eventDetailAbout"></p>

        </div>

        <div class="event-detail-info-card" id="eventRegistration">

          <h2>Interested in Joining?</h2>

          <p>
            Contact our team to find out more about registration
            and availability.
          </p>

          <a href="contact.php" class="event-contact-button">
            Contact Us →
          </a>

        </div>

      </section>

    </div>

  </main>


  <!-- FOOTER -->
  <?php include __DIR__ . '/components/footer.php'; ?>


  <!-- JAVASCRIPT -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>

</body>

</html>