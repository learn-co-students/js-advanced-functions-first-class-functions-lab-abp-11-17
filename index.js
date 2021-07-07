// Code your solution in this file!

//This is a function assigned to a constant.
const returnFirstTwoDrivers = function(drivers){
  return [drivers[0] ,drivers[1]];
}

//This is a function assigned to a constant that returns the last 2 drivers.
const returnLastTwoDrivers = function(drivers){
  return [drivers.slice(-2)[0], drivers.slice(-1)[0]]
  // alt opt:return [drivers[drivers.length-2],drivers[drivers.length-1] ];
}
//Functions stored in array
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  return function(fare){
    return fare*multiplier
  }
}

const fareDoubler= createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);

function selectDifferentDrivers(drivers, targetFunction){
  return targetFunction(drivers)
}
