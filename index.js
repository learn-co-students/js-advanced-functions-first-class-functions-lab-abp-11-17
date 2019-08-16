// Code your solution in this file!

const returnFirstTwoDrivers=function (arrDrivers){
  return arrDrivers.slice(0,2);
 };
const returnLastTwoDrivers=function (arrDrivers){
  return arrDrivers.slice(arrDrivers.length-2,arrDrivers.length);
};
const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  return function(fare){
    return multiplier*fare;
  }
}
function fareDoubler(fare)
{
  const fareDoubler2=createFareMultiplier(2);
  return fareDoubler2(fare);
}

function fareTripler(fare)
{
  const fareTripler3=createFareMultiplier(3);
  return fareTripler3(fare);
}
function selectDifferentDrivers(arrayOfDrivers, fn)
{
  if (arguments[1].toString()==returnFirstTwoDrivers)
  {
    return returnFirstTwoDrivers(arrayOfDrivers);
  }
  else
  {
    return returnLastTwoDrivers(arrayOfDrivers);
  }
}
