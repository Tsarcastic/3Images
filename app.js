'use strict'

var images = [];
var totalClicks = 0;
var newRay = [1, 2, 3]; //placeholder numbers
var oldRay = [3, 2, 1]; //placeholder numbers
var myTable = document.getElementById('images');
var voteRat = []
var ids = [] //Need to populate. (Can do it)

if totalClicks >= 25 {}

function Pic(name, path) {
  this.id = name;
  this.path = path;
  this.clickTally = 0;
  this.shownTally = 0;
  images.push(this);
  ids.push(this.name);
}

new Pic('bag','assets/bag.jpg');
new Pic('banana', 'assets/banana.jpg');
new Pic('bathroom', 'assets/bathroom.jpg');
new Pic('boots', 'assets/boots.jpg');
new Pic('breakfast', 'assets/boot.jpg');
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
new Pic('usb', 'usb.gif');
new Pic('water-can.jpg', 'water-can.jpg');
new Pic('wine-glass.jpg', 'wine-glass');

var container = document.getElementById('bag');
container.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('Click click!')
  for(var i = 0; i < images.length; i++) {
    if(event.target.id === images[i].id ) {
      totalClicks += 1;
      images[i].clickTally += 1;
      //generateRay then appendRay.
    }
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
      newRay.push(thisPic)
    }
  }
  oldRay = newRay;
}
