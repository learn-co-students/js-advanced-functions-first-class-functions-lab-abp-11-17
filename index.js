// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return array.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
  return array.slice(array.length - 2, array.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (integer) {
  return function (fare) {
    return fare * integer;
  }
}

function fareDoubler(fare) {
  return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
  return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(array, theFunction) {
  return theFunction(array);
}
