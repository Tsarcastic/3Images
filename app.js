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
    calcRat();
    myChart();
    myChart2();

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

function myChart() {
  var chartLabel = [];
  var chartData = [];
  for (var i = 0; i < images.length; i++) {
    chartData.push(images[i].clickTally);
    chartLabel.push(images[i].id);
  }
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabel,
      datasets: [{
        label: 'Bus Mall - Product Interest ',
        data: chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, .9)',
          'rgba(255, 206, 88, .8)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, .9)',
          'rgba(255, 159, 64, .8)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, .7)',
          'rgba(255, 206, 88.8)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255,.9)',
          'rgba(255, 159, 64,.8)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, .8)',
          'rgba(255, 206, 88, .9)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, .9)',
          'rgba(255, 159, 64, .8)',
          'rgba(255, 99, 132,1)',
          'rgba(54, 162, 235.9)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function myChart2() {
  var chartLabel = [];
  var chartCon = [];
  for (var i = 0; i < images.length; i++) {
    chartLabel.push(images[i].id);
    chartCon.push(images[i].final);
  }

  var ctx = document.getElementById("myChart2").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: chartLabel,
      datasets: [{
        label: 'Buss Mall - Conversion -Rate',
        data: chartCon,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, .9)',
          'rgba(255, 206, 88, .8)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, .9)',
          'rgba(255, 159, 64, .8)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, .7)',
          'rgba(255, 206, 88.8)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255,.9)',
          'rgba(255, 159, 64,.8)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, .8)',
          'rgba(255, 206, 88, .9)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, .9)',
          'rgba(255, 159, 64, .8)',
          'rgba(255, 99, 132,1)',
          'rgba(54, 162, 235.9)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}



generateRay();
renderImage();
img3.addEventListener('click', handleClick);
