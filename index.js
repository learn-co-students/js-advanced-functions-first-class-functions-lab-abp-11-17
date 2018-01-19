// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {return array.slice(0,2) };
// or the alternate syntax: const returnFirstTwoDrivers = array => array.slice(0,2);   ...cleaner but somewhat foreign and harder to remember

const returnLastTwoDrivers = function(array) {return array.slice(array.length-2) };

//array containing first two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
  return function(x){return x * 5};
}

function fareDoubler(double) {
  return double * 2;
}
function fareTripler(triple) {return triple * 3 };

function selectDifferentDrivers(arrayOfDrivers, drivers) {
  return drivers(arrayOfDrivers);
}
