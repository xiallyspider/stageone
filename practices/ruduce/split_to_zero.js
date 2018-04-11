'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = []
  let item = number
  result.push(item)
  do {
    item = Number((item - interval).toFixed(1))
    result.push(item)
  } while (item > 0 )
  return result
}

module.exports = spilt_to_zero;
