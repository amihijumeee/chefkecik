<?php
$menuCategories = [
    "Pastry" => [
        ["name" => "Classic Croissant", "image" => "photo-1555507036-ab1f4038808a"],
        ["name" => "Pain Au Chocolat", "image" => "photo-1623334044303-241021148842"],
        ["name" => "Almond Croissant", "image" => "photo-1509440159596-0249088772ff"],
        ["name" => "Cinnamon Roll", "image" => "photo-1509365465985-25d11c17e812"],
        ["name" => "Fruit Danish", "image" => "photo-1558961363-fa8fdf82db35"],
        ["name" => "Pistachio Croissant", "image" => "photo-1530610476181-d83430b64dcd"]
    ],

    "Cakes" => [
        ["name" => "Chocolate Cake", "image" => "photo-1578985545062-69928b1d9587"],
        ["name" => "Strawberry Shortcake", "image" => "photo-1565958011703-44f9829ba187"],
        ["name" => "Red Velvet Cake", "image" => "photo-1586788680434-30d324b2d46f"],
        ["name" => "Blueberry Cheesecake", "image" => "photo-1533134242443-d4fd215305ad"],
        ["name" => "Chocolate Fudge Cake", "image" => "photo-1606313564200-e75d5e30476c"],
        ["name" => "Carrot Cake", "image" => "photo-1621303837174-89787a7d4729"]
    ],

    "Beverages" => [
        ["name" => "Iced Latte", "image" => "photo-1461023058943-07fcbe16d735"],
        ["name" => "Chocolate Milk", "image" => "photo-1542990253-0b8be9f4b6c4"],
        ["name" => "Matcha Latte", "image" => "photo-1515823064-d6e0c04616a7"],
        ["name" => "Strawberry Smoothie", "image" => "photo-1505252585461-04db1eb84625"],
        ["name" => "Cappuccino", "image" => "photo-1511920170033-f8396924c348"],
        ["name" => "Hot Tea", "image" => "photo-1544787219-7f47ccb76574"]
    ],

    "Hot Food" => [
        ["name" => "Creamy Carbonara", "image" => "photo-1473093295043-cdd812d0e601"],
        ["name" => "Spaghetti Bolognese", "image" => "photo-1551183053-bf91a1d81141"],
        ["name" => "Baked Mac and Cheese", "image" => "photo-1543339494-b4cd4f7ba686"],
        ["name" => "Creamy Mushroom Soup", "image" => "photo-1547592166-23ac45744acd"],
        ["name" => "Chicken Fried Rice", "image" => "photo-1512058564366-18510be2db19"],
        ["name" => "Grilled Chicken", "image" => "photo-1532550907401-a500c9a57435"]
    ]
];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Chef Kecik</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
        rel="stylesheet">

    <!-- Menu CSS -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <?php include __DIR__ . '/components/navbar.php'; ?>

    <main class="menu-page">

        <!-- MENU HEADER -->
        <section class="menu-header text-center">

            <span class="menu-subtitle">MADE WITH LOVE, BAKED WITH PASSION</span>

            <h1>OUR MENU</h1>

            <p>
                Discover something delicious for every moment.
            </p>

            <div class="menu-divider">
                <span></span>
                <i>✦</i>
                <span></span>
            </div>

        </section>


        <!-- MENU CATEGORIES -->
        <div class="container menu-container">

            <?php foreach ($menuCategories as $category => $items): ?>

                <section class="menu-category">

                    <!-- CATEGORY TITLE -->
                    <div class="category-heading">

                        <span class="category-line"></span>

                        <h2><?= htmlspecialchars($category) ?></h2>

                        <span class="category-line"></span>

                    </div>


                    <!-- FOOD ITEMS -->
                    <div class="row g-4">

                        <?php foreach ($items as $item): ?>

                            <div class="col-6 col-md-4">

                                <div class="menu-item">

                                    <div class="menu-image">

                                        <img src="https://images.unsplash.com/<?= htmlspecialchars($item['image']) ?>?auto=format&fit=crop&w=600&q=85"
                                            alt="<?= htmlspecialchars($item['name']) ?>" loading="lazy">

                                    </div>

                                    <h3>
                                        <?= htmlspecialchars($item['name']) ?>
                                    </h3>

                                </div>

                            </div>

                        <?php endforeach; ?>

                    </div>

                </section>

            <?php endforeach; ?>

        </div>

    </main>

    <?php include __DIR__ . '/components/footer.php'; ?>

</body>

</html>