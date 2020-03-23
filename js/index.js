let carousel = document.querySelectorAll(".carousel-item")
let carouselDiscFirst = document.querySelector(".disc-menu-1")
let carouselDiscSecond = document.querySelector(".disc-menu-2")
let carouselDiscThird = document.querySelector(".disc-menu-3")
let carouselDiscFourth = document.querySelector(".disc-menu-4")
var containerReports = document.getElementById("container-reports")
let item = 1
let time
if (screen.width < 1024) time = 25000
else time = 40000
var xDown = null;
var yDown = null;
var direction = true

containerReports.addEventListener('touchstart', handleTouchStart, false);
containerReports.addEventListener('touchmove', handleTouchMove, false);

timer()

function timer() {
  setTimeout(function () {
    if (screen.width < 1024) {
      if (direction && item < 4) {
        item++
      } else if (direction && item === 4) {
        item--
        direction = false
      } else if (!direction && item > 1) {
        item--
      } else if (!direction && item === 1) {
        direction = true
        item++
      }
    } else {
      if (direction && item < 2) {
        item++
      } else if (direction && item === 2) {
        item--
        direction = false
      } else if (!direction && item > 1) {
        item--
      } else if (!direction && item === 1) {
        direction = true
        item++
      }
    }
    selectDisc(item)
    resetTimer()
  }, time)
}

function resetTimer() {
  timer()
}

carouselDiscFirst.onclick = () => {
  item = 1
  selectDisc(item)
}

carouselDiscSecond.onclick = () => {
  item = 2
  selectDisc(item)
}

carouselDiscThird.onclick = () => {
  item = 3
  selectDisc(item)
}

carouselDiscFourth.onclick = () => {
  item = 4
  selectDisc(item)
}

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var xDiff = xDown - xUp;

  if (screen.width < 1024) {
    if (xDiff > 0) {
      if (item < 4) item++
    } else {
      if (item > 0) item--
    }
  } else {
    if (xDiff > 0) {
      if (item < 2) item++
    } else {
      if (item > 0) item--
    }
  }

  selectDisc(item)
  xDown = null;
  yDown = null;
}

function selectDisc(item) {
  switch (item) {
    case 1:
      carousel.forEach((i) => {
        i.classList.remove("carousel-scroll")
        i.classList.remove("carousel-scroll2")
        i.classList.remove("carousel-scroll3")
      })
      carouselDiscFirst.classList.add("disc-active")
      carouselDiscSecond.classList.remove("disc-active")
      carouselDiscThird.classList.remove("disc-active")
      carouselDiscFourth.classList.remove("disc-active")
      break
    case 2:
      carousel.forEach((i) => {
        i.classList.remove("carousel-scroll2")
        i.classList.remove("carousel-scroll3")
        i.classList.add("carousel-scroll")
      })
      carouselDiscFirst.classList.remove("disc-active")
      carouselDiscSecond.classList.add("disc-active")
      carouselDiscThird.classList.remove("disc-active")
      carouselDiscFourth.classList.remove("disc-active")
      break
    case 3:
      carousel.forEach((i) => {
        i.classList.remove("carousel-scroll3")
        i.classList.add("carousel-scroll2")
      })
      carouselDiscFirst.classList.remove("disc-active")
      carouselDiscSecond.classList.remove("disc-active")
      carouselDiscThird.classList.add("disc-active")
      carouselDiscFourth.classList.remove("disc-active")
      break
    case 4:
      carousel.forEach((i) => {
        i.classList.add("carousel-scroll3")
      })
      carouselDiscFirst.classList.remove("disc-active")
      carouselDiscSecond.classList.remove("disc-active")
      carouselDiscThird.classList.remove("disc-active")
      carouselDiscFourth.classList.add("disc-active")
      break
  }
}

const watchHeaderVideo = document.querySelector('body > .video > .cta-header')
const watchVideo = document.querySelector('body > div.wrap > div.container-cta > button')

watchHeaderVideo.onclick = showVideo
watchVideo.onclick = showVideo

function showVideo(e) {
  e.preventDefault()
  const overlay = document.createElement('DIV')
  overlay.style.background = 'rgba(0,0,0,0.7)'
  overlay.style.position = 'fixed'
  overlay.style.top = overlay.style.left = overlay.style.right = overlay.style.bottom = '0'
  overlay.innerHTML = '<iframe class="videoHome" src="https://www.youtube.com/embed/p7MelGdBGl8?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  document.body.appendChild(overlay)

  document.body.classList.add('stop-scrolling')
  overlay.onclick = hideVideo
}

function hideVideo(e) {
  document.body.removeChild(e.target)
  document.body.classList.remove('stop-scrolling')
}