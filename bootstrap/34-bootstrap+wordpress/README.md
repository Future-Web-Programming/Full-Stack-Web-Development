## 📚 Chapter 26: Bootstrap + WordPress Theme

### 🎯 Objective:

Learn how to integrate Bootstrap with WordPress to build a fully functional custom theme — responsive, fast, and easy to manage.

---

### 🧠 What You'll Learn:

* WordPress Theme Structure Overview
* How to convert Bootstrap HTML into a WordPress theme
* Creating `header.php`, `footer.php`, and dynamic `index.php`
* WordPress loop integration with Bootstrap Cards
* Creating `sidebar.php` and using Bootstrap layout
* Enqueuing Bootstrap correctly in `functions.php`
* Making menus and widgets Bootstrap-compatible
* Theme activation and customization basics

---

## 🏗️ 1. WordPress Theme Folder Setup

Create a new theme folder in:

```
/wp-content/themes/bootstrap-theme/
```

Minimum required files:

* `style.css` (Theme metadata)
* `index.php` (Main template)
* `functions.php` (Scripts/styles enqueue)
* `screenshot.png` (Preview)

**Sample `style.css`:**

```css
/*
Theme Name: Bootstrap Starter Theme
Author: Future Programming
Description: A custom Bootstrap 5 WordPress theme.
Version: 1.0
*/
```

---

## 🔗 2. Enqueue Bootstrap CSS & JS

In `functions.php`:

```php
<?php
function bootstrap_theme_enqueue_scripts() {
    // Bootstrap CSS
    wp_enqueue_style('bootstrap-css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');

    // Theme Style
    wp_enqueue_style('theme-style', get_stylesheet_uri());

    // Bootstrap JS
    wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', [], null, true);
}
add_action('wp_enqueue_scripts', 'bootstrap_theme_enqueue_scripts');
```

---

## 🧱 3. Create `header.php` and `footer.php`

Extract `<head>`, nav, and opening body tags into `header.php`:

```php
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Bootstrap Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a>
    <?php wp_nav_menu([
        'theme_location' => 'primary',
        'menu_class' => 'navbar-nav ms-auto',
        'container' => false,
        'walker' => new Bootstrap_Navwalker(), // Optional for deep integration
    ]); ?>
  </div>
</nav>
```

`footer.php`:

```php
<footer class="bg-dark text-white text-center p-3 mt-5">
    <p>&copy; <?php echo date('Y'); ?> - Future Programming</p>
</footer>
<?php wp_footer(); ?>
</body>
</html>
```

---

## 🔄 4. Use `index.php` with Bootstrap Cards

```php
<?php get_header(); ?>

<div class="container my-5">
    <div class="row">
        <?php if(have_posts()) : while(have_posts()) : the_post(); ?>
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <?php if (has_post_thumbnail()) : ?>
                    <img src="<?php the_post_thumbnail_url(); ?>" class="card-img-top">
                <?php endif; ?>
                <div class="card-body">
                    <h5 class="card-title"><?php the_title(); ?></h5>
                    <p class="card-text"><?php the_excerpt(); ?></p>
                    <a href="<?php the_permalink(); ?>" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
        <?php endwhile; endif; ?>
    </div>
</div>

<?php get_footer(); ?>
```

---

## 📚 5. Register Menus and Widget Areas

In `functions.php`:

```php
// Register nav menu
register_nav_menus([
    'primary' => __('Primary Menu', 'bootstrap-theme')
]);

// Register sidebar
register_sidebar([
    'name' => 'Main Sidebar',
    'id' => 'sidebar-1',
    'before_widget' => '<div class="p-3 mb-4 bg-light">',
    'after_widget'  => '</div>',
]);
```

---

## 🧩 6. Create Sidebar Template

In `sidebar.php`:

```php
<div class="col-md-4">
    <?php if ( is_active_sidebar('sidebar-1') ) : ?>
        <?php dynamic_sidebar('sidebar-1'); ?>
    <?php endif; ?>
</div>
```

Use it in your layout:

```php
<div class="row">
  <div class="col-md-8"><?php get_template_part('loop'); ?></div>
  <?php get_sidebar(); ?>
</div>
```

---

## 🧪 7. Theme Activation

* Upload the theme folder
* Go to WP Admin > Appearance > Themes > Activate "Bootstrap Starter Theme"
* Add a few posts, a featured image, and menus to see it in action!

---

## 🔥 Bonus: Use `Bootstrap Navwalker` Class

If you want **deep Bootstrap nav integration**, consider including the [Bootstrap Navwalker](https://github.com/wp-bootstrap/wp-bootstrap-navwalker) PHP class to enable full dropdown and class-based menus.

---

## ✅ Summary

| Feature                   | Covered |
| ------------------------- | ------- |
| Bootstrap CDN Integration | ✅       |
| Header/Footer Templates   | ✅       |
| Post Loop with Bootstrap  | ✅       |
| Sidebar Integration       | ✅       |
| Menus and Widgets         | ✅       |
| Theme Activation          | ✅       |

---

### 🏁 Next Up:

**Chapter 27** → Bootstrap with React or Vue
👉 Learn how to use Bootstrap in Single Page Apps (SPA)!
