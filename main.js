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

// SCROLL REVEAL
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
})

sr.reveal(
  ".hero_slogon, .about_top, .popular_top, .reviews_top, .reviews_swiper, .footer_socials, .footer_content, .footer_right"
)
// hero section: right image
sr.reveal(".hero_img", { delay: 500, scale: 0.5 })

// service section: cards
sr.reveal(".service_card", { interval: 100 })

// popular sections: plants
sr.reveal(".popular_plant", { interval: 100 })

// about us section: img content
sr.reveal(".about_img", { delay: 1000, origin: "right" })
sr.reveal(".about_item_1-img, .about_item_2-content", { origin: "left" })
sr.reveal(".about_item_2-img, .about_item_1-content", {
  delay: 500,
  origin: "right",
})

// review section : top left leaf
sr.reveal(".reviews_leaf, .footer_floral", { delay: 1000, origin: "left" })
