// for navbar to be sticky on certain offset of page.
window.onscroll = function () { stickyNav(); };

var navbar = document.getElementById("navbar");
// var nav_info = document.getElementById('nav-info');
var OFFSET_VALUE = 200;

function stickyNav() {
  if (window.pageYOffset >= OFFSET_VALUE) {
    navbar.classList.add('fixed-top');
    // nav_info.classList.remove('d-lg-block');
  } else {
    navbar.classList.remove('fixed-top');
  }
}
