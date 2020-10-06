const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 
  str = String(str)
    

  let repeatTimes = options.repeatTimes
  if (repeatTimes === undefined){
    repeatTimes = 1
  }

  let separator = String(options.separator)
  if (separator === "undefined"){
    separator = "+"
  }

  let addition = String(options.addition)
  if ( addition === "undefined"){
    addition = ""
  }

  let additionRepeatTimes = options.additionRepeatTimes
  if (additionRepeatTimes === undefined){
    additionRepeatTimes = 1
  }

  let additionSeparator = String(options.additionSeparator)
   if (additionSeparator === "undefined"){
    additionSeparator = "|"
   }

 
    let addArr = []
    let strAddArr = []
    for (let i =0; i < additionRepeatTimes; i++){
      addArr.push(addition)
    }
    addArr = addArr.join(additionSeparator)

    for( let k = 0; k < repeatTimes; k++){
      strAddArr.push(str + addArr)
    }

   return strAddArr.join(separator)

};
  