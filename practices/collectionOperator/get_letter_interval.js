'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let resultArray = []
  let result = []
  for(let x = 0; x < 26; x++){ 
     let tempData = String.fromCharCode(97 + x) 
     resultArray.push(tempData)
  } 
  if (number_a <= number_b) {
    result = resultArray.slice(number_a-1, number_b)
  } else {
    result = resultArray.slice(number_b-1, number_a)
    result = result.reverse()
  }
  return result
  }
  
 module.exports = get_letter_interval;
