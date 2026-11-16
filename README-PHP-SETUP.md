# Chef Kecik (PHP + Bootstrap 5)

## Requirements
- PHP 8.x (PHP 7.4+ should also work for the current includes)
- A local PHP server such as Laragon, XAMPP, or WAMP
- Internet connection for Bootstrap CDN and Google Fonts

## Run with Laragon
1. Copy the `chefkecik-main` folder into `C:\laragon\www\`.
2. Start Apache in Laragon.
3. Open `http://localhost/chefkecik-main/`.
4. The homepage is `index.php`.

## Run with PHP's built-in server
Open a terminal in this folder and run:

```bash
php -S localhost:8000
```

Then open `http://localhost:8000/`.

## PHP component structure
- Each page is now a `.php` file.
- `components/navbar.php` is included using PHP on every page.
- `components/footer.php` is included using PHP on every page.
- `script.js` no longer fetches HTML components because PHP renders them on the server.
- Internal page links now point to `.php` pages.

## Important scope note
This conversion changes the static HTML pages into PHP pages and uses PHP includes for shared components. It does not yet add database storage, login, booking submission, email delivery, or server-side form processing. Those features need separate PHP backend work.
