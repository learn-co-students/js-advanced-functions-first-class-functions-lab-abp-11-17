const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1] ];
  };

const returnLastTwoDrivers = function (drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1] ];
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {

  return function (integer) {
    return integer * integer;
  }
};

const fareDoubler = function (integer) {
  return integer * 2;
};

const fareTripler = function (integer) {
  return integer * 3;
}


function selectDifferentDrivers (drivers, fn) {
  return fn(drivers);
}
