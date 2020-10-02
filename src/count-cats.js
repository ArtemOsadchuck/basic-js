const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  
  let matrixF1 = [].concat(...matrix)
  
  let filterMatrix = matrixF1.filter(item => item === '^^')
  
  console.log(matrixF1)
  // console.log(matrixF2)
  // console.log(filterMatrix)

  let result = `${filterMatrix.length}`
  if (result === "0"){
    return 0
  }
  return result
};
