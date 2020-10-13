// for navbar to be sticky on certain offset of page.
window.onscroll = function () {
  stickyNav();
  stickyStories();
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

// to make the center more stories sticky
var more_stories = document.getElementById('more-stories');
var middle_height = more_stories.offsetTop + more_stories.offsetHeight;
var magzine = document.getElementById('in-the-magazine');
var browser_height = window.innerHeight;

function stickyStories() {
  if (window.innerWidth >= 1024){
    if (window.pageYOffset >= (middle_height - browser_height) && window.pageYOffset <= (magzine.offsetTop - browser_height)) {
      more_stories.classList.add('position-fixed');
      more_stories.classList.remove('position-absolute');
    } else if (window.pageYOffset >= (middle_height - browser_height)) {
      more_stories.classList.remove('position-fixed');
      more_stories.classList.add('position-absolute');
    } else {
      more_stories.classList.remove('position-absolute');
      more_stories.classList.remove('position-fixed');
    }
  }
}
