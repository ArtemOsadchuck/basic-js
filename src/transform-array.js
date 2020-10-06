const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
    if (!Array.isArray(arr)) { 
    throw new  castomError ("error") }
      let newArr = arr.slice()
      let resultArr = []
  
      
  
      for (let i = 0; i < newArr.length; i++){
    
        if (newArr[i] === '--double-next' ){
          newArr[i]= newArr[i + 1] 
          if (newArr[i] === undefined){
            newArr[i] = newArr[i-1]
            resultArr.pop(newArr[i])
              
          }
    
        } else if (newArr[i] === `--discard-next`){
          i++
          i++
          if (newArr[i] === undefined){
            newArr[i] = newArr[i-3]
            resultArr.pop(newArr[i])
              
          }
  
        } else if (newArr[i] === `--discard-prev`){
          resultArr.pop(newArr[i])
          i++
    
        } else if (newArr[i] === `--double-prev`){
          
          newArr[i] = newArr[i - 1]
          if( newArr[i] === undefined){
            resultArr.pop(newArr[i])
            i++       
          }
        }
    
    
      resultArr.push(newArr[i])
    
      } 
    



      for (let i = 0; i < resultArr.length; i++){
        if (resultArr[i] === '--double-prev' || resultArr[i] === '--discard-next' 
            || resultArr[i] === '--double-next' || resultArr[i] === '--discard-prev') {
          resultArr.splice(i, 1)
        }
    }
     return resultArr
    

};
