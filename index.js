// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  let names = array.slice(0,2);
  return names;
}

const returnLastTwoDrivers = function(array) {
  let names = array.slice(array.length-2);
  return names;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function(fare) {return fare*multiplier}
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(array,driverSelector) {
  return driverSelector(array)
}
