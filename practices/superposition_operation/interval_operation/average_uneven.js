'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let sum = 0
  let odArr = collection.filter(function(item){
    return item%2==1
  })
  sum = odArr.reduce(function(a,b){
    return a+b
  })
  return parseInt(sum/odArr.length)
}

module.exports = average_uneven;
