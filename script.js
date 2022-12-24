'use strict';

//DESTINATION
//hamburger
const hamburger = document.querySelector('.hamburger');
const nav__links = document.querySelector('.nav__links');
hamburger.addEventListener('click', function () {
  nav__links.classList.remove('hid');
  hamburger.style.diplay = 'none';
});
//const pickYourDestination = document.querySelector('.picke');
//const pickYourDestination = document.querySelector('.picke');
const pickYourDestination = document.querySelector('.picke');
const closeButton = document.querySelector('.close');
console.log(pickYourDestination);
const feat = document.querySelector('.feat');
console.log(feat);

const Europa = document.querySelector('.them');
const openEuropa = document.querySelector('.Europa');

console.log();

const mars = document.querySelector('.them1');
const openMars = document.querySelector('.mars');

const moon = document.querySelector('.them2');
const openMoon = document.querySelector('.moon');

const titan = document.querySelector('.them3');
const openTitan = document.querySelector('.titan');

pickYourDestination.addEventListener('click', function (e) {
  e.preventDefault;
  feat.classList.remove('hide');
});
closeButton.addEventListener('click', function (e) {
  e.preventDefault;
  feat.classList.add('hide');
});

Europa.addEventListener('click', function () {
  openMars.classList.add('hide');
  openEuropa.classList.remove('hide');
  openMoon.classList.add('hide');
  openTitan.classList.add('hide');
});

mars.addEventListener('click', function () {
  openMars.classList.remove('hide');
  openEuropa.classList.add('hide');
  openMoon.classList.add('hide');
  openTitan.classList.add('hide');
});

moon.addEventListener('click', function () {
  openEuropa.classList.add('hide');
  openMars.classList.add('hide');
  openTitan.classList.add('hide');
  openMoon.classList.remove('hide');
});

titan.addEventListener('click', function () {
  openEuropa.classList.add('hide');
  openMars.classList.add('hide');
  openMoon.classList.add('hide');
  openTitan.classList.remove('hide');
});
