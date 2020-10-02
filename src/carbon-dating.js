const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
let numSampleActivity = parseFloat(sampleActivity)
let Tk = 0.693 / HALF_LIFE_PERIOD
let result
  if (typeof sampleActivity !== "srting" ||  sampleActivity === undefined || numsampleActivity < 0){
    return false
  } else {
    result = Math.round(Math.log(MODERN_ACTIVITY / numSampleActivity) / Tk)
  }
  return result
};
