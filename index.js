// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return multiplier * fare;
  }
}

const fareDoubler = function (fare) {
  const fareMultipler = createFareMultiplier(2);
  return fareMultipler(fare);
}

const fareTripler = function (fare) {
  const fareMultipler = createFareMultiplier(3);
  return fareMultipler(fare);
}

function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction === returnFirstTwoDrivers ? returnFirstTwoDrivers(drivers) : returnLastTwoDrivers(drivers);
}
