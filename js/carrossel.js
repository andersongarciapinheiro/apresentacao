// MENU CARROSSEL 1
let videosA = document.querySelectorAll(".videoA")
let menu1E = document.querySelector(".menu1E")
let menu1D = document.querySelector(".menu1D")
var vidA = document.querySelectorAll(".vidA") 
var vidB = document.querySelectorAll(".vidB") 
var vidC = document.querySelectorAll(".vidC") 
var vidD = document.querySelectorAll(".vidD") 


let positionArrayA = 0

menu1D.onclick = () => {
  goRightA()
}
menu1E.onclick = () => {
  goLeftA()
}

function goRightA() {
  if(positionArrayA == videosA.length -1) {
    positionArrayA = positionArrayA - videosA.length + 1
    videosA[positionArrayA].classList.add("revel")
    let positionArrayAPrevious = videosA.length - 1
    videosA[positionArrayAPrevious].classList.remove("revel")
    vidA[positionArrayAPrevious].pause()
    
  } else {
    positionArrayA = positionArrayA + 1
    videosA[positionArrayA].classList.add("revel")
    let positionArrayAPrevious = positionArrayA - 1
    videosA[positionArrayAPrevious].classList.remove("revel")
    vidA[positionArrayAPrevious].pause()
  }
}

function goLeftA() {
  if(positionArrayA == videosA.length - videosA.length) {
    positionArrayA = positionArrayA + videosA.length - 1
    videosA[positionArrayA].classList.add("revel")
    let positionArrayAPrevious = positionArrayA - positionArrayA
    console.log(positionArrayAPrevious)
    videosA[positionArrayAPrevious].classList.remove("revel")
    vidA[positionArrayAPrevious].pause()
        
  } else {
    positionArrayA = positionArrayA - 1
    videosA[positionArrayA].classList.add("revel")
    let positionArrayAPrevious = positionArrayA + 1
    videosA[positionArrayAPrevious].classList.remove("revel")
    vidA[positionArrayAPrevious].pause()
  }
}

//------------------ MENU CARROSSEL 2

let videosB = document.querySelectorAll(".videoB")
let menu2E = document.querySelector(".menu2E")
let menu2D = document.querySelector(".menu2D")

let positionArrayB = 0

menu2D.onclick = () => {goRightB()}
menu2E.onclick = () => {goLeftB()}

function goRightB() {
  if(positionArrayB == videosB.length -1) {
    positionArrayB = positionArrayB - videosB.length + 1
    videosB[positionArrayB].classList.add("revel")
    let positionArrayBPrevious = videosB.length - 1
    videosB[positionArrayBPrevious].classList.remove("revel")
    vidB[positionArrayBPrevious].pause()
    
  } else {
    positionArrayB = positionArrayB + 1
    videosB[positionArrayB].classList.add("revel")
    let positionArrayBPrevious = positionArrayB - 1
    videosB[positionArrayBPrevious].classList.remove("revel")
    vidB[positionArrayBPrevious].pause()
  }
}

function goLeftB() {
  if(positionArrayB == videosB.length - videosB.length) {
    positionArrayB = positionArrayB + videosB.length - 1
    videosB[positionArrayB].classList.add("revel")
    let positionArrayBPrevious = positionArrayB - positionArrayB
    console.log(positionArrayBPrevious)
    videosB[positionArrayBPrevious].classList.remove("revel")
    vidB[positionArrayBPrevious].pause()
    
  } else {
    positionArrayB = positionArrayB - 1
    videosB[positionArrayB].classList.add("revel")
    let positionArrayBPrevious = positionArrayB + 1
    videosB[positionArrayBPrevious].classList.remove("revel")
    vidB[positionArrayBPrevious].pause()
  }
}

//------------------ MENU CARROSSEL 3

let videosC = document.querySelectorAll(".videoC")
let menu3E = document.querySelector(".menu3E")
let menu3D = document.querySelector(".menu3D")

let positionArrayC = 0

menu3D.onclick = () => {goRightC()}
menu3E.onclick = () => {goLeftC()}

function goRightC() {
  if(positionArrayC == videosC.length -1) {
    positionArrayC = positionArrayC - videosC.length + 1
    videosC[positionArrayC].classList.add("revel")
    let positionArrayCPrevious = videosC.length - 1
    videosC[positionArrayCPrevious].classList.remove("revel")
    vidC[positionArrayCPrevious].pause()
    
  } else {
    positionArrayC = positionArrayC + 1
    videosC[positionArrayC].classList.add("revel")
    let positionArrayCPrevious = positionArrayC - 1
    videosC[positionArrayCPrevious].classList.remove("revel")
    vidC[positionArrayCPrevious].pause()
  }
}

function goLeftC() {
  if(positionArrayC == videosC.length - videosC.length) {
    positionArrayC = positionArrayC + videosC.length - 1
    videosC[positionArrayC].classList.add("revel")
    let positionArrayCPrevious = positionArrayC - positionArrayC
    console.log(positionArrayCPrevious)
    videosC[positionArrayCPrevious].classList.remove("revel")
    vidC[positionArrayCPrevious].pause()
    
  } else {
    positionArrayC = positionArrayC - 1
    videosC[positionArrayC].classList.add("revel")
    let positionArrayCPrevious = positionArrayC + 1
    videosC[positionArrayCPrevious].classList.remove("revel")
    vidC[positionArrayCPrevious].pause()
  }
}

//------------------ MENU CARROSSEL 4

let videosD = document.querySelectorAll(".videoD")
let menu4E = document.querySelector(".menu4E")
let menu4D = document.querySelector(".menu4D")

let positionArrayD = 0

menu4D.onclick = () => {goRightD()}
menu4E.onclick = () => {goLeftD()}

function goRightD() {
  if(positionArrayD == videosD.length -1) {
    positionArrayD = positionArrayD - videosD.length + 1
    videosD[positionArrayD].classList.add("revel")
    let positionArrayDPrevious = videosD.length - 1
    videosD[positionArrayDPrevious].classList.remove("revel")
    vidD[positionArrayDPrevious].pause()
    
  } else {
    positionArrayD = positionArrayD + 1
    videosD[positionArrayD].classList.add("revel")
    let positionArrayDPrevious = positionArrayD - 1
    videosD[positionArrayDPrevious].classList.remove("revel")
    vidD[positionArrayDPrevious].pause()
  }
}

function goLeftD() {
  if(positionArrayD == videosD.length - videosD.length) {
    positionArrayD = positionArrayD + videosD.length - 1
    videosD[positionArrayD].classList.add("revel")
    let positionArrayDPrevious = positionArrayD - positionArrayD
    console.log(positionArrayDPrevious)
    videosD[positionArrayDPrevious].classList.remove("revel")
    vidD[positionArrayDPrevious].pause()
    
  } else {
    positionArrayD = positionArrayD - 1
    videosD[positionArrayD].classList.add("revel")
    let positionArrayDPrevious = positionArrayD + 1
    videosD[positionArrayDPrevious].classList.remove("revel")
    vidD[positionArrayDPrevious].pause()
  }
}


