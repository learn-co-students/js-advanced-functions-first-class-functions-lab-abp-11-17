// Code your solution in this file!
//1
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
};

//2
const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length - 2)
};

//3
selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//4
function createFareMultiplier(i){
  return function(i){
    return (i * i)
  }
};

//5
function fareDoubler(i){
    return i * 2
};

//6
function fareTripler(i){
    return i * 3
};

//7
const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
