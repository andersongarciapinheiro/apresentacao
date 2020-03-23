const contentTitle = document.querySelector('.container-title')
const contentTitleHeight = parseInt(contentTitle.getBoundingClientRect().height);

function isElementInView (element, fullyInView) {
  var pageTop = window.scrollY;
  var pageBottom = pageTop + window.innerHeight;
  var elementTop = element.offsetTop + contentTitleHeight;
  var elementBottom = elementTop + parseInt(element.getBoundingClientRect().height);

  if (fullyInView) {
      return ((pageTop < elementTop) && (pageBottom > elementBottom));
  } else {
      return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
  }
}

let iframes = document.querySelectorAll(".grid-item > iframe")

for (const iframe of iframes) {
  iframe.style.opacity = "0"
  iframe.style.transition = "opacity .3s ease-in"
}
window.onload = function () {
  for (const iframe of iframes) {
    iframe.style.opacity = "1"
  }

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.onscroll = function (e) {
      for (const iframe of iframes) {
        if (!iframe.offsetParent || iframe.offsetParent.classList.contains('grid-item-2')) continue
        if (isElementInView(iframe.offsetParent, true)) {
          iframe.contentWindow.play()
        } else {
          iframe.contentWindow.stop()
        }
      }
    }
  }
}