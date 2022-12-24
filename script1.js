'use strict';

//CREW
const theCrew = document.querySelector('.pic');
const closeButton = document.querySelector('.close');
const fea = document.querySelector('.fea');

const commannder = document.querySelector('.the');

const openCommander = document.querySelector('.commander');
console.log(openCommander);

const flightEngineer = document.querySelector('.the1');
const openflightEngineer = document.querySelector('.flight');

const pilot = document.querySelector('.the2');
const openPilot = document.querySelector('.pilot');

const Mission = document.querySelector('.the3');
const openMission = document.querySelector('.Mission');

commannder.addEventListener('click', function () {
  openflightEngineer.classList.add('hid');
  openCommander.classList.remove('hid');
  openPilot.classList.add('hid');
  openMission.classList.add('hid');
});

flightEngineer.addEventListener('click', function () {
  openflightEngineer.classList.remove('hid');
  openCommander.classList.add('hid');
  openPilot.classList.add('hid');
  openMission.classList.add('hid');
});

pilot.addEventListener('click', function () {
  openMission.classList.add('hid');
  openflightEngineer.classList.add('hid');
  openCommander.classList.add('hid');
  openPilot.classList.remove('hid');
});

Mission.addEventListener('click', function () {
  openflightEngineer.classList.add('hid');
  openCommander.classList.add('hid');
  openPilot.classList.add('hid');
  openMission.classList.remove('hid');
});

theCrew.addEventListener('click', function (e) {
  e.preventDefault;
  fea.classList.remove('hid');
});
closeButton.addEventListener('click', function (e) {
  e.preventDefault;
  fea.classList.add('hid');
});
