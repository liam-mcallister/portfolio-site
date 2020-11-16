const body = document.getElementById("body");
const burger = document.getElementById("burger-btn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-item");
const toTopBtn = document.getElementById("to-top");

// Disable scrolling when navigation menu is open
burger.addEventListener("click", function () {
  if (burger.checked) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
});

// Close navigation menu when link is clicked
navLinks.forEach(function (items) {
  items.addEventListener("click", function () {
    burger.checked = false;
    body.classList.remove("no-scroll");
  });
});

// Hide menu when scrolling down and show when scrolling up
let lastPos = 0;
function hideNav() {
  let currentPos = window.scrollY;
  if (currentPos > lastPos) {
    navbar.classList.add("slide-up");
    navbar.classList.remove("slide-down");
  } else {
    navbar.classList.remove("slide-up");
    navbar.classList.add("slide-down");
  }
  lastPos = currentPos;
}
window.addEventListener("scroll", hideNav);

// Change the navbar's bg color to white when user scrolls over 50px from top of page
function changeNav() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("nav-purple");
  } else {
    navbar.classList.remove("nav-purple");
  }
}
window.addEventListener("scroll", changeNav);

// Scroll to top button
function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
toTopBtn.addEventListener("click", scrollTop);
