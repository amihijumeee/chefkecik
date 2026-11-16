<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Chef Kecik homepage " />
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
    <div class="hero">
      <div class="hero-inner ck-container">
        <div class="hero-copy ">
          <p class="eyebrow">CRAFTED WITH CARE. SHARED WITH LOVE.</p>
          <h1>About<br><em>Chef Kecik.</em></h1>
          <p class="hero-text">
            Thoughtfully crafted pastries and cakes, made with premium ingredients
            and a whole lot of heart.
          </p>

          <!-- <div class="hero-features">
            <div><span>✦</span>
              <p>Freshly Made<br>Every Day</p>
            </div>
            <div><span>◇</span>
              <p>Premium<br>Ingredients</p>
            </div>
            <div><span>♧</span>
              <p>Made with Care<br>Always</p>
            </div>
          </div> -->

        </div>

        <div class="hero-visual ">
          <div class="hero-image-wrap">
            <img src="images/eco_majestic_1.jpeg" alt="About">
          </div>
          <!-- <span class="floating-note">Made for little celebrations</span> -->
        </div>
      </div>
    </div>
  </main>

  <?php include __DIR__ . '/components/footer.php'; ?>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
</body>

</html>