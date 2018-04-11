'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let resultArray = []
  let array1 = []
  for(let x = 0; x < 26; x++){
    let tempData = String.fromCharCode(97 + x)
    array1.push(tempData)
    resultArray.push(tempData)
  }
    console.log(array1)
  for(let x = 0; x < 2; x++){
    for(let y = 0; y < array1.length; y++){
      let i = array1[x] + array1[y]
      resultArray.push(i)
    }
  }
  
  let result = []
  if(number_a < number_b){
    result = resultArray.slice(number_a-1, number_b)
  }
  if(number_a > number_b){
    result = resultArray.slice(number_b-1, number_a)
    result = result.reverse()
  }
  if(number_a == number_b){
    let x = number_a - 1
    result.push(resultArray[x])
  }
  return result
}

module.exports = get_letter_interval_2;

