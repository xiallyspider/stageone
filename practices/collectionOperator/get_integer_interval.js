'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if (number_a < number_b) {
    for (let x = number_a; x <= number_b; x++){
      result.push(x);
    }
    return result;
  }else if(number_a > number_b){
    for (let x = number_a; x >= number_b; x--){
      result.push(x);
    }
  } else {
    result.push(number_b);
  }
  return result;
}

module.exports = get_integer_interval;

