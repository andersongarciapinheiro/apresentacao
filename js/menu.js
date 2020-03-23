//ANIMATION MENU DESKTOP AND MOBILE ON SCROLL AND RESIZE WINDOW

let headerContainer = document.querySelector("#header")
let linesMenu = document.querySelector(".lines-menu")
let logoMenu = document.querySelector(".logo")
let navMenu = document.querySelector(".menu")
let navMenuUl = document.querySelector(".menu > ul")
let navMenuLi = document.querySelectorAll(".menu > ul > li")
let navMenuLiA = document.querySelectorAll(".menu > ul > li > a")
let navMenuButton = document.querySelector(".menu > ul > li > a > .button")
let indexHtml = location.href
let windowWidth = window.innerWidth
let key = false
const regex = RegExp('index.html')


const regexHtml = /\/([a-zA-Z]{1,})(?:\.html)?$/

if (!regexHtml.exec(indexHtml)) {
  let menu = document.querySelector(".index")
  menu.style.color = "#f34b5e"
} else if (regexHtml.exec(indexHtml)[0] == "/features.html") {
  let menu = document.querySelector(".features")
  menu.style.color = "#f34b5e"
} else if (regexHtml.exec(indexHtml)[0] == "/gallery.html") {
  let menu = document.querySelector(".gallery")
  menu.style.color = "#f34b5e"
} else if (regexHtml.exec(indexHtml)[0] == "/pricing.html" || regexHtml.exec(indexHtml)[0] == "/individualplans.html" || regexHtml.exec(indexHtml)[0] == "/teamplans.html") {
  let menu = document.querySelector(".plans")
  menu.style.color = "#f34b5e"
} else if (regexHtml.exec(indexHtml)[0] == "/faq.html") {
  let menu = document.querySelector(".faq")
  menu.style.color = "#f34b5e"
} else if (regexHtml.exec(indexHtml)[0] == "/contact.html") {
  let menu = document.querySelector(".contactMenu")
  menu.style.color = "#f34b5e"
}



if (windowWidth > 1023) {
  resizeDesktop()
  window.addEventListener("resize", resizeMobile)
} else {
  resizeMobile()
  window.addEventListener("resize", resizeMobile)
}

function resizeDesktop() {
  if (!regexHtml.exec(indexHtml)) {
    headerContainer.style.top = "30px"
    window.addEventListener("scroll", onScrollIndexDesktop)

  } else {
    headerContainer.style.top = "30px"
    window.addEventListener("scroll", onScrollOthersDesktop)
  }
}

function onScrollIndexDesktop() {
  if (window.pageYOffset > 31) {
    headerContainer.classList.add("header-fixed")
    headerContainer.style.top = "0px"
  } else {
    headerContainer.classList.remove("header-fixed")
    headerContainer.style.top = "30px"
  }
}

function onScrollOthersDesktop() {
  if (window.pageYOffset > 25) {
    headerContainer.classList.add("header-fixed")
    headerContainer.style.top = "0px"
  } else {
    headerContainer.classList.remove("header-fixed")
    headerContainer.style.top = "30px"
  }
}

function resizeMobile() {
  windowWidth = window.innerWidth
  if (windowWidth < 480) {
    if (!regexHtml.exec(indexHtml)) {
      headerContainer.style.top = "50px"
    } else {
      headerContainer.style.top = "0px"
    }
  } else if (windowWidth < 1024) {
    if (!regexHtml.exec(indexHtml)) {
      window.removeEventListener("scroll", onScrollIndexDesktop)
      headerContainer.style.top = "30px"
      headerContainer.style.position = "fixed"
    } else {
      window.removeEventListener("scroll", onScrollOthersDesktop)
      headerContainer.style.top = "0px"
      headerContainer.style.position = "fixed"
    }
  } else {
    resizeDesktop()
  }
}

//ANIMATION MENU MOBILE CLICK


linesMenu.onclick = function () {
  if (!key) {

    function openMenuClass(varName, className) {
      varName.classList.add(className)
    }

    function applyClassOnLi() {
      navMenuLi.forEach((i) => {
        i.classList.add("menu-ul-li-open")
      })
      navMenuLiA.forEach((i) => {
        i.classList.add("menu-ul-li-a")
      })
    }
    key = true
  } else {
    function openMenuClass(varName, className) {
      varName.classList.remove(className)
    }

    function applyClassOnLi() {
      navMenuLi.forEach((i) => {
        i.classList.remove("menu-ul-li-open")
      })
      navMenuLiA.forEach((i) => {
        i.classList.remove("menu-ul-li-a")
      })
    }
    key = false
  }
  openMenuClass(logoMenu, "logo-open")
  openMenuClass(navMenu, "menu-open")
  openMenuClass(navMenuUl, "menu-ul-open")
  applyClassOnLi()
  openMenuClass(headerContainer, "header-open")
  openMenuClass(navMenuButton, "button-open")
}