'use strict'

var images = [];
var totalClicks = 0;
var newRay = [1, 2, 3]; //placeholder numbers
var oldRay = [3, 2, 1]; //placeholder numbers
var myTable = document.getElementById('images');

function Pic(name, path) {
  this.id = name;
  this.path = path;
  this.clickTally = 0;
  this.shownTally = 0;
  images.push(this)
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

function randomImgNum() {; //Generate the branch number
  return Math.floor(Math.random() * (images.length));
}

function generateRay() { //Needs work. How to avoid repeat images?
  var oldRay = newRay;
  newRay = [1, 2, 3];
  while (newRay[0] = 1) {
    var thisFlip = images[randomImgNum()];
    if (thisFlip === oldRay[0] || thisFlip === oldRay[1] || thisFlip === oldRay[2]) {
      continue;
    } else {
      newRay.slice(0, 1, thisFlip)
    }


}
}

// };
// while (newRay.length < 2) {
//   var thisFlip = images[randomImgNum()];
//   if (thisFlip === oldRay[0] || thisFlip === oldRay[1] || thisFlip === oldRay[2] || thisFlip === newRay[0]) {
//   } else {newRay.push(thisFlip)}
// };
// while (newRay.length < 3) {
//   var thisFlip = images[randomImgNum()];
//   if (thisFlip === oldRay[0] || thisFlip === oldRay[1] || thisFlip === oldRay[2] || thisFlip === newRay[0] || thisFlip ===newRay[1]) {
//   } else {newRay.push(thisFlip)}
// }
//
// while (x < 3)
//   for (var i = 0, i <)
//   var thisFlip = images[randomImgNum()];

// var thisFlip = images[randomImgNum()] IN CASE I LOSE IT



// function renderImage() {
//   var trEl = document.createElement('tr');
//
//   var tdEl = document.createElement('td');
//   var thisFlip = images[randomImgNum()];
//     tdEl.textContent = '<img src=\"' + thisFlip.path + '\" id=\"' + thisFlip.id + '\">';
//   trEl.appendChild(tdEl);
//   myTable.appendChild(trEl)
// } PART OF APPENDING LATER
