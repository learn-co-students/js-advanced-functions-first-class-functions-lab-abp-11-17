// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers){
  let newDrivers= []
  newDrivers.push(drivers[0])
  newDrivers.push(drivers[1])
  return newDrivers
}

const returnLastTwoDrivers = function (drivers){
  let l= drivers.length
  let newDrivers=[]
  newDrivers.push(drivers[l-2])
  newDrivers.push(drivers[l-1])
  return newDrivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function(multiplier){
  return function(fare){return fare*multiplier}
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, selectingDrivers){
    return selectingDrivers(drivers)
}
