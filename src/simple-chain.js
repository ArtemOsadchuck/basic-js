const CustomError = require("../extensions/custom-error");

const chainMaker = {

  arrCain: [],

  getLength() {
    return this.arrCain.length
  },                  
  addLink(value) {   
    this.arrCain.push('('+" " + value +" " + ')')
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position < 1 || position > this.arrCain.length){
      this.arrCain = []
      throw new castomError ("error")
    } else{

      this.arrCain.splice(position - 1, 1)
        return this
    }
  },
  reverseChain() {
    this.arrCain.reverse()
    return this

  },
  finishChain() {
    
    let newChain = this.arrCain
    this.arrCain = []
    return newChain.join("~~")

  }
};

module.exports = chainMaker;
