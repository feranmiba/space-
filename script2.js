'use strict';

//TECHNOLOGY
const theTechnology = document.querySelector('.pick');
const closeButton = document.querySelector('.close');
const fe = document.querySelector('.fe');

const Capsule = document.querySelector('.th');
const openCapsule = document.querySelector('.capsule');

const Spaceport = document.querySelector('.th1');
const openSpaceport = document.querySelector('.spaceport');

const vehicle = document.querySelector('.th2');
const openVehicle = document.querySelector('.vehicle');

Capsule.addEventListener('click', function () {
  openSpaceport.classList.add('hidden');
  openCapsule.classList.remove('hidden');
  openVehicle.classList.add('hidden');
});

Spaceport.addEventListener('click', function () {
  openSpaceport.classList.remove('hidden');
  openCapsule.classList.add('hidden');
  openVehicle.classList.add('hidden');
});

vehicle.addEventListener('click', function () {
  openSpaceport.classList.add('hidden');
  openCapsule.classList.add('hidden');
  openVehicle.classList.remove('hidden');
});

theTechnology.addEventListener('click', function (e) {
  e.preventDefault;
  fe.classList.remove('hidden');
});
closeButton.addEventListener('click', function (e) {
  e.preventDefault;
  fe.classList.add('hidden');
});
