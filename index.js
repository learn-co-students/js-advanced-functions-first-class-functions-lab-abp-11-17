// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice((drivers.length -  2), (drivers.length));
}


selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function (integer) {
  return function (num) {
    return num * integer;
  };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, func) {
 return func(drivers)
}
