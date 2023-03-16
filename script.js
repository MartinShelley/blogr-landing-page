(function () {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const mobileNav = document.querySelector('.mobile-nav');

  hamburgerIcon.addEventListener('click', function (e) {
    if (mobileNav.style.display === "") {
      mobileNav.style.display = "block";
    }
    else {
      mobileNav.style.display = "";
    }
  });

  document.querySelectorAll('.nav-option').forEach(function (item) {
    item.addEventListener('click', function (e) {
      console.log(e.currentTarget);
      if (!e.currentTarget.classList.contains('nav-option-selected')) {
        console.log("open");
        e.currentTarget.classList.add('nav-option-selected');
        e.currentTarget.children[0].children[0].classList.add('rotate');
      }
      else {
        console.log("close");
        e.currentTarget.classList.remove('nav-option-selected');
        e.currentTarget.children[0].children[0].classList.remove('rotate');
      }
    });
  });
})();