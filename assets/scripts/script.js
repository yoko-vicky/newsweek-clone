window.scroll() = function () { stickyNav(); };

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('stop');
  } else {
    navbar.classListremove('stop');
  }

}
