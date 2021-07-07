// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  let newArray = [];
  newArray.push(drivers[0], drivers[1]);
  return newArray;
};

const returnLastTwoDrivers = function(drivers) {
  let newArray = [];
  newArray.push(drivers[drivers.length - 2], drivers[drivers.length - 1]);
  return newArray;
};

/*function selectingDrivers(selector1) {
  let selectedDrivers1 = [returnFirstTwoDrivers, returnLastTwoDrivers];
  return selectedDrivers1[selector1];
}*/
//the instructions suggests that this is just an array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  let price = function(fare) {
    return fare * multiplier;
  };
  return price;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, functionSelector) {
  return functionSelector(drivers);
}
