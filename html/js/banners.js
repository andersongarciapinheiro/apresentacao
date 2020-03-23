let els = document.querySelectorAll("iframe")

for(const el of els) {
  el.onload = () =>{
    let iframe = el.contentWindow.document
    var banner = iframe.querySelector('#banner')
    banner.addEventListener("mouseover", el.contentWindow.play, !1)
    banner.addEventListener("mouseout", el.contentWindow.stop, !1)
    
  }
  
}


