// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function() {
  let firstTwoDrivers = drivers.slice(0,2)
  return firstTwoDrivers;
}

const returnLastTwoDrivers = function() {
  let lastTwoDrivers = drivers.slice(2)
  return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function(multiplier) {
    return integer * multiplier;
  }
}

function fareDoubler(integer) {
  return integer * 2;
}

function fareTripler(integer) {
  return integer * 3;
}

function selectDifferentDrivers(drivers, someFunction) {
  return someFunction(drivers)
}
