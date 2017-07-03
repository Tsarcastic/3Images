'use strict'

var images = [];
var totalClicks = 0;
var totalViews = 0;
var newRay = [1, 2, 3]; //placeholder numbers
var oldRay = [3, 2, 1]; //placeholder numbers
var img3 = document.getElementById('img3');
var ids = [] //Need to populate. (Can do it)

// if totalClicks >= 25 {}; Remove images (removeIm), add message & button to reveal chart (closingTime).

function Pic(name, path) {
  this.id = name;
  this.path = path;
  this.clickTally = 0;
  this.shownTally = 0;
  this.final = 0
  images.push(this)
}

new Pic('bag','assets/bag.jpg');
new Pic('banana', 'assets/banana.jpg');
new Pic('bathroom', 'assets/bathroom.jpg');
new Pic('boots', 'assets/boots.jpg');
new Pic('breakfast', 'assets/breakfast.jpg');
new Pic('bubblegum', 'assets/bubblegum.jpg');
new Pic('chair', 'assets/chair.jpg');
new Pic('cthulhu', 'assets/cthulhu.jpg');
new Pic('dog-duck', 'assets/dog-duck.jpg');
new Pic('dragon', 'assets/dragon.jpg');
new Pic('pen', 'assets/pen.jpg');
new Pic('pet-sweep', 'assets/pet-sweep.jpg');
new Pic('scissors', 'assets/scissors.jpg');
new Pic('shark', 'assets/shark.jpg');
new Pic('sweep', 'assets/sweep.png');
new Pic('tauntaun', 'assets/tauntaun.jpg');
new Pic('unicorn', 'assets/unicorn.jpg');
new Pic('usb', 'assets/usb.gif');
new Pic('water-can.jpg', 'assets/water-can.jpg');
new Pic('wine-glass.jpg', 'assets/wine-glass.jpg');

function compare(a, b) {
  if (a.final < b.final) {
    return -1
  } else if (a.final > b.final) {
    return 1
  } else {
    return 0
  }
  }

function calcRat() {
  for (var c = 0; c <images.length; c++) {
    if (images[c].shownTally === 0) {
      images[c].final = 0
    } else {
      images[c].final = images[c].clickTally / images[c].shownTally
    }
    console.log(images[c].final)
  }
  images.sort(compare)
}


function handleClick(event) {
  console.log('Click click!')
  for(var i = 0; i < images.length; i++) {
    if(event.target.id === images[i].id ) {
      images[i].clickTally++;
      totalClicks++;
      pushThing();
      generateRay();
      clearImages();
      renderImage();
    }
  }
  if (totalClicks === 5) {
    img3.removeEventListener('click', handleClick);
    clearImages();
    console.log(images);
  }
}


function randomImg() {; //Generate a random item from images array
  var spot = Math.floor(Math.random() * (images.length));
  return images[spot]
}

function generateRay() { //Generates a new array & sets old array
  newRay = []
  while (newRay.length < 3) {
    var thisPic = randomImg();
    console.log(thisPic);
    if (oldRay.indexOf(thisPic) === -1 && newRay.indexOf(thisPic) === -1) {
      newRay.push(thisPic);
      thisPic.shownTally++;
    }
    continue;
  }
  oldRay = newRay;
}

function renderImage() {

  for (var i = 0; i < newRay.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = newRay[i].path;
    imgEl.id = newRay[i].id;;
    img3.appendChild(imgEl)
  }
};

function clearImages() {
  while (img3.firstChild) {
    img3.removeChild(img3.firstChild);
  }
}

function pushThing() {
  localStorage.clear();
  var imagesJSON = JSON.stringify(images);
  localStorage.things = imagesJSON;
}

function pullThing() {
  var retrievedThing = localStorage.things;
  var parsedThing = JSON.parse(retrievedThing);
  for (var i = 0; i < parsedThing.length; i ++) {
    images[i] = parsedThing[i];
  }
}

if (localStorage === true) {
  pullThing();
}




generateRay();
renderImage();
img3.addEventListener('click', handleClick);
