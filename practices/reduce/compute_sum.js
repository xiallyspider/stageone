'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  let sum = 0
  sum = collection.reduce(function(a, b) {
    return a+b
  })
  return sum
}

module.exports = calculate_elements_sum;

