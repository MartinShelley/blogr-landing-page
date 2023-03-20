(function () {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavBackground = document.querySelector('.mobile-dropdown-background');


  document.querySelectorAll('.desktop-nav .main-nav-heading').forEach((navOption) => {
    navOption.addEventListener('keydown', function (e) {
      if (e.keyCode == 13) {
        e.target.nextElementSibling.style.display = "block";
      }
    });
  });

  document.querySelectorAll('.desktop-nav .main-nav-heading ul li:last-child').forEach((lastOption) => {
    lastOption.addEventListener('keydown', function (e) {
      if (e.keyCode == 9) {
        e.target.offsetParent.style.display = "";
      }
    })
  })


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
      if (!e.currentTarget.classList.contains('nav-option-selected')) {
        e.currentTarget.classList.add('nav-option-selected');
        e.currentTarget.children[0].children[0].classList.add('rotate');
      }
      else {
        e.currentTarget.classList.remove('nav-option-selected');
        e.currentTarget.children[0].children[0].classList.remove('rotate');
      }
    });
  });

  mobileNavBackground.addEventListener('click', function () {
    mobileNav.style.display = "";
  });
})();