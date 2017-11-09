// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function(drivers){
  return [drivers[drivers.length-2], drivers[drivers.length-1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
  const fareMultiplier = function(fare){
    return int*fare;
  }
  return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnXDrivers){
  return returnXDrivers(drivers);
}
