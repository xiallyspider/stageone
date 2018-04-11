'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=[];
  if (number_a < number_b) {
    var x = number_a; 
    for (x;x <= number_b; x++) {
      if (x%2 == 0) {
        result.push(x);
      }
    }
    return result;
  }
 
  if (number_a > number_b) {
    var x = number_a; 
    for (x;x >= number_b; x--) {
      if (x%2 == 0) {
        result.push(x);
      }
    }
    return result;
  }
  if(number_a == number_b && number_a%2 == 0){
    result.push(number_b);
    return result;
  }else{
    return result;
  }
}

module.exports = get_integer_interval_2;
