/* --------------- TOGGLE BUTTON ----------------- */
const navMenu = document.getElementById("nav-menu")
const navLinks = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

// When hamburger is clicked toggle the navMenu to right and hamburger to X
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]")
  hamburger.classList.toggle("ri-close-large-line")
})

// When nav link is clicked toggle the drawer to left and hamburger
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
  })
})

// SHOW SCROLL UP

// CHANGE BACKGROUND HEADER

// SWIPER

// SCROLL SECTIONS ACTIVE LINK
