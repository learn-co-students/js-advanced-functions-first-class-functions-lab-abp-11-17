// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  let holderArray = [];

  holderArray.push(drivers[0])
  holderArray.push(drivers[1])

  return holderArray;
}

const returnLastTwoDrivers = function(drivers) {
  let holderArray = [];

  holderArray.push(drivers[drivers.length - 2])
  holderArray.push(drivers[drivers.length - 1])

  return holderArray;
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const fareDoubler = function(fare) {
  return fare * 2;
}

const fareTripler = function(fare) {
  return fare * 3;
}

const selectDifferentDrivers = function(drivers, cb) {
  return cb(drivers);
}
