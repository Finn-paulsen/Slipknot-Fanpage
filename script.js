document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function() {
      menu.classList.toggle("active");
    });

    const menuItems = menu.querySelectorAll("li a");

    for (const menuItem of menuItems) {
      menuItem.addEventListener("click", function() {
        menu.classList.remove("active");
      });
    }
  });