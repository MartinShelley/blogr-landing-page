(function () {
  const hamburgerIcon = document.querySelector('.hamburger-icon');

  hamburgerIcon.addEventListener('click', function () {
    document.querySelector('.mobile-nav').style.display = "block";
  });
})();