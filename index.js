// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers){
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers){
  return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x, fareMultiplier){
  return function fareMultiplier() {
    return Math.pow(x, 2)
  }
}

function fareDoubler(x){
  return (x*2)
}

function fareTripler(x){
  return (x*3)
}

function selectDifferentDrivers(drivers, returnDrivers){
  if (returnDrivers === returnFirstTwoDrivers) return drivers.slice(0, 2);
  if (returnDrivers === returnLastTwoDrivers) return drivers.slice(2, 4);

}
