'use strict';


function compute_average(collection) {
  //在这里写入代码
  let ave = 0
  let sum = 0
  let len = collection.length
  for (let x = 0; x < len; x++){
    sum += collection[x]
  }
  ave =  parseFloat((sum/len).toFixed(1))
  return ave
}

module.exports = compute_average;

