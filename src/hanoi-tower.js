const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let turns = (2 ** disksNumber) - 1

  let turnsSpeedPerSecond = (turnsSpeed / 60) / 60
  let secondsOnTask = Math.floor(turns / turnsSpeedPerSecond)

  let result ={"turns": turns, "seconds" : secondsOnTask}
  return result

};
