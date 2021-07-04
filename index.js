// Code your solution in this file!
const driversFirst = ['Sally', 'Bob']
const returnFirstTwoDrivers = function(drivers){
  return driversFirst
}
const driversLast = ['Freddy', 'Claudia']
const returnLastTwoDrivers = function (drivers){
  return driversLast;
}
selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
  return function (){
    return (number * number);
  };
}
const fareDoubler = function (number){return (number * 2);};
const fareTripler = function (number){return (number * 3);};

function fetchSpecifiedDrivers(drivers, functi){return functi(drivers)}
