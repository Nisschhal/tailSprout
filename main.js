// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"
//
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

const scrollUp = document.getElementById("scroll-up")

window.addEventListener("scroll", () => {
  if (this.scrollY >= 300) {
    scrollUp.classList.remove("-bottom-1/5")
    scrollUp.classList.add("bottom-4")
  } else {
    scrollUp.classList.add("-bottom-1/5")
    scrollUp.classList.remove("bottom-4")
  }
})

// CHANGE BACKGROUND HEADER

window.addEventListener("scroll", () => {
  const header = document.getElementById("navbar")
  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-yellow-500", "drop-shadow-xl")
  } else {
    header.classList.remove("border-b", "border-yellow-500", "drop-shadow-xl")
  }
})

// SWIPER
const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})

// SCROLL SECTIONS ACTIVE LINK
const activeLink = () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = "home"
  sections.forEach((secion) => {
    const sectionTop = secion.offsetTop
    if (this.scrollY >= sectionTop - 60) {
      current = secion.getAttribute("id")
    }
  })

  navLinks.forEach((item) => {
    item.classList.remove("active")
    if (item.href.includes(current)) {
      item.classList.add("active")
    }
  })
}

window.addEventListener("scroll", activeLink)
