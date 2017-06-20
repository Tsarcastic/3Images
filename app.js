'use strict'

var images = [];
var totalClicks = 0;

function pic(name, path) {
  this.id = name;
  this.path = path;
  this.clickTally = 0;
  this.shownTally = 0
  images.push(this)
}

new pic('bag','assets/bag.jpg');
new pic('banana', 'assets/banana.jpg');
new pic('bathroom', 'assets/bathroom.jpg');
new pic('boots', 'assets/boots.jpg');
new pic('breakfast', 'assets/boot.jpg');
new pic('bubblegum', 'assets/bubblegum.jpg');
new pic('chair', 'assets/chair.jpg');
new pic('cthulhu', 'assets/cthulhu.jpg');
new pic('dog-duck', 'assets/dog-duck.jpg');
new pic('dragon', 'assets/dragon.jpg');
new pic('pen', 'assets/pen.jpg');
new pic('pet-sweep', 'assets/pet-sweep.jpg');
new pic('scissors', 'assets/scissors.jpg');
new pic('shark', 'assets/shark.jpg');
new pic('sweep', 'assets/sweep.png');
new pic('tauntaun', 'assets/tauntaun.jpg');
new pic('unicorn', 'assets/unicorn.jpg');
new pic('usb', 'usb.gif');
new pic('water-can.jpg', 'water-can.jpg');
new pic('wine-glass.jpg', 'wine-glass');

var container = document.getElementById('bag');
container.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('Click click!')
  for(var i = 0; i < images.length; i++) {
    if(event.target.id === images[i].id ) {
      totalClicks += 1;
      images[i].clickTally += 1;
    }
  }
}

function randomImgNum() {;
  return Math.floor(Math.random() * (images.length));
}
