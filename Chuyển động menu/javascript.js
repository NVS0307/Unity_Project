document.getElementById('toggleMenu').addEventListener('click', function() {
    var menuItems = document.getElementById('menuItems');
    if (menuItems.style.display === 'none') {
      menuItems.style.display = 'block';
    } else {
      menuItems.style.display = 'none';
    }
  });