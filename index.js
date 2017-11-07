// Code your solution in this file!

const returnFirstTwoDrivers = function (array){
  const newArray = array.slice(0, 2);
  return newArray;
};

const returnLastTwoDrivers = function (array){
  const newArray = array.slice(array.length-2, array.length);
  return newArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  return function(fare){
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, fn){
  return fn(array);
}
