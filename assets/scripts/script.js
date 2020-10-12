// for navbar to be sticky on certain offset of page.
window.onscroll = function () {
  stickyNav();
};

var navbar = document.getElementById("navbar");

var OFFSET_VALUE = 200;

function stickyNav() {
  if (window.pageYOffset >= OFFSET_VALUE) {
    navbar.classList.add('fixed-top');
  } else {
    navbar.classList.remove('fixed-top');
  }
}

var more_stories = document.getElementById('more-stories');

function stickyStories() {
  if (more_stories.offsetTop >= window.pageYOffset || window.pageYOffset <= offsetBottom) {
    more_stories.classList.add('position-fixed');
  } else {
    more_stories.classList.remove('position-fixed');
  }
}
